<template>
	<div>
		<Header />
		<div class="p-3 p-lg-5 flex-grow-1">
			<Spinner v-if="loading" fullscreen />

			<div :class="{ visibility: loading ? 'hidden' : 'visible' }">
				<Breadcrumb v-if="links" :title="title" :links="links" />
				<h1 v-if="title" class="mb-3 mb-lg-5">{{ translateTitle ? $t("title." + title) : title }}</h1>
				<Alert />
				<slot />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Alert from "@/components/Alert"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Spinner from "@/components/Spinner"

export default {
	name: "Layout",
	components: { Alert, Breadcrumb, Footer, Header, Spinner },
	props: {
		title: String,
		links: Object,
		translateTitle: { type: Boolean, default: true },
		loading: { type: Boolean, default: false }
	}
}
</script>

<style scoped></style>
