<template>
	<Simple title="signin">
		<form @submit="submit">
			<Bloc container="sm">
				<div class="form-group">
					<Label for="email" text="email" required />
					<input id="email" type="email" class="form-control" v-model="email" required />
				</div>

				<div class="form-group">
					<Label for="password" text="password" required />
					<input id="password" type="password" class="form-control" v-model="password" required />
				</div>
			</Bloc>

			<div class="text-center">
				<button type="submit" class="btn btn-primary" :disabled="loading">
					<span class="spinner-border spinner-border-sm mr-1" role="status" :class="{ 'd-none': !loading }"></span>
					{{ $t("button.signin") }}
				</button>
			</div>
			<br />
			<div class="text-center">
				<router-link to="/password">{{ $t("button.password") }}</router-link>
				<br />
				<router-link :to="to()">{{ $t("button.signup") }}</router-link>
			</div>
		</form>
	</Simple>
</template>

<script>
import axios from "@/plugins/axios"
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import Simple from "@/layouts/Simple"
import i18n from "@/plugins/i18n"

export default {
	name: "Signin",
	route: {
		name: "signin",
		path: "signin",
		meta: { isSignedIn: false }
	},
	components: { Bloc, Label, Simple },
	data: () => ({
		loading: false,
		email: null,
		password: null
	}),
	methods: {
		submit: async function(event) {
			event.preventDefault()
			this.loading = true

			const response = await axios.post("/signin", {
				email: this.email,
				password: this.password
			})

			if (response.data && response.data.user) {
				await this.$store.dispatch("user/set", response.data.user)
				await this.$store.dispatch("terms/set", response.data.terms)
				if (this.$route.query && this.$route.query.redirect) {
					this.$router.push(this.$route.query.redirect)
				} else {
					this.$router.push("/profile")
				}
			}

			this.loading = false
			return
		},
		to: function() {
			let str = "/signup"
			if (this.$route.query && this.$route.query.redirect) {
				str += "?redirect=" + this.$route.query.redirect
			}
			return str
		}
	}
}
</script>

<style scoped></style>
