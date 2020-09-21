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
					name: "About",
					path: "about",
					component: load("About")
				},
				{
					name: "Admin",
					path: "admin",
					meta: { isSignedIn: true, isVerified: true, isAdmin: true },
					component: load("Admin")
				},
				{
					name: "Error",
					path: "error/:code",
					props: route => ({ code: parseInt(route.query.code) }),
					component: load("Error")
				},
				{
					name: "EventAdd",
					path: "event/add",
					meta: { isSignedIn: true, isVerified: true },
					component: load("EventAdd")
				},
				{
					name: "EventAdmin",
					path: "event/admin/:permalink",
					meta: { isSignedIn: true, isVerified: true, isEventAdminStrict: true },
					component: load("EventAdmin")
				},
				{
					name: "EventClaim",
					path: "event/claim/:permalink",
					meta: { isSignedIn: true, isVerified: true },
					component: load("EventClaim")
				},
				{
					name: "EventDetails",
					path: "event/details/:permalink",
					component: load("EventDetails")
				},
				{
					name: "Eventlanding",
					path: "event",
					component: load("Eventlanding")
				},
				{
					name: "EventMap",
					path: "event/map",
					component: load("EventMap")
				},
				{
					name: "EventReview",
					path: "event/review",
					meta: { isSignedIn: true, isVerified: true, isAdmin: true },
					component: load("EventReview")
				},
				{
					name: "EventSearch",
					path: "",
					alias: "event/search",
					component: load("EventSearch")
				},
				{
					name: "EventUpdate",
					path: "event/update",
					meta: { isSignedIn: true, isVerified: true },
					component: load("EventUpdate")
				},
				{
					name: "Password",
					path: "password",
					component: load("Password")
				},
				{
					name: "Profile",
					path: "profile",
					meta: { isSignedIn: true },
					component: load("Profile")
				},
				{
					name: "Signin",
					path: "signin",
					meta: { isSignedIn: false },
					component: load("Signin")
				},
				{
					name: "Signup",
					path: "signup",
					meta: { isSignedIn: false },
					component: load("Signup")
				},
				{
					name: "Sitemap",
					path: "sitemap",
					component: load("Sitemap")
				},
				{
					name: "Error",
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
	// console.log(from, to)
	if (to.meta.isSignedIn && !store.state.profile.user) {
		store.dispatch("alert/open", { type: "warning", message: "restriction_authenticated", displayPage: "Signin" })
		next("/signin?redirect=" + to.path)
	} else if (to.meta.isSignedIn !== undefined && !to.meta.isSignedIn && store.state.profile.user) {
		next("/profile")
	} else if (to.meta.isVerified && !store.state.profile.user.isVerified) {
		store.dispatch("alert/open", { type: "warning", message: "restriction_unverified", displayPage: "Profile" })
		next("/profile")
	} else if (to.meta.isEventAdmin) {
		next("/error?code=401")
	} else if (to.meta.isAdmin && ![store.state.profile.user.roles].includes("GLOBAL_ADMIN")) {
		next("/error?code=401")
	} else {
		store.dispatch("alert/close", from.name)
		store.dispatch("profile/locale", to.params.locale)
		next()
	}
})

function load(component) {
	return () => import(/* webpackChunkName: "[request]" */ `@/routes/${component}.vue`)
}

export default router
