import Vue from "vue"
import i18n, { validLocale } from "@/plugins/i18n"

export default {
	namespaced: true,
	state: {
		locale: "fr",
		user: null
	},
	getters: {},
	mutations: {
		LOCALE(state, value) {
			state.locale = value
		},
		USER(state, value) {
			state.user = value
		}
	},
	actions: {
		locale({ commit }, value) {
			if (!validLocale(value)) return
			i18n.locale = value
			Vue.config.lang = value
			document.querySelector("html").setAttribute("lang", value)
			commit("LOCALE", value)
		},
		user({ commit }, value) {
			commit("USER", value)
		}
	}
}
