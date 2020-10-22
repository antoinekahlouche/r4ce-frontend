import Vue from "vue"
import App from "@/App"
import "@/registerServiceWorker"
import router from "@/plugins/router"
import "@/plugins/fontAwesome"
import store from "@/plugins/vuex"
import i18n from "@/plugins/i18n"

Vue.config.productionTip = false

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount("#app")

store.dispatch("user/get")
store.dispatch("terms/get")
