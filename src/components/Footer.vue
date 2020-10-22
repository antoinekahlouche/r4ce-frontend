<template>
	<footer class="mt-auto px-3 px-lg-5 text-light bg-dark py-3">
		<ul class="navbar-nav">
			<li class="nav-item dropup">
				<a class="nav-link text-muted dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{{ $t("title.about") }}</a>
				<div class="dropdown-menu">
					<router-link class="dropdown-item" to="/legal">
						<Icon class="mr-2" icon="info" size="lg" fixed-width />
						{{ $t("title.legal") }}
					</router-link>
					<router-link class="dropdown-item" to="/terms/usage">
						<Icon class="mr-2" icon="file-alt" size="lg" fixed-width />
						{{ $t("title.terms_usage") }}
					</router-link>
					<router-link class="dropdown-item" to="/terms/gdpr">
						<Icon class="mr-2" icon="file-alt" size="lg" fixed-width />
						{{ $t("title.terms_gdpr") }}
					</router-link>
					<router-link class="dropdown-item" to="/team">
						<Icon class="mr-2" icon="users" size="lg" fixed-width />
						{{ $t("title.team") }}
					</router-link>
					<router-link class="dropdown-item" to="/credit">
						<Icon class="mr-2" icon="hands-helping" size="lg" fixed-width />
						{{ $t("title.credit") }}
					</router-link>
					<router-link class="dropdown-item" to="/contact">
						<Icon class="mr-2" icon="envelope" size="lg" fixed-width />
						{{ $t("title.contact") }}
					</router-link>
					<router-link class="dropdown-item" to="/help">
						<Icon class="mr-2" icon="question" size="lg" fixed-width />
						{{ $t("title.help") }}
					</router-link>
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
