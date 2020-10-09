import i18n from "@/plugins/i18n"
import moment from "@/plugins/moment"

export default {
	namespaced: true,
	state: {
		search: {},
		zoom: 5.5,
		lng: 1.73,
		lat: 46.89,
		events: []
	},
	getters: {
		center: state => ({ lng: state.lng, lat: state.lat }),
		coordinates: state => state.events.map(event => event.coordinates),
		message: state => {
			let str = i18n.t("text.im_searching")
			str += ` <b>${state.search.sport ? i18n.t("sport." + state.search.sport) : i18n.t("text.all")}</b>`
			if (state.search.discipline) str += ` - <b>${i18n.t("discipline." + state.search.discipline)}</b>`
			if (state.search.distance) str += ` - <b>${i18n.t("distance." + state.search.distance)}</b>`
			if (state.search.format) str += ` - <b>${i18n.t("format." + state.search.format)}</b>`
			if (state.search.country) str += ` ${i18n.t("text.in")} <b>${i18n.t("country." + state.search.country)}</b>`
			str += ` ${i18n.t("text.from")} <b>${moment.display(state.search.from)}</b>`
			str += ` ${i18n.t("text.to")} <b>${moment.display(state.search.to)}</b>`
			return str
		},
		event: state => permalink => state.events.filter(event => event.permalink === permalink)[0] || null
	},
	mutations: {
		SEARCH(state, search) {
			state.search = search
		},
		EVENTS(state, events) {
			state.events = events
		},
		MOVE(state, { lng, lat, zoom }) {
			state.lng = lng
			state.lat = lat
			state.zoom = zoom
		}
	},
	actions: {
		move({ commit }, value) {
			commit("MOVE", value)
		},
		search({ commit }, value) {
			commit("SEARCH", value)
		},
		events({ commit }, value) {
			commit("EVENTS", value)
		}
	}
}
