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
		SET(state, value) {
			for (const key in initialState) {
				state[key] = value[key]
			}
		}
	},
	actions: {
		async get({ commit }) {
			const response = await axios.get("/terms")
			commit("SET", response.data.terms)
		},
		async set({ commit }, type) {
			const response = await axios.post("/terms", {
				type,
				version: versions[type]
			})

			if (!response.data) return false

			commit("SET", response.data)

			return true
		}
	}
}
