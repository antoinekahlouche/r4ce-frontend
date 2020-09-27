import axios from "axios"
import router from "@/plugins/router"
import store from "@/plugins/vuex"

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL
axios.defaults.withCredentials = true
axios.defaults.validateStatus = null

// axios.interceptors.request.use(config => {
// 	if (process.env.NODE_ENV !== "production") console.log("[REQUEST]", config)
// 	return config
// })

axios.interceptors.response.use(
	function(response) {
		if (process.env.NODE_ENV !== "production") console.log(response.config.url, "\n", response)

		if (response.status !== 200) {
			if (response.status === 401) {
				store.dispatch("user/reset")
				store.dispatch("alert/open", { type: "warning", message: "restriction_authenticated", displayPage: "signin" })
				router.push("/signin")
			} else if (response.status === 403) router.push("/error?code=403")
			else if (response.status === 404) router.push("/error?code=404")
			else router.push("/error?code=500")
		} else if (response.data.alert) {
			store.dispatch("alert/open", response.data.alert)
		}

		return response
	},

	function(error) {
		if (process.env.NODE_ENV !== "production") console.log("[ERROR]", error)

		router.push("/error?code=500")

		return error
	}
)

export default axios
