<template>
	<Simple title="error">
		<template #content>
			<div class="row justify-content-center">
				<img v-if="code === 401" src="@/assets/undraw_authentication_fsn5.svg" />
				<img v-if="code === 404" src="@/assets/undraw_page_not_found_su7k.svg" />
				<img v-if="code === 503" src="@/assets/undraw_warning_cyit.svg" />
			</div>
		</template>
	</Simple>
</template>

<script>
import Simple from "@/layouts/Simple.vue";

export default {
	name: "Error",
	components: {
		Simple,
	},
	props: {
		code: Number,
		type: String,
	},
	mounted: function () {
		this.$store.commit("alert/open", { type: this.type, text: this.code });
	},
};
</script>

<style scoped>
</style>
