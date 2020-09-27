<template></template>

<script>
export default {
	name: "EventReview",
	route: {
		name: "event_review",
		path: "event/review",
		meta: { isSignedIn: true, isVerified: true, isAdmin: true }
	}
}
</script>

<style scoped></style>
