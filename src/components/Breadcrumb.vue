<template>
	<nav aria-label="breadcrumb" class="flex-grow-1 pb-3 pb-lg-5">
		<ol class="breadcrumb m-0">
			<li v-for="(value, key) in links" :key="key" class="breadcrumb-item">
				<router-link :to="value">{{ $t("title." + key) }}</router-link>
			</li>
			<li class="breadcrumb-item active" aria-current="page">{{ $t("title." + title) }}</li>
		</ol>
	</nav>
</template>

<script>
export default {
	name: "Breadcrumb",
	props: {
		title: { type: String, required: true },
		links: { type: Object, required: true }
	}
}
</script>

<style scoped></style>
