import Vue from "vue"
import VueRouter from "vue-router"
import i18n, { localeRegex } from "@/plugins/i18n"
import store from "@/plugins/vuex.js"

Vue.use(VueRouter)

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
				{
					path: "about",
					component: load("About")
				},
				{
					path: "admin",
					meta: { isSignedIn: true, isVerified: true, isAdmin: true },
					component: load("Admin")
				},
				{
					path: "error",
					props: route => ({ code: parseInt(route.query.code) }),
					component: load("Error")
				},
				{
					path: "event/add",
					meta: { isSignedIn: true, isVerified: true },
					component: load("EventAdd")
				},
				{
					path: "event/admin/:permalink",
					meta: { isSignedIn: true, isVerified: true, isEventAdminStrict: true },
					component: load("EventAdmin")
				},
				{
					path: "event/claim/:permalink",
					meta: { isSignedIn: true, isVerified: true },
					component: load("EventClaim")
				},
				{
					path: "event/details/:permalink",
					component: load("EventDetails")
				},
				{
					path: "event",
					component: load("Eventlanding")
				},
				{
					path: "event/map",
					component: load("EventMap")
				},
				{
					path: "event/review",
					meta: { isSignedIn: true, isVerified: true, isAdmin: true },
					component: load("EventReview")
				},
				{
					path: "",
					alias: "event/search",
					component: load("EventSearch")
				},
				{
					path: "event/update",
					meta: { isSignedIn: true, isVerified: true },
					component: load("EventUpdate")
				},
				{
					path: "password",
					component: load("Password")
				},
				{
					path: "profile",
					meta: { isSignedIn: true },
					component: load("Profile")
				},
				{
					path: "signin",
					meta: { isSignedIn: false },
					component: load("Signin")
				},
				{
					path: "signup",
					meta: { isSignedIn: false },
					component: load("Signup")
				},
				{
					path: "sitemap",
					component: load("Sitemap")
				},
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
	if (!from.query.redirect || !to.query.redirect) {
		// Do not clear alerts when redirect
		store.dispatch("alerts/clear")
	}
	store.dispatch("profile/locale", to.params.locale)

	if (to.meta.isSignedIn && !store.state.profile.user) {
		store.dispatch("alerts/open", { type: "warning", alert: "restriction_authenticated" })
		next("/signin?redirect=" + to.path)
	} else if (to.meta.isSignedIn !== undefined && !to.meta.isSignedIn && store.state.profile.user) {
		next("/profile")
	} else if (to.meta.isVerified && !store.state.profile.user.isVerified) {
		store.dispatch("alerts/open", { type: "warning", alert: "restriction_unverified" })
		next("/profile")
	} else if (to.meta.isEventAdmin) {
		next("/error?code=401")
	} else if (to.meta.isAdmin && ![store.state.profile.user.roles].includes("GLOBAL_ADMIN")) {
		next("/error?code=401")
	} else {
		next()
	}
})

function load(component) {
	return () => import(/* webpackChunkName: "[request]" */ `@/routes/${component}.vue`)
}

export default router
