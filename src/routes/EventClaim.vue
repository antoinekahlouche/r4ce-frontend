<template></template>

<script>
export default {
	name: "EventClaim",
	route: {
		name: "event_claim",
		path: "event/claim/:permalink",
		meta: { isSignedIn: true, isVerified: true }
	}
}
</script>

<style scoped></style>
