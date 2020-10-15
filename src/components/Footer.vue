<template>
	<footer class="mt-auto px-3 px-lg-5 text-light bg-dark py-3">
		<ul class="navbar-nav">
			<li class="nav-item dropup">
				<a class="nav-link text-muted dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{{ $t("title.about") }}</a>
				<div class="dropdown-menu">
					<router-link class="dropdown-item" to="/legal">{{ $t("title.legal") }}</router-link>
					<router-link class="dropdown-item" to="/terms/usage">{{ $t("title.terms_usage") }}</router-link>
					<router-link class="dropdown-item" to="/terms/gdpr">{{ $t("title.terms_gdpr") }}</router-link>
					<router-link class="dropdown-item" to="/team">{{ $t("title.team") }}</router-link>
					<router-link class="dropdown-item" to="/credit">{{ $t("title.credit") }}</router-link>
					<router-link class="dropdown-item" to="/contact">{{ $t("title.contact") }}</router-link>
					<router-link class="dropdown-item" to="/help">{{ $t("title.help") }}</router-link>
				</div>
			</li>
		</ul>
	</footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style scoped></style>
