<template>
	<Layout icon="envelope" title="unsubscribe">
		<Bloc class="text-center">
			<img src="@/assets/mail_stop.svg" />
		</Bloc>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Layout from "@/components/Layout"
import axios from "@/plugins/axios"

export default {
	name: "Unsubscribe",
	route: {
		name: "unsubscribe",
		path: "unsubscribe"
	},
	components: { Bloc, Layout },
	async mounted() {
		const email = this.$route.query.email

		if (email) {
			const response = await axios.post("/unsubscribe", { email })

			if (response) {
				this.$store.dispatch("alert/open", { type: "success", message: "unsubscribe_success" })
			}
		} else {
			this.$router.push("/event/search")
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
