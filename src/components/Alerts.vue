<template>
	<div v-if="$store.state.alerts.list.length > 0" class="mb-lg-5">
		<div v-for="(alert,index) in $store.state.alerts.list" :key="index">
			<div class="alert alert-dismissible" :class="'alert-' + alert.type" role="alert">
				{{$t("alert." + alert.alert)}}
				<button @click="close(index)" type="button" class="close">
					<span>&times;</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Alerts",
	methods: {
		close(index) {
			this.$store.dispatch("alerts/close", index)
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


