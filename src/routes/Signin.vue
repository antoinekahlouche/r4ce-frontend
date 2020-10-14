<template>
	<Layout title="signin">
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
					<Spinner v-if="loading" />
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
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import Layout from "@/components/Layout"
import Spinner from "@/components/Spinner"

export default {
	name: "Signin",
	route: {
		name: "signin",
		path: "signin",
		meta: { isSignedIn: false }
	},
	components: { Bloc, Label, Layout, Spinner },
	data: () => ({
		loading: false,
		email: null,
		password: null
	}),
	methods: {
		async submit(event) {
			event.preventDefault()
			this.loading = true

			const success = await this.$store.dispatch("user/signin", {
				email: this.email,
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
