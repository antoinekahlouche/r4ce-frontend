<template>
	<footer class="mt-auto px-3 px-lg-5 text-light bg-dark py-3">
		<ul class="navbar-nav">
			<li class="nav-item ml-auto">
				<router-link to="/about" class="nav-link text-muted">{{$t("title.about")}}</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style scoped>
</style>
