import Vue from "vue"
import VueRouter from "vue-router"
import i18n, { localeRegex } from "@/plugins/i18n"
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
			children: [
				{ path: "about", component: load("About") },
				{ path: "admin", component: load("Admin") },
				{ path: "event/add", component: load("EventAdd") },
				{ path: "event/admin/:permalink", component: load("EventAdmin") },
				{ path: "event/claim/:permalink", component: load("EventClaim") },
				{ path: "event/details/:permalink", component: load("EventDetails") },
				{ path: "event", component: load("Eventlanding") },
				{ path: "event/map", component: load("EventMap") },
				{ path: "event/review", component: load("EventReview") },
				{ path: "", alias: "event/search", component: load("EventSearch") },
				{ path: "event/update", component: load("EventUpdate") },
				{ path: "password", component: load("Password") },
				{ path: "profile", component: load("Profile") },
				{ path: "signin", component: load("Signin") },
				{ path: "signup", component: load("Signup") },
				{ path: "sitemap", component: load("Sitemap") },
				{ path: "*", component: load("Error"), props: { code: 404 } }
			]
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

function load(component) {
	return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`)
}

export default router
