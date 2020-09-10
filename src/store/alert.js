export default {
	namespaced: true,
	state: {
		list: []
	},
	getters: {},
	mutations: {
		open(state, value) {
			state.list.push(value)
		},
		close(state, index) {
			state.list.splice(index, 1)
		},
		clear(state) {
			state.list = []
		}
	},
	actions: {}
}
