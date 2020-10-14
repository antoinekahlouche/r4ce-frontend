import axios from "@/plugins/axios"

export default {
	namespaced: true,
	state: {
		accepted: []
	},
	getters: {
		showGDPRToast: state => {
			if (state.accepted.includes("GDPR")) return false
			return true
		}
	},
	mutations: {
		SET(state, value) {
			state.accepted = value
		},
		PUSH(state, value) {
			state.accepted.push(value)
		}
	},
	actions: {
		async get({ commit }) {
			const response = await axios.get("/terms")
			if (!response) return false

			commit("SET", response.data.terms)
			return true
		},
		async set({ commit }, type) {
			const response = await axios.post("/terms", { type })
			if (!response) return false

			commit("PUSH", type)
			return true
		}
	}
}
