<template>
	<div>
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"

export default {
	name: "Fullscreen",
	components: { Footer, Header }
}
</script>

<style scoped>
</style>
