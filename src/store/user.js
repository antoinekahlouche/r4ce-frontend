import { setLocale } from "@/plugins/i18n"
import axios from "@/plugins/axios"
import { random } from "@/helpers/avataaars"
import i18n from "@/plugins/i18n"

const initialState = {
	signedIn: false,

	comments: [],

	avatar: null,
	email: null,
	firstName: null,
	lastName: null,
	locale: null,
	roles: null,
	verified: false
}

export default {
	namespaced: true,
	state: { ...initialState },
	getters: {
		isAdmin: state => {
			if (!state.roles) return false
			if (state.roles.length === 0) return false
			for (const role of state.roles) {
				if (role.type === "GLOBAL" && role.level === "ADMIN") return true
			}
			return false
		}
	},
	mutations: {
		COMMENTS(state, value) {
			state.comments = value
		},
		AVATAR(state, value) {
			state.avatar = value.avatar
		},
		USER(state, value) {
			state.avatar = value.avatar
			state.comments = value.comments
			state.email = value.email
			state.firstName = value.firstName
			state.lastName = value.lastName
			state.locale = value.locale
			state.roles = value.roles
			state.verified = value.verified
		},
		RESET(state) {
			for (const key in initialState) {
				state[key] = initialState[key]
			}
		},
		SIGNEDIN(state) {
			state.signedIn = true
		},
		VERIFIED(state) {
			state.verified = true
		}
	},
	actions: {
		store({ commit }, user) {
			if (user) {
				commit("SIGNEDIN", user)
				commit("USER", user)
				setLocale(user.locale)
			}
		},
		async get({ dispatch }) {
			const response = await axios.get("/user")
			if (!response) return false

			dispatch("store", response.data.user)
			return true
		},
		async deleteComment({ commit, state }, commentId) {
			const response = await axios.delete("/comment", { params: { commentId } })
			if (!response) return false

			commit(
				"COMMENTS",
				state.comments.filter(comment => comment._id !== commentId)
			)
			return true
		},
		async getComments({ commit }) {
			const response = await axios.get("/commentsuser")
			if (!response) return false

			commit("COMMENTS", response.data.comments)
			return true
		},
		async signup({ dispatch, rootGetters }, { email, firstName, lastName, password }) {
			const response = await axios.post("/signup", {
				avatar: random(),
				email,
				firstName,
				gdprVersion: rootGetters["terms/versions"].GDPR,
				locale: i18n.locale.toUpperCase(),
				lastName,
				password,
				usageVersion: rootGetters["terms/versions"].USAGE
			})
			if (!response) return false

			dispatch("store", response.data.user)
			dispatch("terms/get", null, { root: true })
			return true
		},
		async signin({ dispatch }, { email, password }) {
			const response = await axios.post("/signin", { email, password })
			if (!response) return false

			dispatch("store", response.data.user)
			dispatch("terms/get", null, { root: true })
			return true
		},
		async signout({ commit }) {
			await axios.post("/signout")
			commit("RESET")
		},
		async updateAvatar({ commit, dispatch }, avatar) {
			const response = await axios.post("/avatar", avatar)
			if (!response) return false

			commit("AVATAR", avatar)
			dispatch("alert/open", { type: "success", message: "avatar_updated" }, { root: true })
			return true
		},
		async updateUser({ dispatch }, { firstName, lastName, locale, email }) {
			const response = await axios.post("/user", { firstName, lastName, locale, email })
			if (!response) return false

			dispatch("store", response.data.user)
			dispatch("alert/open", { type: "success", message: "profile_updated" }, { root: true })
			return true
		},
		async getPassword({ dispatch }, { email }) {
			const response = await axios.get("/password", { params: { email } })
			if (!response) return false

			dispatch("alert/open", { type: "success", message: "email_password_sent", displayPage: "signin" }, { root: true })
			return true
		},
		async setPassword({ dispatch }, { email, token, password }) {
			const response = await axios.post("/password", { email, token, password })
			if (!response) return false

			dispatch("alert/open", { type: "success", message: "password_updated", displayPage: "signin" }, { root: true })
			return true
		},
		async getVerify({ dispatch }) {
			const response = await axios.get("/verify")
			if (!response) return false

			dispatch("alert/open", { type: "success", message: "email_verification_sent" }, { root: true })
			return true
		},
		async setVerify({ commit, dispatch }, { token }) {
			const response = await axios.post("/verify", { token })
			if (!response) return false

			commit("VERIFIED")
			dispatch("alert/open", { type: "success", message: "email_verified" }, { root: true })
			return true
		}
	}
}
