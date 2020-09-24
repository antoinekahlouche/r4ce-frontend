<template>
	<Simple title="error">
		<div class="alert alert-danger" role="alert">{{ $t("alert." + code) }}</div>
		<Bloc class="text-center">
			<img v-if="code === 401" src="@/assets/undraw_authentication_fsn5.svg" />
			<img v-else-if="code === 404" src="@/assets/undraw_page_not_found_su7k.svg" />
			<img v-else src="@/assets/undraw_warning_cyit.svg" />
		</Bloc>
	</Simple>
</template>

<script>
import Bloc from "@/components/Bloc"
import Simple from "@/layouts/Simple"

export default {
	name: "Error",
	components: { Bloc, Simple },
	data: () => ({
		// code: null
	}),
	props: {
		code: { type: Number, required: true }
	},
	mounted: function () {
		// this.code = this.$route.params.code
		// this.$store.dispatch("alert/open", { type: "danger", message: this.code })
	}
}
</script>

<style scoped>
</style>
