<template>
	<Layout icon="envelope" title="contact">
		<form @submit="submit">
			<Bloc container="sm">
				<div class="form-group">
					<Label for="name" text="name" required />
					<input id="name" type="text" class="form-control" v-model="name" required />
				</div>
				<div class="form-group">
					<Label for="email" text="email" required />
					<input id="email" type="email" class="form-control" v-model="email" required />
				</div>
				<div class="form-group">
					<Label for="comment" text="comment" required />
					<textarea id="comment" rows="10" class="form-control" v-model="comment" required />
				</div>
			</Bloc>
			<div class="text-center">
				<button type="submit" class="btn btn-primary" :disabled="loading">
					<Icon v-if="loading" class="mr-2" icon="spinner" pulse />
					{{ $t("button.send") }}
				</button>
			</div>
		</form>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import Layout from "@/components/Layout"
import axios from "@/plugins/axios"

export default {
	name: "Contact",
	route: {
		name: "contact",
		path: "contact"
	},
	components: { Bloc, Label, Layout },
	data: () => ({
		loading: false,
		name: null,
		email: null,
		comment: null
	}),
	methods: {
		async submit(event) {
			event.preventDefault()
			this.loading = true

			const response = await axios.post("/contact", {
				name: this.name,
				email: this.email,
				locale: this.$i18n.locale.toUpperCase(),
				comment: this.comment
			})

			if (!response) {
				this.$store.dispatch("alert/open", { type: "error", message: "email_contact_error", details: process.env.VUE_APP_EMAIL_CONTACT })
				return
			}

			this.$store.dispatch("alert/open", { type: "success", message: "email_contact_sent" })
			this.name = null
			this.email = null
			this.comment = null

			this.loading = false
			return
		}
	}
}
</script>

<style scoped></style>
