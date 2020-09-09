import Vue from "vue"
import VueI18n from "vue-i18n"

const messages = {
	fr: require("@/locales/fr.json")
}

const userLocale = (localStorage.vuex && JSON.parse(localStorage.vuex).user.locale) || (navigator.language || navigator.userLanguage || "").split("-")[0]
const locale = validLocale(userLocale) ? userLocale : "fr"

Vue.use(VueI18n)
Vue.config.lang = locale

export default new VueI18n({
	locale: locale,
	fallbackLocale: "fr",
	messages
})

export function localeRegex() {
	return `(${Object.keys(messages).join("|")})`
}

export function validLocale(locale) {
	return Object.keys(messages).includes(locale)
}
