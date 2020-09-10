import moment from "@/plugins/moment.js"

export default {
	namespaced: true,
	state: {
		sport: "",
		distance: "",
		discipline: "",
		format: "",
		where: "FR",
		from: moment().format(),
		to: moment()
			.add(1, "M")
			.format()
	},
	getters: {},
	mutations: {
		sport(state, value) {
			state.sport = value
		},
		distance(state, value) {
			state.distance = value
		},
		discipline(state, value) {
			state.discipline = value
		},
		format(state, value) {
			state.format = value
		},
		where(state, value) {
			state.where = value
		},
		from(state, value) {
			state.from = value
		},
		to(state, value) {
			state.to = value
		}
	},
	actions: {}
}
