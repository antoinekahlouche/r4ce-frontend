<template>
	<div id="app" class="d-flex flex-column">
		<Head />
		<GDPR />
		<router-view class="flex-grow-1 d-flex flex-column" />
	</div>
</template>

<script>
import GDPR from "@/components/GDPR"
import Head from "@/components/Head"

export default {
	name: "App",
	components: { GDPR, Head },
	mounted: function () {
		// Enable popovers everywhere
		$('[data-toggle="popover"]').popover()
	}
}
</script>

<style>
:root {
	--main-color: #c62828;
}

html,
body,
#app {
	height: 100%;
	min-height: 100%;
}

h1,
h2,
h3 {
	font-weight: bold;
}

a {
	text-decoration: unset !important;
}

.btn {
	padding-left: 2.5rem;
	padding-right: 2.5rem;
}
</style>
