import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
import alert from "@/store/alert"
import map from "@/store/map"
import nav from "@/store/nav"
import search from "@/store/search"
import user from "@/store/user"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		alert,
		map,
		nav,
		search,
		user
	},
	plugins: [
		createPersistedState({
			paths: ["user"]
		})
	]
})

// mutations : sync commit
// actions : async dispatch
