export default {
	namespaced: true,
	state: {
		type: null,
		message: null,
		displayPage: null
	},
	getters: {},
	mutations: {
		OPEN(state, value) {
			state.type = value.type
			state.message = value.message
			state.displayPage = value.displayPage
		},
		CLOSE(state) {
			state.type = null
			state.message = null
			state.displayPage = null
		}
	},
	actions: {
		open({ commit }, value) {
			commit("OPEN", value)
		},
		close({ commit, state }, pageFrom) {
			if (!pageFrom || !state.displayPage) {
				commit("CLOSE")
			} else if (state.displayPage && state.displayPage === pageFrom) {
				commit("CLOSE")
			}
		}
	}
}
