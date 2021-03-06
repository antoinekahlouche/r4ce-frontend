import Vue from "vue"
import VueI18n from "vue-i18n"

const messages = {
	fr: require("@/locales/fr")
}

const userLocale = getLocale()
const locale = validLocale(userLocale) ? userLocale : "fr"

Vue.use(VueI18n)
Vue.config.lang = locale

const i18n = new VueI18n({
	locale: locale,
	fallbackLocale: "fr",
	messages
})
export default i18n

function getLocale() {
	if (localStorage.vuex && JSON.parse(localStorage.vuex).profile) {
		return JSON.parse(localStorage.vuex).user.locale.toLowerCase()
	}
	return (navigator.language || navigator.userLanguage || "").split("-")[0]
}

export function localeRegex() {
	return `(${Object.keys(messages).join("|")})`
}

export function validLocale(locale) {
	return Object.keys(messages).includes(locale)
}

export function setLocale(value) {
	if (!validLocale(value)) return
	i18n.locale = value
	Vue.config.lang = value
	document.querySelector("html").setAttribute("lang", value)
}
