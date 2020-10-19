<template>
	<Layout title="error">
		<div class="alert alert-danger" role="alert">{{ $t("error." + code) }}</div>
		<Bloc class="text-center">
			<img v-if="code === 403" src="@/assets/authentication.svg" />
			<img v-else-if="code === 404" src="@/assets/page_not_found.svg" />
			<img v-else src="@/assets/warning.svg" />
		</Bloc>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Layout from "@/components/Layout"

export default {
	name: "Error",
	route: {
		name: "error",
		path: "error",
		props: route => ({ code: parseInt(route.query.code) })
	},
	components: { Bloc, Layout },
	props: {
		code: { type: Number, required: true }
	},
	i18n: {
		messages: {
			fr: {
				error: {
					"401": "Une authentification est nécessaire pour accéder à la ressource",
					"403": "Vos droits d'accès ne permettent pas d'accéder à la ressource",
					"404": "Ressource non trouvée",
					"500": "Erreur interne du serveur",
					"503": "Service temporairement indisponible ou en maintenance"
				}
			}
		}
	}
}
</script>

<style scoped>
img {
	width: 100%;
	max-width: 800px;
}
</style>
