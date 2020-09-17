export default {
	namespaced: true,
	state: {
		list: []
	},
	getters: {},
	mutations: {
		OPEN(state, value) {
			state.list.push(value)
		},
		CLOSE(state, index) {
			state.list.splice(index, 1)
		},
		CLEAR(state) {
			state.list = []
		}
	},
	actions: {
		open({ commit }, value) {
			commit("OPEN", value)
		},
		close({ commit }, index) {
			commit("CLOSE", index)
		},
		clear({ commit }) {
			commit("CLEAR")
		}
	}
}
