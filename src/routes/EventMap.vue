<template>
	<Fullscreen :loading="loadingMap && loadingEvents">
		<div id="map" class="flex-fill">
			<router-link id="searchInfo" class="alert alert-primary fade show m-3 position-absolute" role="alert" to="/event/search">
				<span v-html="$store.getters['map/message']" />
			</router-link>
		</div>
	</Fullscreen>
</template>

<script>
import Fullscreen from "@/layouts/Fullscreen"
import mapHelper from "@/helpers/map"
import mapboxgl from "mapbox-gl"
import moment from "@/plugins/moment"
import PopupMap from "@/components/PopupMap"
import Vue from "vue"
import i18n from "@/plugins/i18n"

export default {
	name: "EventMap",
	route: {
		name: "event_map",
		path: "event/map"
	},
	components: { Fullscreen, PopupMap },
	data: () => ({
		loadingMap: true,
		loadingEvents: true,
		mapHelper,
		map: null,
		popup: null
	}),
	computed: {
		isMaxZoom() {
			return this.map.getZoom() === 11
		}
	},
	mounted() {
		this.initMap()

		const { sport, distance, discipline, format, country, from, to } = this.$route.query
		if (sport !== this.$store.state.search.sport) this.$store.dispatch("search/sport", sport)
		if (distance !== this.$store.state.search.distance) this.$store.dispatch("search/distance", distance)
		if (discipline !== this.$store.state.search.discipline) this.$store.dispatch("search/discipline", discipline)
		if (format !== this.$store.state.search.format) this.$store.dispatch("search/format", format)
		if (country !== this.$store.state.search.country) this.$store.dispatch("search/country", country)
		if (from !== this.$store.state.search.from) this.$store.dispatch("search/from", from)
		if (to !== this.$store.state.search.to) this.$store.dispatch("search/to", to)

		if (JSON.stringify(this.$store.state.map.search) !== JSON.stringify(this.$store.state.search)) {
			this.$store.dispatch("search/events").then(() => {
				this.loadingEvents = false
			})
		} else {
			this.loadingEvents = false
		}
	},
	methods: {
		initMap() {
			this.map = this.mapHelper.create("map", this.$store.getters["map/center"], this.$store.state.map.zoom)

			this.map.on("load", () => {
				this.loadingMap = false

				this.map.addSource("pin", {
					type: "geojson",
					data: {
						type: "FeatureCollection",
						features: this.$store.state.map.events.map((value, key) => ({
							type: "Feature",
							properties: {
								name: value.name,
								races: value.races,
								permalink: value.permalink
							},
							geometry: {
								type: "Point",
								coordinates: value.coordinates
							}
						}))
					},
					cluster: true,
					clusterMaxZoom: 11,
					clusterRadius: 50
				})

				this.map.addLayer({
					id: "clusters",
					type: "circle",
					source: "pin",
					filter: ["has", "point_count"],
					paint: {
						"circle-color": "#424242",
						"circle-stroke-color": "#2b2b2b",
						"circle-stroke-width": 2,
						"circle-opacity": 0.8,
						"circle-radius": ["step", ["get", "point_count"], 20, 9, 30, 99, 40]
					}
				})

				this.map.addLayer({
					id: "cluster-count",
					type: "symbol",
					source: "pin",
					filter: ["has", "point_count"],
					layout: {
						"text-field": "{point_count_abbreviated}",
						"text-font": ["Bold"],
						"text-size": 18,
						"text-offset": [0, 0.1],
						"text-allow-overlap": true
					},
					paint: {
						"text-color": "#ECECEB"
					}
				})

				this.map.addLayer({
					id: "unclustered-point",
					type: "circle",
					source: "pin",
					filter: ["!", ["has", "point_count"]],
					paint: {
						"circle-color": "#007BFF",
						"circle-stroke-color": "#005FC5",
						"circle-stroke-width": 2,
						"circle-radius": 15
					}
				})
			})

			this.map.on("moveend", () => {
				this.$store.dispatch("map/move", {
					lng: this.map.getCenter().lng,
					lat: this.map.getCenter().lat,
					zoom: this.map.getZoom()
				})
			})

			this.map.on("zoom", () => {
				if (this.popup) {
					this.popup.remove()
				}
			})

			this.map.on("click", "unclustered-point", e => {
				this.map.getCanvas().style.cursor = "pointer"

				const coordinates = e.features[0].geometry.coordinates.slice()
				while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
				}

				this.popup = new mapboxgl.Popup({
					closeButton: false,
					closeOnClick: true,
					offset: 17,
					maxWidth: "90vw"
				})
					.setLngLat(e.features[0].geometry.coordinates.slice())
					.setHTML('<div id="PopupMap" />')
					.addTo(this.map)
				this.openPopup("#PopupMap", e.features[0].properties)
			})

			this.map.on("click", "clusters", e => {
				if (this.map.getZoom() === 11) {
					const clusterCount = e.features[0].properties.point_count
					const clusterId = e.features[0].properties.cluster_id
					const clusterSource = this.map.getSource("pin")
					const location = e.features[0].geometry.coordinates.slice()

					clusterSource.getClusterLeaves(clusterId, clusterCount, 0, (err, points) => {
						this.popup = new mapboxgl.Popup({
							closeButton: false,
							closeOnClick: true,
							offset: clusterCount < 10 ? 22 : clusterCount < 100 ? 32 : 42,
							maxWidth: "90vw"
						})
							.setLngLat(location)
							.setHTML('<div id="PopupMap" />')
							.addTo(this.map)

						this.openPopup(
							"#PopupMap",
							points.map(point => point.properties)
						)
					})
				} else {
					this.map.easeTo({
						center: e.features[0].geometry.coordinates,
						zoom: this.map.getZoom() + 1,
						speed: 2
					})
				}
			})

			this.map.on("mouseenter", "unclustered-point", () => {
				this.map.getCanvas().style.cursor = "pointer"
			})

			this.map.on("mouseleave", "unclustered-point", () => {
				this.map.getCanvas().style.cursor = ""
			})

			this.map.on("mouseenter", "clusters", () => {
				this.map.getCanvas().style.cursor = "pointer"
			})

			this.map.on("mouseleave", "clusters", () => {
				this.map.getCanvas().style.cursor = ""
			})
		},
		openPopup(selector, data) {
			let propsData = {}
			if (Array.isArray(data)) {
				propsData.events = data
			} else {
				data.races = JSON.parse(data.races)
				propsData.event = data
			}
			const PopupMapClass = Vue.extend({
				router: this.$router,
				i18n: this.$i18n,
				...PopupMap
			})
			const popupInstance = new PopupMapClass({ propsData })
			popupInstance.$mount(selector)
		}
	}
}
</script>

<style scoped>
#searchInfo {
	z-index: 1;
	font-size: 1rem !important;
}

#map .popup {
	width: 300px;
}
</style>

<style>
#map .mapboxgl-popup-content {
	padding: 0 !important;
}
</style>
