<template>
	<div>
		<Header />
		<Spinner v-if="loading" />
		<slot :class="{ visibility: loading ? 'hidden' : 'visible' }" />
		<Footer />
	</div>
</template>

<script>
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Spinner from "@/components/Spinner"

export default {
	name: "Fullscreen",
	components: { Footer, Header, Spinner },
	props: {
		loading: { type: Boolean }
	}
}
</script>

<style scoped></style>
