import { setLocale } from "@/plugins/i18n"

const initialState = {
	signedIn: false,
	avatar: null,
	email: null,
	firstName: null,
	lastName: null,
	locale: null,
	role: null,
	verified: false
}

export default {
	namespaced: true,
	state: { ...initialState },
	getters: null,
	mutations: {
		SET(state, value) {
			for (const key in initialState) {
				state[key] = value[key]
			}
			state.signedIn = true
		},
		RESET(state) {
			for (const key in initialState) {
				state[key] = initialState[key]
			}
		}
	},
	actions: {
		set({ commit }, value) {
			commit("SET", value)
			setLocale(value.locale)
		},
		reset({ commit }) {
			commit("RESET")
		}
	}
}
