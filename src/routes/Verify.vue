<template>
	<Simple title="verify">
		<Bloc class="text-center">
			<img src="@/assets/undraw_Mail_sent_re_0ofv.svg" />
		</Bloc>
	</Simple>
</template>

<script>
import Bloc from "@/components/Bloc"
import Simple from "@/layouts/Simple"

export default {
	name: "Verify",
	route: {
		name: "verify",
		path: "verify"
	},
	components: { Bloc, Simple },
	mounted: async function() {
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
