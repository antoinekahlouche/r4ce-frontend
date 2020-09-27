import version from "@/helpers/version"

export default {
	namespaced: true,
	state: {
		GDPR: null,
		USAGE: null
	},
	getters: {
		showGDPRToast: state => {
			if (!state.GDPR) return true
			else return state.GDPR.version !== version.GDPR
		}
	},
	mutations: {
		SET(state, { key, value }) {
			state[key] = value
		}
	},
	actions: {
		set({ commit }, value) {
			for (const i in value) {
				commit("SET", { key: i, value: value[i] })
			}
		}
	}
}
