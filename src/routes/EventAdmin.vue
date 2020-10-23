<template>
	<Layout icon="cog" title="admin" :titleComplement="event && event.name" :loading="loading">
		<ListMenu :externalLink="{ event: '/event/update/' + $route.params.permalink, apply: '' }">
			<template #stats>
				<Bloc></Bloc>
			</template>

			<template #event> </template>

			<template #apply> </template>

			<template #participants>
				<Bloc></Bloc>
			</template>

			<template #transfer>
				<Bloc></Bloc>
			</template>

			<template #config>
				<Bloc></Bloc>
			</template>
		</ListMenu>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import ListMenu from "@/components/ListMenu"
import Layout from "@/components/Layout"
import axios from "@/plugins/axios"

export default {
	name: "EventAdmin",
	route: {
		name: "event_admin",
		path: "event/admin/:permalink",
		meta: { isSignedIn: true, isVerified: true, isEventAdminStrict: true }
	},
	components: { Bloc, ListMenu, Layout },
	data: () => ({
		loading: true,
		event: null
	}),
	async mounted() {
		const response = await axios.get("/event", { params: { permalink: this.$route.params.permalink } })
		if (!response || !response.data?.event) return this.$router.push("/error?code=404")
		this.event = response.data.event

		this.loading = false
	}
}
</script>

<style scoped></style>
