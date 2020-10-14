import axios from "@/plugins/axios"
import moment from "@/plugins/moment"

export default {
	namespaced: true,
	state: {
		sport: "",
		distance: "",
		discipline: "",
		format: "",
		country: "FR",
		from: moment().format(),
		to: moment()
			.add(1, "M")
			.format()
	},
	getters: {
		query: state => `sport=${state.sport}&distance=${state.distance}&discipline=${state.discipline}&format=${state.format}&country=${state.country}&from=${state.from}&to=${state.to}&`
	},
	mutations: {
		SET(state, { key, value }) {
			state[key] = value
		}
	},
	actions: {
		sport({ commit }, value) {
			commit("SET", { key: "sport", value })
		},
		distance({ commit }, value) {
			commit("SET", { key: "distance", value })
		},
		discipline({ commit }, value) {
			commit("SET", { key: "discipline", value })
		},
		format({ commit }, value) {
			commit("SET", { key: "format", value })
		},
		country({ commit }, value) {
			commit("SET", { key: "country", value })
		},
		from({ commit }, value) {
			commit("SET", { key: "from", value })
		},
		to({ commit }, value) {
			commit("SET", { key: "to", value })
		},
		async events({ dispatch, state }) {
			const response = await axios.get("/events", { params: state })
			if (!response) return false

			dispatch("map/search", { ...state }, { root: true })
			dispatch("map/events", response.data.events, { root: true })
			return true
		}
	}
}
