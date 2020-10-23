<template>
	<Layout
		icon="hands-helping"
		title="claim"
		:titleComplement="event && event.name"
		:links="[
			{ name: 'search', link: '/event/search' },
			{ name: 'map', link: '/event/map?' + this.$store.getters['search/query'] },
			{ name: (event && event.name) || '', translate: false, link: '/event/details/' + this.$route.params.permalink }
		]"
	>
		<form @submit="submit">
			<Bloc container="sm">
				<div class="form-group custom-control custom-checkbox">
					<input type="checkbox" id="represent_event" name="represent_event" class="custom-control-input" required />
					<Label class="custom-control-label" for="represent_event" text="represent_event" required />
				</div>
				<div class="form-group custom-control custom-checkbox">
					<input type="checkbox" id="update_agreement" name="update_agreement" class="custom-control-input" required />
					<Label class="custom-control-label" for="update_agreement" text="update_agreement" required />
				</div>
			</Bloc>
			<div class="text-center mt-3">
				<button type="submit" class="btn btn-primary">{{ $t("button.claim") }}</button>
			</div>
		</form>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Button from "@/components/Label"
import Label from "@/components/Label"
import Layout from "@/components/Layout"
import axios from "@/plugins/axios"

export default {
	name: "EventClaim",
	route: {
		name: "event_claim",
		path: "event/claim/:permalink",
		meta: { isSignedIn: true, isVerified: true }
	},
	components: { Bloc, Button, Label, Layout },
	data: () => ({
		loading: true,
		event: null
	}),
	async mounted() {
		const response = await axios.get("/event", { params: { permalink: this.$route.params.permalink } })
		if (!response?.data?.event) return this.$router.push("/error?code=404")
		if (response.data.event.admin) return this.$router.push("/event/details/" + this.$route.params.permalink)
		this.event = response.data.event

		this.loading = false
	},
	methods: {
		submit(event) {
			event.preventDefault()
			this.$router.push("/event/admin/" + this.$route.params.permalink)
		}
	}
}
</script>

<style scoped></style>
