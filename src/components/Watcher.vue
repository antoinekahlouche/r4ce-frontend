<template></template>

<script>
export default {
	name: "Head",
	watch: {
		"$route.name": {
			deep: true,
			immediate: true,
			handler: function(newName, oldName) {
				if (!newName) return

				// Alerts
				this.$store.dispatch("alert/close", { from: oldName, to: newName })

				// Title tag
				document.title = process.env.VUE_APP_PAGE_PREFIX + " - " + this.$t("title." + newName)

				// TODO Meta tag
				// var description = this.$t("description." + name)
				// var tagsDef = [
				// 	["name", "description", description], //
				// 	["name", "twitter:description", description],
				// 	["name", "twitter:title", name],
				// 	["name", "twitter:image", window.location.origin + "/banner.png"],
				// 	["property", "og:title", name],
				// 	["property", "og:url", window.location.href],
				// 	["property", "og:description", description],
				// 	["property", "og:image", window.location.origin + "/banner.png"]
				// ]
				// tagsDef
				// 	.map(tagDef => {
				// 		var tag = document.createElement("meta")
				// 		tag.setAttribute(tagDef[0], tagDef[1])
				// 		tag.setAttribute("content", tagDef[2])
				// 		return tag
				// 	})
				// 	.forEach(tag => document.head.appendChild(tag))
			}
		},
		"$route.params.locale": {
			deep: true,
			immediate: true,
			handler: function(locale) {
				if (!locale) return

				if (this.$store.state.profile.locale !== locale) {
					this.$store.dispatch("profile/locale", locale)
					document.querySelector("html").setAttribute("lang", locale)
				}
			}
		}
	}
}
</script>

<style scoped></style>
