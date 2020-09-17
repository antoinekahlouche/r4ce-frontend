<template>
	<label>
		<b>
			<span v-html="$t('label.' + text)"></span>
			<span v-if="required" class="text-danger">&nbsp;*</span>
		</b>
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
