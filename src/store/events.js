import moment from "@/plugins/moment.js"

export default {
	namespaced: true,
	state: {
		search: {
			sport: "",
			distance: "",
			discipline: "",
			format: "",
			where: "FR",
			from: moment().format(),
			to: moment()
				.add(1, "M")
				.format()
		}
	},
	getters: {},
	mutations: {
		SPORT(state, value) {
			state.search.sport = value
		},
		DISTANCE(state, value) {
			state.search.distance = value
		},
		DISCIPLINE(state, value) {
			state.search.discipline = value
		},
		FORMAT(state, value) {
			state.search.format = value
		},
		WHERE(state, value) {
			state.search.where = value
		},
		FROM(state, value) {
			state.search.from = value
		},
		TO(state, value) {
			state.search.to = value
		}
	},
	actions: {
		sport({ commit }, value) {
			commit("SPORT", value)
		},
		distance({ commit }, value) {
			commit("DISTANCE", value)
		},
		discipline({ commit }, value) {
			commit("DISCIPLINE", value)
		},
		format({ commit }, value) {
			commit("FORMAT", value)
		},
		where({ commit }, value) {
			commit("WHERE", value)
		},
		from({ commit }, value) {
			commit("FROM", value)
		},
		to({ commit }, value) {
			commit("TO", value)
		}
	}
}
