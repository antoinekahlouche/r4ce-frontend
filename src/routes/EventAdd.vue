<template>
	<Simple title="event_add">
		<form @submit="submit">
			<div class="border rounded-lg p-3 p-lg-5">
				<div class="m-auto container-sm">
					<div class="form-group custom-control custom-checkbox">
						<input type="checkbox" id="valid_info" class="custom-control-input" required />
						<Label class="custom-control-label" text="valid_info" for="valid_info" required />
					</div>
					<div class="form-group custom-control custom-checkbox">
						<input type="checkbox" id="event_allready_present" class="custom-control-input" required />
						<Label class="custom-control-label" text="event_allready_present" for="event_allready_present" required />
					</div>
				</div>
			</div>
			<br />
			<div class="text-center my-3">
				<button type="submit" class="btn btn-primary">{{ $t("button.add") }}</button>
			</div>
		</form>
	</Simple>
</template>

<script>
import Label from "@/components/Label"
import Simple from "@/layouts/Simple"

export default {
	name: "EventAdd",
	route: {
		name: "event_add",
		path: "event/add",
		meta: { isSignedIn: true, isVerified: true }
	},
	components: { Label, Simple },
	methods: {
		submit: async function() {
			event.preventDefault()
			this.$router.push("/event/update")
			return
		}
	}
}
</script>

<style scoped></style>
