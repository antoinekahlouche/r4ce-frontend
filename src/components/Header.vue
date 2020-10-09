<template>
	<header>
		<nav class="navbar navbar-expand-md navbar-dark px-3 px-lg-5">
			<router-link to="/event/search" class="mr-3">
				<div class="navbar-brand my-1 align-middle m-0">R4CE</div>
			</router-link>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar_links" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="Navbar_links">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item" :class="{ active: eventActif }">
						<router-link to="/event/search" class="nav-link">{{ $t("title.events") }}</router-link>
					</li>

					<li class="nav-item" :class="{ active: profileActif }">
						<router-link to="/profile" class="nav-link">{{ $t("title.profile") }}</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: "Header",
	data: () => ({
		eventActif: false,
		profileActif: false
	}),
	watch: {
		"$route.path": {
			handler(path) {
				const splittedPath = path.split("/")

				if ([undefined, "", "event"].includes(splittedPath[2])) {
					this.eventActif = true
					this.profileActif = false
				} else if (["signin", "signup", "profile"].includes(splittedPath[2])) {
					this.eventActif = false
					this.profileActif = true
				} else {
					this.eventActif = false
					this.profileActif = false
				}
			},
			deep: true,
			immediate: true
		}
	}
}
</script>

<style scoped>
.navbar {
	background-color: var(--main-color);
}

.navbar-brand {
	line-height: 2.5rem;
	letter-spacing: 0.1rem;
	font-size: 3rem;
	font-family: "Lilita One";
}

.navbar .navbar-toggler {
	border: none;
	outline: none;
	text-decoration: unset;
}
</style>
