<template>
	<Global title="event_review">
		<Bloc>
			aze
		</Bloc>
	</Global>
</template>

<script>
import Bloc from "@/components/Bloc"
import Global from "@/components/Layout"

export default {
	name: "EventReview",
	route: {
		name: "event_review",
		path: "event/review/:updateId",
		meta: { isSignedIn: true, isVerified: true, isAdmin: true }
	},
	components: { Bloc, Global, Map },
	data: () => ({
		loading: false,
		event: {},
		update: {}
	}),
	mounted() {},
	methods: {
		async submit(event) {
			event.preventDefault()
			this.loading = true

			this.loading = false
			return
		}
	}
}
</script>

<style scoped></style>
