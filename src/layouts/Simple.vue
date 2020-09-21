<template>
	<div>
		<Header />
		<div class="p-3 p-lg-5 flex-grow-1">
			<Breadcrumb v-if="links" :title="title" :links="links" />
			<Alert />
			<h1 class="mb-3 mb-lg-5">{{$t("title." + title)}}</h1>
			<slot />
		</div>
		<Footer />
	</div>
</template>

<script>
import Alert from "@/components/Alert.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"

export default {
	name: "Simple",
	components: { Alert, Breadcrumb, Footer, Header },
	props: {
		title: { type: String, required: true },
		links: Object
	}
}
</script>

<style scoped>
</style>
