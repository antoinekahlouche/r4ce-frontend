import axios from "@/plugins/axios"

const initialState = {
	GDPR: null,
	USAGE: null
}

const versions = {
	GDPR: 1,
	USAGE: 1
}

export default {
	namespaced: true,
	state: { ...initialState },
	getters: {
		showGDPRToast: state => {
			if (!state.GDPR) return true
			else return state.GDPR.version !== versions.GDPR
		},
		versions: () => versions
	},
	mutations: {
		TERMS(state, value) {
			for (const key in initialState) {
				state[key] = value[key]
			}
		}
	},
	actions: {
		store({ commit }, terms) {
			if (terms) {
				commit("TERMS", terms)
			}
		},
		async get({ dispatch }) {
			const response = await axios.get("/terms")

			if (!response.data) return false
			dispatch("store", response.data.terms)

			return true
		},
		async set({ dispatch }, type) {
			const response = await axios.post("/terms", {
				type,
				version: versions[type]
			})

			if (!response.data) return false
			dispatch("store", response.data)

			return true
		}
	}
}
