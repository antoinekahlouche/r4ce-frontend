<template>
	<div id="app" class="d-flex flex-column">
		<Watcher />
		<GDPR />
		<router-view class="flex-grow-1 d-flex flex-column" />
	</div>
</template>

<script>
import GDPR from "@/components/GDPR"
import Watcher from "@/components/Watcher"

export default {
	name: "App",
	components: { GDPR, Watcher },
	mounted() {
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
