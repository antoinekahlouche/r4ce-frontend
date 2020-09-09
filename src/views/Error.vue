<template>
	<Simple title="error">
		<div class="row justify-content-center">
			<img v-if="code === 404" src="@/assets/undraw_page_not_found_su7k.svg" />
			<img v-if="code === 503" src="@/assets/undraw_warning_cyit.svg" />
		</div>
	</Simple>
</template>

<script>
import Simple from "@/layouts/Simple.vue"

export default {
	name: "Error",
	components: {
		Simple,
	},
	props: {
		code: Number
	}
}
</script>

<style scoped>
</style>
