import Vue from "vue"
import i18n, { validLocale } from "@/locales"

export default {
	namespaced: true,
	state: {
		locale: "fr"
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
			commit("locale", locale)
		}
	}
}
