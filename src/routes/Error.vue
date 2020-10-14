<template>
	<Layout title="error">
		<div class="alert alert-danger" role="alert">{{ $t("alert." + code) }}</div>
		<Bloc class="text-center">
			<img v-if="code === 403" src="@/assets/undraw_authentication_fsn5.svg" />
			<img v-else-if="code === 404" src="@/assets/undraw_page_not_found_su7k.svg" />
			<img v-else src="@/assets/undraw_warning_cyit.svg" />
		</Bloc>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Layout from "@/components/Layout"

export default {
	name: "Error",
	route: {
		name: "error",
		path: "error",
		props: route => ({ code: parseInt(route.query.code) })
	},
	components: { Bloc, Layout },
	props: {
		code: { type: Number, required: true }
	}
}
</script>

<style scoped>
img {
	width: 100%;
	max-width: 800px;
}
</style>
