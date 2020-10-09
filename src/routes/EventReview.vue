<template>
	<Simple title="event_review">
		<Bloc>
			aze
		</Bloc>
	</Simple>
</template>

<script>
import Bloc from "@/components/Bloc"
import Simple from "@/layouts/Simple"

export default {
	name: "EventReview",
	route: {
		name: "event_review",
		path: "event/review/:updateId",
		meta: { isSignedIn: true, isVerified: true, isAdmin: true }
	},
	components: { Bloc, Simple, Map },
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
