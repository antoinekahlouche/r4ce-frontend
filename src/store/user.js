import Vue from "vue"
import i18n, { validLocale } from "@/plugins/i18n"

export default {
	namespaced: true,
	state: {
		locale: "fr",
		name: null
	},
	getters: {},
	mutations: {
		locale(state, locale) {
			state.locale = locale
		}
	},
	actions: {
		locale({ commit }, locale) {
			if (!validLocale(locale)) return
			i18n.locale = locale
			Vue.config.lang = locale
			document.querySelector("html").setAttribute("lang", locale)
			commit("locale", locale)
		}
	}
}
