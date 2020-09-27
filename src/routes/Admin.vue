<template></template>

<script>
export default {
	name: "Admin",
	route: {
		name: "admin",
		path: "admin",
		meta: { isSignedIn: true, isVerified: true, isAdmin: true }
	}
}
</script>

<style scoped></style>
