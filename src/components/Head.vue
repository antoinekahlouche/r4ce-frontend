<template></template>

<script>
export default {
	name: "Head",
	watch: {
		// TODO meta
		"$route.name": {
			handler: function(name) {
				if (!name) return
				document.title = process.env.VUE_APP_PAGE_PREFIX + " - " + this.$t("title." + name)
			},
			deep: true,
			immediate: true
		},
		"$store.state.profile.locale": {
			handler: function(locale) {
				document.querySelector("html").setAttribute("lang", locale)
			},
			deep: true,
			immediate: true
		}
	}
}
</script>

<style scoped></style>
