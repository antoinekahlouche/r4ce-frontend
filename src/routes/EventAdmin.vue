<template></template>

<script>
export default {
	name: "EventAdmin",
	route: {
		name: "event_admin",
		path: "event/admin/:permalink",
		meta: { isSignedIn: true, isVerified: true, isEventAdminStrict: true }
	}
}
</script>

<style scoped></style>
// Transfers capability

