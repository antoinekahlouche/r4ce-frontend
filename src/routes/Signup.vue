<template>
	<Simple title="signup">
		<form @submit="signup">
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
					<span class="spinner-border spinner-border-sm mr-1" role="status" :class="{'d-none':!loading}"></span>
					{{$t("button.signup")}}
				</button>
			</div>
			<br />
			<div class="text-center">
				<router-link :to="to()">{{$t("button.signin")}}</router-link>
			</div>
		</form>
	</Simple>
</template>

<script>
import avataaars from "@/helpers/avataaars.js"
import axios from "@/plugins/axios.js"
import Bloc from "@/components/Bloc.vue"
import Label from "@/components/Label.vue"
import Simple from "@/layouts/Simple.vue"

export default {
	name: "Signup",
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
		signup: async function (event) {
			event.preventDefault()
			this.loading = true

			const response = await axios.post("/signup", {
				avatar: avataaars.random(),
				email: this.email,
				firstName: this.firstName,
				gdprVersion: this.$t("gdpr.version"),
				lang: this.$store.stateprofile.locale,
				lastName: this.lastName,
				password: this.password,
				usageVersion: this.$t("usage.version")
			})

			if (response.data.alert) {
				this.$store.dispatch("alerts/open", { type: "warning", alert: response.data.alert })
			} else if (response.data.user) {
				this.$store.dispatch("profile/user", response.data.user)
				this.$store.dispatch("profile/terms", response.data.terms)
				if (this.$route.query && this.$route.query.redirect) {
					this.$router.push(this.$route.query.redirect)
				} else {
					this.$router.push("/profile")
				}
			} else {
				this.$router.push("/500")
			}
			this.loading = false
			return
		},
		to: function () {
			let jsonTo = { path: "signin" }
			if (this.$route.query && this.$route.query.redirect) {
				jsonTo.query = { redirect: this.$route.query.redirect }
			}
			return jsonTo
		}
	}
}
</script>

<style scoped>
</style>
