<template>
	<Layout icon="user-check" title="verify">
		<Bloc class="text-center">
			<img src="@/assets/mail_sent.svg" />
		</Bloc>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Layout from "@/components/Layout"

export default {
	name: "Verify",
	route: {
		name: "verify",
		path: "verify"
	},
	components: { Bloc, Layout },
	async mounted() {
		const token = this.$route.query.token

		if (token) {
			await this.$store.dispatch("user/setVerify", { token })
		} else {
			this.$router.push("/profile")
		}
	}
}
</script>

<style scoped>
img {
	width: 100%;
	max-width: 800px;
}
</style>
