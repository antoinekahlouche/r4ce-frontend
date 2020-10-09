import Vue from "vue"
import VueRouter from "vue-router"
import i18n, { localeRegex } from "@/plugins/i18n"
import store from "@/plugins/vuex"

Vue.use(VueRouter)

// Dynamic route from routes folder
const routes = require.context("@/routes", false, /^.*\.vue$/)
const children = routes.keys().map(path => ({
	...routes(path).default.route,
	component: load(path.substring(2))
}))

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: `/:locale${localeRegex()}`,
			component: {
				template: "<router-view />",
				name: "Router"
			},
			children: [
				...children,
				{
					path: "*",
					props: { code: 404 },
					component: load("Error")
				}
			]
		},
		{
			path: "*",
			redirect: to => {
				return "/" + i18n.locale + to.path
			}
		}
	]
})

router.beforeEach((to, from, next) => {
	if (to.meta.isSignedIn && !store.state.user.signedIn) {
		store.dispatch("alert/open", { type: "warning", message: "restriction_authenticated", displayPage: "signin" })
		next("/signin?redirect=" + to.path)
	} else if (to.meta.isSignedIn === false && store.state.user.signedIn) {
		next("/profile")
	} else if (to.meta.isVerified && !store.state.user.verified) {
		store.dispatch("alert/open", { type: "warning", message: "restriction_unverified", displayPage: "profile" })
		next(false)
	} else if (to.meta.isEventAdmin) {
		next("/error?code=401")
	} else if (to.meta.isAdmin && !store.getters["user/isAdmin"]) {
		next("/error?code=401")
	} else {
		next()
	}
})

function load(component) {
	return () => import(/* webpackChunkName: "[request]" */ `@/routes/${component}`)
}

export default router
