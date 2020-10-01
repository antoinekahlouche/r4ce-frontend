import mapboxgl from "mapbox-gl"
require("@/../node_modules/mapbox-gl/dist/mapbox-gl.css")

mapboxgl.create = (idContainer, center = JSON.parse(process.env.VUE_APP_MAP_CENTER), zoom = process.env.VUE_APP_MAP_ZOOM, interactive = true) => {
	const map = new mapboxgl.Map({
		container: idContainer,
		style: process.env.VUE_APP_TILES_STYLE,
		center,
		zoom,
		minZoom: 2,
		maxZoom: 11,
		boxZoom: false,
		dragRotate: false,
		touchZoomRotate: "disableRotation",
		interactive
	})

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

	return map
}

export default mapboxgl
