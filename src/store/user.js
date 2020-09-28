import { setLocale } from "@/plugins/i18n"
import axios from "@/plugins/axios"
import { random } from "@/helpers/avataaars"
import i18n from "@/plugins/i18n"

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
		async get({ commit }) {
			const response = await axios.get("/user")

			if (!response.data) return false

			if (response.data.user) {
				commit("SET", response.data.user)
				setLocale(response.data.user.locale)
			}

			return true
		},
		async signup({ commit, rootGetters }, { email, firstName, lastName, password }) {
			const response = await axios.post("/signup", {
				avatar: random(),
				email,
				firstName,
				gdprVersion: rootGetters["terms/versions"].GDPR,
				locale: i18n.locale,
				lastName,
				password,
				usageVersion: rootGetters["terms/versions"].USAGE
			})

			if (!response.data) return false
			if (response.data.alert) return false

			if (response.data.user) {
				commit("SET", response.data.user)
			}
			if (response.data.terms) {
				commit("terms/SET", response.data.terms, { root: true })
			}

			return true
		},
		async signin({ commit }, { email, password }) {
			const response = await axios.post("/signin", { email, password })

			if (!response.data) return false
			if (response.data.alert) return false

			if (response.data.user) {
				commit("SET", response.data.user)
			}
			if (response.data.terms) {
				commit("terms/SET", response.data.terms, { root: true })
			}

			return true
		},
		async signout({ commit }) {
			await axios.post("/signout")
			commit("RESET")
		},
		async updateAvatar({ commit }, avatar) {
			const response = await axios.post("/avatar", { avatar })

			if (!response.data) return false

			if (response.data.user) {
				commit("user/SET", response.data.user)
				commit("alert/OPEN", { type: "success", message: "avatar_updated" }, { root: true })
			}

			return true
		},
		async updateUser({ commit }, { firstName, lastName, locale, email }) {
			const response = await axios.post("/user", { firstName, lastName, locale, email })

			if (!response.data) return false

			if (response.data.user) {
				commit("SET", response.data.user)
				commit("alert/OPEN", { type: "success", message: "profile_updated" }, { root: true })
			}

			return true
		}
	}
}
