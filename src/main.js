import Vue from "vue"
import App from "@/App.vue"
import "@/registerServiceWorker"
import router from "@/plugins/router.js"
import store from "@/store"
import i18n from "@/plugins/i18n.js"

Vue.config.productionTip = false

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount("#app")
