<template>
	<Simple title="signin">
		<form @submit="submit">
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
import Bloc from "@/components/Bloc.vue"
import Label from "@/components/Label.vue"
import Simple from "@/layouts/Simple.vue"

export default {
	name: "Signin",
	components: {
		Bloc,
		Label,
		Simple
	},
	methods: {
		submit: function (event) {
			this.$store.dispatch("profile/signin", {})
			event.preventDefault()
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
