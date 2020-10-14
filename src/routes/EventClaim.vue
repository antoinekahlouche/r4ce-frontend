<template>
	<Layout title="claim">
		<form @submit="submit">
			<Bloc container="sm">
				<div class="form-group">
					<Label text="name" />
					<!-- TODO event name -->
				</div>
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

export default {
	name: "EventClaim",
	route: {
		name: "event_claim",
		path: "event/claim/:permalink",
		meta: { isSignedIn: true, isVerified: true }
	},
	components: { Bloc, Button, Label, Layout },
	mounted() {
		// TODO redirect back if has admin
	},
	methods: {
		submit(event) {
			event.preventDefault()
		}
	}
}
</script>

<style scoped></style>
