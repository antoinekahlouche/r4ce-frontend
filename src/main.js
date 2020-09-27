import Vue from "vue"
import App from "@/App"
import "@/registerServiceWorker"
import router from "@/plugins/router"
import store from "@/plugins/vuex"
import i18n from "@/plugins/i18n"
import axios from "@/plugins/axios"

Vue.config.productionTip = false

mount()
async function mount() {
	const response = await axios.get("/user")
	if (response.data && response.data.user) {
		store.dispatch("user/set", response.data.user)
	}

	new Vue({
		i18n,
		router,
		store,
		render: h => h(App)
	}).$mount("#app")

	const terms = await axios.get("/terms")
	store.dispatch("terms/set", terms.data.terms)
}
