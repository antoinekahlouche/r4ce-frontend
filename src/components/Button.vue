<template>
	<button type="submit" class="btn btn-primary mt-3">
		<span class="mx-2">{{$t("title.search")}}</span>
	</button>
</template>

<script>
export default {
	name: "EventSearch",
	props: {
		text: { type: String, required: true },
		required: Boolean
	}
}
</script>

<style scoped>
.btn {
	padding-left: 2.5rem;
	padding-right: 2.5rem;
}
</style>
