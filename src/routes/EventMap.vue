<template>
	<Fullscreen>
		<div id="eventMap_map" class="flex-fill">
			<div id="searchInfo" class="alert alert-primary fade show m-3 position-absolute pointer" role="alert" onclick="window.location = '/event/search'">
				<!-- <span>{{$t( "text.im_searching")}} <b>{{$t( sport}}</b> - <b>{{$t( discipline}}</b> - <b>{{$t( distance}}</b> - <b>{{$t( format}}</b> {{$t( "text.in"}} France {{$t( "text.from"}} <b>{{from}}</b> {{$t( "text.to"}} <b>{{to}}</b></span> -->
			</div>
		</div>
		<div id="map_spinner" class="position-absolute" :class="{ 'd-none': !loading }">
			<div class="spinner-border" role="status">
				<span class="sr-only">{{ $t("text.loading") }}...</span>
			</div>
		</div>
	</Fullscreen>
</template>

<script>
import Fullscreen from "@/layouts/Fullscreen"

export default {
	name: "EventMap",
	route: {
		name: "event_map",
		path: "event/map"
	},
	components: { Fullscreen },
	data: () => ({
		loading: true
	}),
	mounted: function() {
		const map = new mapboxgl.Map({
			container: "eventMap_map",
			style: "https://s3.eu-west-3.amazonaws.com/r4ce.map/style/style.json",
			center: { lng: 1.73, lat: 46.89 },
			zoom: 5.5,
			minZoom: 2,
			maxZoom: 11,
			boxZoom: false,
			dragRotate: false,
			touchZoomRotate: "disableRotation"
		})
		let popup = null

		map.addControl(
			new mapboxgl.AttributionControl({
				customAttribution: ["<a href='http://openmaptiles.org/' target='_blank'>© OpenMapTiles</a>", "<a href='http://www.openstreetmap.org/copyright' target='_blank'>© OpenStreetMap</a> contributors"],
				compact: true
			}),
			"bottom-left"
		)

		map.addControl(
			new mapboxgl.NavigationControl({
				showCompass: false
			}),
			"bottom-right"
		)

		map.addControl(
			new mapboxgl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				trackUserLocation: true
			}),
			"bottom-right"
		)

		map.on("load", () => {
			this.loading = false
		})
	}
}
</script>

<style scoped>
#map_spinner {
	top: 50%;
	left: 50%;
	margin-left: -1rem;
	margin-top: -1rem;
	width: 2rem;
	color: var(--main-color);
}
</style>
