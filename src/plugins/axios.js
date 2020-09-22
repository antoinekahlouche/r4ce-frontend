import axios from "axios"
import router from "@/plugins/router.js"
import store from "@/plugins/vuex.js"

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL
axios.defaults.withCredentials = true
axios.defaults.validateStatus = null

axios.interceptors.response.use(
	function(response) {
		console.log(response)
		if (response.status !== 200) {
			if (response.status === 401) router.push("/error?code=401")
			else if (response.status === 404) router.push("/error?code=404")
			else router.push("/error?code=500")
		} else if (response.data.alert) {
			store.dispatch("alert/open", response.data.alert)
		}

		return response
	},

	function(error) {
		console.log(error)
		router.push("/error?code=500")
		return error
	}
)

export default axios
