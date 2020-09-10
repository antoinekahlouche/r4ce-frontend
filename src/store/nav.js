export default {
	namespaced: true,
	state: {
		active: null
	},
	getters: {},
	mutations: {
		active(state, value) {
			state.active = value
		}
	},
	actions: {
		active({ commit }, path) {
			const splittedPath = path.split("/")

			if (!splittedPath) {
				commit("active", null)
				return
			}

			if (!splittedPath[2]) {
				commit("active", "event")
				return
			}

			if (["signin", "signup"].includes(splittedPath[2])) {
				commit("active", "profile")
				return
			}

			commit("active", splittedPath[2])
		}
	}
}
