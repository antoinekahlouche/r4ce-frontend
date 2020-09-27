<template>
	<Simple title="password">
		<form @submit="submit">
			<Bloc container="sm">
				<div class="form-group">
					<Label text="email" required />
					<input type="email" class="form-control" v-model="email" required :disabled="token" />
				</div>
				<div class="form-group" :class="{ 'd-none': !token }">
					<Label text="password" required />
					<input type="password" class="form-control" v-model="password" :required="token" />
				</div>
			</Bloc>

			<div class="text-center">
				<button v-if="token" type="submit" class="btn btn-primary">{{ $t("button.password_new") }}</button>
				<button v-else type="submit" class="btn btn-primary">{{ $t("button.password") }}</button>
			</div>
			<br />
			<div class="text-center">
				<router-link to="/signin">{{ $t("button.signin") }}</router-link>
			</div>
		</form>
	</Simple>
</template>

<script>
import axios from "@/plugins/axios.js"
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import Simple from "@/layouts/Simple"

export default {
	name: "Password",
	route: {
		name: "password",
		path: "password"
	},
	components: { Bloc, Label, Simple },
	data: () => ({
		loading: false,
		email: null,
		password: null,
		token: null
	}),
	mounted: function() {
		this.token = this.$route.query.token
		this.email = this.$route.query.email
	},
	methods: {
		submit: async function(event) {
			event.preventDefault()
			this.loading = true
			if (this.token) {
				await this.submitPost(event)
			} else {
				await this.submitGet(event)
			}
			this.loading = false
			return
		},
		submitGet: async function(event) {
			const response = await axios.get("/password", {
				params: {
					email: this.email
				}
			})

			if (!response.data) {
				this.$store.dispatch("alert/open", {
					type: "success",
					message: "email_password_sent",
					displayPage: "signin"
				})
				this.$router.push("/signin")
			}
		},
		submitPost: async function(event) {
			const response = await axios.post("/password", {
				email: this.email,
				token: this.token,
				password: this.password
			})

			if (!response.data) {
				this.$store.dispatch("alert/open", {
					type: "success",
					message: "password_updated",
					displayPage: "signin"
				})
				this.$router.push("/signin")
			}
		}
	}
}
</script>

<style scoped></style>
