import Vue from "vue"
import VueRouter from "vue-router"
import routes from "@/router/routes"
import i18n, { localeRegex } from "@/locales"
import store from "@/store"

Vue.use(VueRouter)

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: `/:locale${localeRegex()}`,
			component: {
				template: "<router-view></router-view>"
			},
			children: routes
		},
		{
			path: "*",
			redirect: to => {
				return "/" + i18n.locale + to.fullPath
			}
		}
	]
})

router.beforeEach((to, from, next) => {
	store.dispatch("alert/clear")
	store.dispatch("nav/active", to.path)
	store.dispatch("user/locale", to.params.locale)

	next()
})

export default router
