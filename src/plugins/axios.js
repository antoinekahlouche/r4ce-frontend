import axios from "axios"
import router from "@/plugins/router.js"
import store from "@/plugins/vuex.js"

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL
// axios.defaults.withCredentials = true

axios.defaults.validateStatus = null

axios.interceptors.response.use(
	function(response) {
		if (response.status >= 400) {
			if (response.status === 401) router.push("/error?code=401")
			else if (response.status === 404) router.push("/error?code=404")
			else router.push("/error?code=500")
		}

		return response
	},

	function(error) {
		router.push("/error?code=500")
		return error
	}
)

export default axios
