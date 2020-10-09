<template>
	<Simple title="signup">
		<form @submit="submit">
			<Bloc container="sm">
				<div class="form-row">
					<div class="form-group col-md-6">
						<Label text="first_name" required />
						<input type="text" class="form-control" v-model="firstName" required />
					</div>

					<div class="form-group col-md-6">
						<Label text="last_name" required />
						<input type="text" class="form-control" v-model="lastName" required />
					</div>
				</div>

				<div class="form-group">
					<Label text="email" required />
					<input type="email" class="form-control" v-model="email" required />
				</div>

				<div class="form-group">
					<Label text="password" required />
					<input type="password" class="form-control" v-model="password" required />
				</div>

				<div class="form-group custom-control custom-checkbox">
					<input type="checkbox" id="usage" class="custom-control-input" v-model="usage" required />
					<Label class="custom-control-label" text="accept_terms_usage" for="usage" required />
				</div>

				<div class="form-group custom-control custom-checkbox">
					<input type="checkbox" id="gdpr" class="custom-control-input" v-model="gdpr" required />
					<Label class="custom-control-label" text="accept_gdpr" for="gdpr" required />
				</div>
			</Bloc>

			<div class="text-center">
				<button type="submit" class="btn btn-primary" :disabled="loading">
					<span class="spinner-border spinner-border-sm mr-1" role="status" :class="{ 'd-none': !loading }"></span>
					{{ $t("button.signup") }}
				</button>
			</div>
			<br />
			<div class="text-center">
				<router-link :to="to()">{{ $t("button.signin") }}</router-link>
			</div>
		</form>
	</Simple>
</template>

<script>
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import Simple from "@/layouts/Simple"

export default {
	name: "Signup",
	route: {
		name: "signup",
		path: "signup",
		meta: { isSignedIn: false }
	},
	components: { Bloc, Label, Simple },
	data: () => ({
		loading: false,
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		usage: false,
		gdpr: false
	}),
	methods: {
		async submit(event) {
			event.preventDefault()
			this.loading = true

			const success = await this.$store.dispatch("user/signup", {
				email: this.email,
				firstName: this.firstName,
				lastName: this.lastName,
				password: this.password
			})

			if (success) {
				if (this.$route.query && this.$route.query.redirect) {
					this.$router.push(this.$route.query.redirect)
				} else {
					this.$router.push("/profile")
				}
			}

			this.loading = false
			return
		},
		to() {
			let str = "/signin"
			if (this.$route.query && this.$route.query.redirect) {
				str += "?redirect=" + this.$route.query.redirect
			}
			return str
		}
	}
}
</script>

<style scoped></style>
