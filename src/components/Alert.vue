<template>
	<div v-if="alert.type" class="mb-lg-5">
		<div class="alert alert-dismissible" :class="'alert-' + alert.type" role="alert">
			<span v-html="$t('alert.' + alert.message)"></span>
			<button @click="close()" type="button" class="close">
				<span>&times;</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Alerts",
	methods: {
		close() {
			this.$store.dispatch("alert/close")
		}
	},
	computed: {
		alert() {
			return this.$store.state.alert
		}
	}
}
</script>

<style scoped>
button {
	border: none;
	outline: none;
	text-decoration: unset;
}
</style>


