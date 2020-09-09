export default {
	namespaced: true,
	state: {
		active: null
	},
	getters: {},
	mutations: {
		active(state, active) {
			state.active = active
		}
	},
	actions: {
		active({ commit }, path) {
			const splittedPath = path.split("/")

			if (!splittedPath || !splittedPath[2]) {
				commit("active", null)
				return
			}

			if (["signin", "signup"].includes(splittedPath[2])) {
				commit("active", "profile")
			} else {
				commit("active", splittedPath[2])
			}
		}
	}
}
