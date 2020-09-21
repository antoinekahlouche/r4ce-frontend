import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
import alert from "@/store/alert"
import events from "@/store/events"
import profile from "@/store/profile"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: { alert, events, profile },
	plugins: [
		createPersistedState({
			paths: ["profile"]
		})
	]
})

// mutations : sync commit
// actions : async dispatch
