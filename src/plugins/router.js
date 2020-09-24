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
					name: "about",
					path: "about",
					component: load("About")
				},
				{
					name: "admin",
					path: "admin",
					meta: { isSignedIn: true, isVerified: true, isAdmin: true },
					component: load("Admin")
				},
				{
					name: "error",
					path: "error/:code",
					props: route => ({ code: parseInt(route.query.code) }),
					component: load("Error")
				},
				{
					name: "event_add",
					path: "event/add",
					meta: { isSignedIn: true, isVerified: true },
					component: load("EventAdd")
				},
				{
					name: "event_admin",
					path: "event/admin/:permalink",
					meta: { isSignedIn: true, isVerified: true, isEventAdminStrict: true },
					component: load("EventAdmin")
				},
				{
					name: "event_claim",
					path: "event/claim/:permalink",
					meta: { isSignedIn: true, isVerified: true },
					component: load("EventClaim")
				},
				{
					name: "event_details",
					path: "event/details/:permalink",
					component: load("EventDetails")
				},
				{
					name: "event_landing",
					path: "event",
					component: load("Eventlanding")
				},
				{
					name: "event_map",
					path: "event/map",
					component: load("EventMap")
				},
				{
					name: "event_review",
					path: "event/review",
					meta: { isSignedIn: true, isVerified: true, isAdmin: true },
					component: load("EventReview")
				},
				{
					name: "event_search",
					path: "",
					alias: "event/search",
					component: load("EventSearch")
				},
				{
					name: "event_update",
					path: "event/update",
					meta: { isSignedIn: true, isVerified: true },
					component: load("EventUpdate")
				},
				{
					name: "password",
					path: "password",
					component: load("Password")
				},
				{
					name: "profile",
					path: "profile",
					meta: { isSignedIn: true },
					component: load("Profile")
				},
				{
					name: "signin",
					path: "signin",
					meta: { isSignedIn: false },
					component: load("Signin")
				},
				{
					name: "signup",
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
	if (to.meta.isSignedIn && !store.state.profile.user) {
		store.dispatch("alert/open", { type: "warning", message: "restriction_authenticated", displayPage: "signin" })
		next("/signin?redirect=" + to.path)
	} else if (to.meta.isSignedIn !== undefined && !to.meta.isSignedIn && store.state.profile.user) {
		next("/profile")
	} else if (to.meta.isVerified && !store.state.profile.user.isVerified) {
		store.dispatch("alert/open", { type: "warning", message: "restriction_unverified", displayPage: "profile" })
		next("/profile")
	} else if (to.meta.isEventAdmin) {
		next("/error?code=401")
	} else if (to.meta.isAdmin && ![store.state.profile.user.roles].includes("GLOBAL_ADMIN")) {
		next("/error?code=401")
	} else {
		store.dispatch("alert/close", { from: from.name, to: to.name })
		store.dispatch("profile/locale", to.params.locale)
		next()
	}
})

function load(component) {
	return () => import(/* webpackChunkName: "[request]" */ `@/routes/${component}`)
}

export default router
