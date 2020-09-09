import Vue from "vue"
import axios from "axios"
import router from "@/router"
import store from "@/store"

Vue.prototype.$axios = axios

axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "https://r4ce.co/" : "http://localhost:8080/"
axios.defaults.withCredentials = true

axios.interceptors.response.use(
	function(response) {
		switch (response.data.status) {
			case 200:
				// OK
				break
			case 300:
				// Redirection
				store.commit("alert/open", ["info", "error." + response.data.payload.message])
				router.push(response.data.payload.to)
				break
			case 400:
				// Bad Request
				var tmp = []
				for (var i in response.data.payload) {
					if (response.data.payload[i].field === "global") {
						store.commit("alert/open", ["warning", "error." + response.data.payload[i].message])
					} else {
						tmp.push(response.data.payload[i])
					}
				}
				response.data.payload = tmp
				break
			case 401:
				// Unauthorized
				store.commit("user/name", null)
				store.commit("alert/open", ["info", "error.authRequired"])
				router.push("/signin")
				break
			case 404:
				// Not Found
				router.push("/404")
				break
			case 500:
			default:
				// Internal Server Error
				if (require("@/lang/en.json").error[response.data.payload]) {
					store.commit("alert/open", ["error", "error." + response.data.payload])
				}
				router.push("/500")
				break
		}
		return response.data
	},

	function(error) {
		if (error.code === "ECONNABORTED") {
			store.commit("alert/open", ["error", "error.timeout"])
		}

		router.push("/500")
		return error
	}
)
