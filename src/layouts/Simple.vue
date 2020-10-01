<template>
	<div>
		<Header />
		<div class="p-3 p-lg-5 flex-grow-1">
			<Breadcrumb v-if="links" :title="title" :links="links" />
			<h1 class="mb-3 mb-lg-5">{{ $t("title." + title) }}</h1>
			<Alert />
			<slot />
		</div>
		<Footer />
	</div>
</template>

<script>
import Alert from "@/components/Alert"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default {
	name: "Simple",
	components: { Alert, Breadcrumb, Footer, Header },
	props: {
		title: { type: String, required: true },
		links: Object
	}
}
</script>

<style scoped></style>
