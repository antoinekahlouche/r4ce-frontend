import Vue from "vue"
import App from "@/App"
import "@/registerServiceWorker"
import router from "@/plugins/router"
import store from "@/plugins/vuex"
import i18n from "@/plugins/i18n"

Vue.config.productionTip = false

mount()
async function mount() {
	await store.dispatch("user/get")

	new Vue({
		i18n,
		router,
		store,
		render: h => h(App)
	}).$mount("#app")

	await store.dispatch("terms/get")
}
