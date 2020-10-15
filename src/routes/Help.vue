<template>
	<Layout title="help">
		<div class="alert alert-primary" role="alert">{{ $t("text.empty_section") }}</div>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Layout from "@/components/Layout"

export default {
	name: "Help",
	route: {
		name: "help",
		path: "help"
	},
	components: { Bloc, Layout }
}
</script>

<style scoped></style>
