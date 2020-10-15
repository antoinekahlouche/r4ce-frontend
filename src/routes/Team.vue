<template>
	<Layout title="team">
		<Bloc class="text-center">
			<Avataaars class="m-auto avatar pb-3" />
			<h2>Antoine Kahlouche</h2>
			<p class="text-muted">{{ $t("text.creator") }}</p>
		</Bloc>
	</Layout>
</template>

<script>
import Avataaars from "@/components/Avataaars"
import Bloc from "@/components/Bloc"
import Layout from "@/components/Layout"

export default {
	name: "Team",
	route: {
		name: "team",
		path: "team"
	},
	components: { Avataaars, Bloc, Layout }
}
</script>

<style scoped>
.avatar {
	width: 30rem;
}
</style>
