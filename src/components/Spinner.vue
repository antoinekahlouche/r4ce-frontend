<template>
	<div v-if="fullscreen" class="position-absolute fullscreen">
		<div class="spinner-border" role="status">
			<span class="sr-only">{{ $t("text.loading") }}...</span>
		</div>
	</div>
	<span v-else class="spinner-border spinner-border-sm mr-1" role="status">
		<span class="sr-only">{{ $t("text.loading") }}...</span>
	</span>
</template>

<script>
export default {
	name: "Spinner",
	props: {
		fullscreen: { type: Boolean, default: false }
	}
}
</script>

<style scoped>
.fullscreen {
	color: var(--main-color);
	top: 50%;
	left: 50%;
	margin-left: -1rem;
	margin-top: -1rem;
	width: 2rem;
}
</style>
