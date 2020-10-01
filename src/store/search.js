import moment from "@/plugins/moment"

export default {
	namespaced: true,
	state: {
		sport: "",
		distance: "",
		discipline: "",
		format: "",
		where: "fr",
		from: moment().format(),
		to: moment()
			.add(1, "M")
			.format()
	},
	getters: null,
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
		where({ commit }, value) {
			commit("SET", { key: "where", value })
		},
		from({ commit }, value) {
			commit("SET", { key: "from", value })
		},
		to({ commit }, value) {
			commit("SET", { key: "to", value })
		}
	}
}
