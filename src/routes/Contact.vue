<template>
	<Layout title="contact">
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
					<Spinner v-if="loading" />
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
import Spinner from "@/components/Spinner"

export default {
	name: "Contact",
	route: {
		name: "contact",
		path: "contact"
	},
	components: { Bloc, Label, Layout, Spinner },
	data: () => ({
		loading: false,
		price: 25,
		name: null,
		email: null,
		comment: null
	}),
	methods: {
		async submit(event) {
			event.preventDefault()
			this.loading = true

			// const success = await this.$store.dispatch("user/signin", {
			// 	email: this.email,
			// 	password: this.password
			// })

			// if (success) {
			// 	if (this.$route.query && this.$route.query.redirect) {
			// 		this.$router.push(this.$route.query.redirect)
			// 	} else {
			// 		this.$router.push("/profile")
			// 	}
			// }

			this.loading = false
			return
		}
	}
}
</script>

<style scoped></style>
