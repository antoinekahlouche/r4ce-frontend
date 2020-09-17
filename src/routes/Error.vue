<template>
	<Simple title="error">
		<Bloc class="row justify-content-center">
			<img v-if="code === 401" src="@/assets/undraw_authentication_fsn5.svg" />
			<img v-else-if="code === 404" src="@/assets/undraw_page_not_found_su7k.svg" />
			<img v-else src="@/assets/undraw_warning_cyit.svg" />
		</Bloc>
	</Simple>
</template>

<script>
import Bloc from "@/components/Bloc.vue"
import Simple from "@/layouts/Simple.vue"

export default {
	name: "Error",
	components: {
		Bloc,
		Simple
	},
	data: () => ({}),
	props: {
		code: Number
	},
	mounted: function () {
		this.$store.dispatch("alerts/open", { type: "danger", alert: this.code })
	}
}
</script>

<style scoped>
</style>
