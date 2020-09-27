import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// Dynamic modules from store folder
const stores = require.context("@/store", false, /^.*\.js$/)
const modules = stores.keys().reduce((result, path) => {
	const name = path.substring(2, path.length - 3)
	result[name] = stores(path).default
	return result
}, {})

export default new Vuex.Store({ modules })

// mutations : sync commit
// actions : async dispatch
