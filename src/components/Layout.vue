<template>
	<div>
		<Header />
		<div class="p-3 p-lg-5 flex-grow-1">
			<Spinner v-if="loading" />

			<div :class="{ invisible: loading }">
				<Breadcrumb v-if="links" :title="title" :links="links" />
				<h1 v-if="title" class="mb-3 mb-lg-5">
					<Icon v-if="icon" class="mr-1 mr-lg-3" :icon="icon" />
					{{ translateTitle ? $t("title." + title) : title }}{{ titleComplement ? " : " + titleComplement : "" }}
				</h1>
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
		icon: { type: String },
		title: { type: String },
		titleComplement: { type: String },
		links: { type: Object },
		translateTitle: { type: Boolean, default: true },
		loading: { type: Boolean }
	}
}
</script>

<style scoped></style>
