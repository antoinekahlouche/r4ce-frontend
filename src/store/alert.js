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
		close({ commit, state }, pages) {
			if (!pages.from || !state.displayPage) {
				commit("CLOSE")
			} else if (state.displayPage && state.displayPage === pages.from && pages.from !== pages.to) {
				commit("CLOSE")
			}
		}
	}
}
