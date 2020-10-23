<template>
	<div class="border rounded-lg mb-4" :class="{ 'p-3 p-lg-5': !noPadding }">
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
		container: { type: String },
		noPadding: { type: Boolean }
	}
}
</script>

<style scoped></style>
