import Vue from "vue"
import App from "@/App"
import "@/registerServiceWorker"
import router from "@/plugins/router.js"
import store from "@/plugins/vuex.js"
import i18n from "@/plugins/i18n.js"

Vue.config.productionTip = false

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount("#app")
