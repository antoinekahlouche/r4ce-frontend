<template></template>

<script>
import Label from "@/components/Label"
import ListMenu from "@/layouts/ListMenu"

export default {
	name: "EventUpdate",
	route: {
		name: "event_update",
		path: "event/update",
		meta: { isSignedIn: true, isVerified: true }
	},
	components: { Label, ListMenu },
	methods: {
		submit: async function() {}
	}
}
</script>

<style scoped></style>
