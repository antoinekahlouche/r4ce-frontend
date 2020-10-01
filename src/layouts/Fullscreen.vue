<template>
	<div>
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<script>
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default {
	name: "Fullscreen",
	components: { Footer, Header }
}
</script>

<style scoped></style>
