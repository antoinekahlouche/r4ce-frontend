<template>
	<Simple title="signin">
		<form @submit="signin">
			<Bloc container="sm">
				<div class="form-group">
					<Label text="email" required />
					<input type="email" class="form-control" name="email" required />
				</div>

				<div class="form-group">
					<Label text="password" required />
					<input type="password" class="form-control" name="password" required />
				</div>
			</Bloc>

			<div class="text-center">
				<button type="submit" class="btn btn-primary">{{$t("button.signin")}}</button>
			</div>
			<br />
			<div class="text-center">
				<router-link to="/password">{{$t("button.password")}}</router-link>
				<br />
				<router-link :to="to()">{{$t("button.signup")}}</router-link>
			</div>
		</form>
	</Simple>
</template>

<script>
import axios from "@/plugins/axios.js"
import Bloc from "@/components/Bloc.vue"
import Label from "@/components/Label.vue"
import Simple from "@/layouts/Simple.vue"

export default {
	name: "Signin",
	components: { Bloc, Label, Simple },
	data: () => ({
		loading: false,
		email: null,
		password: null
	}),
	methods: {
		signin: async function (event) {
			event.preventDefault()
			this.loading = true

			const response = await axios.post("/signin", {
				email: this.email,
				password: this.password
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
			let jsonTo = { path: "signup" }
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
