export default {
	namespaced: true,
	state: {
		list: []
	},
	getters: {},
	mutations: {
		open(state, data) {
			state.list.push(data)
		},
		close(state, index) {
			state.list.splice(index, 1)
		},
		clear(state) {
			state.list = []
		}
	},
	actions: {
		open({ commit }, data) {
			commit("open", data)
		},
		close({ commit }, index) {
			commit("close", index)
		},
		clear({ commit }) {
			commit("clear")
		}
	}
}
