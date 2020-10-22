<template>
	<Layout icon="cog" title="admin" :loading="loading">
		<ListMenu>
			<template #stats external>
				aze
			</template>

			<template #event>aze</template>

			<template #apply>aze</template>

			<template #participants>aze</template>

			<template #transfer>aze</template>

			<template #configuration>aze</template>
		</ListMenu>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import ListMenu from "@/components/ListMenu"
import Layout from "@/components/Layout"

export default {
	name: "EventAdmin",
	route: {
		name: "event_admin",
		path: "event/admin/:permalink",
		meta: { isSignedIn: true, isVerified: true, isEventAdminStrict: true }
	},
	components: { Bloc, ListMenu, Layout },
	data: () => ({
		loading: false
	})
}
</script>

<style scoped></style>
