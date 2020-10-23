<template>
	<nav aria-label="breadcrumb" class="flex-grow-1 pb-3 pb-lg-5">
		<ol class="breadcrumb m-0">
			<li v-for="value in links" :key="value.name" class="breadcrumb-item">
				<router-link :to="value.link">{{ value.translate === false ? value.name : $t("title." + value.name) }}</router-link>
			</li>
			<li class="breadcrumb-item active" aria-current="page">{{ translateTitle ? $t("title." + title) : title }}</li>
		</ol>
	</nav>
</template>

<script>
export default {
	name: "Breadcrumb",
	props: {
		title: { type: String, required: true },
		links: { type: Array, required: true },
		translateTitle: { type: Boolean, default: true }
	}
}
</script>

<style scoped></style>
