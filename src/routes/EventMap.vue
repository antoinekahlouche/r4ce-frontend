<template>
	<Fullscreen>
		<div id="map" class="flex-fill">
			<router-link id="searchInfo" class="alert alert-primary fade show m-3 position-absolute" role="alert" to="/event/search">
				<span v-html="displayMessage" />
			</router-link>
		</div>
		<div id="spinner" class="position-absolute" :class="{ 'd-none': !loading }">
			<div class="spinner-border" role="status">
				<span class="sr-only">{{ $t("text.loading") }}...</span>
			</div>
		</div>
	</Fullscreen>
</template>

<script>
import Fullscreen from "@/layouts/Fullscreen"
import moment from "@/plugins/moment"
import mapHelper from "@/helpers/map"

export default {
	name: "EventMap",
	route: {
		name: "event_map",
		path: "event/map"
	},
	components: { Fullscreen },
	data: () => ({
		loading: true,
		mapHelper,
		map: null
	}),
	computed: {
		displayMessage: function() {
			let str = this.$t("text.im_searching")
			str += ` <b>${this.$store.state.search.sport ? this.$store.state.search.sport : this.$t("text.all")}</b>`
			str += ` - <b>${this.$store.state.search.discipline ? this.$store.state.search.discipline : this.$t("text.all")}</b>`
			str += ` - <b>${this.$store.state.search.distance ? this.$store.state.search.distance : this.$t("text.all")}</b>`
			str += ` - <b>${this.$store.state.search.format ? this.$store.state.search.format : this.$t("text.all")}</b>`
			str += ` ${this.$t("text.in")} <b>${this.$t("country." + this.$store.state.search.where)}</b>`
			str += ` ${this.$t("text.from")} <b>${moment.display(this.$store.state.search.from)}</b>`
			str += ` ${this.$t("text.to")} <b>${moment.display(this.$store.state.search.to)}</b>`
			return str
		}
	},
	mounted: function() {
		this.map = this.mapHelper.create("map", this.$store.getters["map/center"], this.$store.state.map.zoom)

		this.map.on("load", () => {
			this.loading = false

			this.map.addSource("pin", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: [
						{
							type: "Feature",
							geometry: {
								type: "Point",
								coordinates: this.$store.getters["map/coordinates"]
							}
						}
					]
				}
			})

			this.map.addLayer({
				id: "unclustered-point",
				type: "circle",
				source: "pin",
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
	}
}
</script>

<style scoped>
#spinner {
	top: 50%;
	left: 50%;
	margin-left: -1rem;
	margin-top: -1rem;
	width: 2rem;
	color: var(--main-color);
}

#searchInfo {
	z-index: 1;
	font-size: 1rem !important;
}

#map .popup {
	width: 300px;
}
</style>
