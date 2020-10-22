<template>
	<div class="position-absolute fullscreen">
		<div class="spinner-border" role="status">
			<span class="sr-only">{{ $t("text.loading") }}...</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Spinner"
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
