<template>
	<div class="border rounded-lg p-3 p-lg-5 mb-4">
		<div v-if="container" :class="'m-auto container-' + container">
			<slot />
		</div>
		<slot v-else />
	</div>
</template>

<script>
export default {
	name: "Bloc",
	props: {
		container: String
	}
}
</script>

<style scoped>
</style>
