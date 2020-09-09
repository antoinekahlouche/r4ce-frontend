<template>
	<label>
		<b>{{$t("text." + text)}}</b>
		<span v-if="required" class="text-danger">&nbsp;*</span>
	</label>
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
</style>
