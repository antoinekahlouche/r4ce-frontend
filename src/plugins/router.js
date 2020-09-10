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
				template: "<router-view />",
				name: "Router"
			},
			children: [
				{
					path: "401",
					props: { code: 401, type: "danger" },
					component: load("Error")
				},
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
					props: { code: 404, type: "warning" },
					component: load("Error")
				}
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
	store.commit("alert/clear")
	store.dispatch("nav/active", to.path)
	store.dispatch("user/locale", to.params.locale)

	if (to.meta.isSignedIn !== undefined) {
		if (to.meta.isSignedIn && !store.state.user.name) {
			next("signin")
			return
		} else if (!to.meta.isSignedIn && store.state.user.name) {
			next("profile")
			return
		}
	}

	if (to.meta.isVerified && !store.state.user.isVerified) {
		next("profile")
		return
	}

	if (to.meta.isEventAdmin) {
		next("401")
		return
	}

	if (to.meta.isAdmin && ![store.state.user.roles].includes("GLOBAL_ADMIN")) {
		next("401")
		return
	}

	next()
})

function load(component) {
	return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`)
}

export default router
