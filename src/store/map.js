export default {
	namespaced: true,
	state: {
		zoom: 5.5,
		lng: 1.73,
		lat: 46.89,
		events: []
	},
	getters: {
		center: state => ({ lng: state.lng, lat: state.lat }),
		coordinates: state => state.events.map(event => event.coordinates)
	},
	mutations: {
		MOVE(state, { lng, lat, zoom }) {
			state.lng = lng
			state.lat = lat
			state.zoom = zoom
		}
	},
	actions: {
		move({ commit }, value) {
			commit("MOVE", value)
		}
	}
}
