<template>
	<Layout title="legal">
		<Bloc>
			<div class="mb-5">
				<h2>{{ $t("text.editor") }}</h2>
				Antoine Kahlouche SASU <br />
				3 rue Arletty <br />
				92400 Courbevoie <br />
				FRANCE
				<br />
				<br />
				contact@r4ce.co <br />
				<a href="https://antoine.kahlouche.fr" target="_blank">antoine.kahlouche.fr</a>
				<br />
				<br />Capital : 1000€ <br />
				SIRET : 829 748 938 00018 RCS Nanterre <br />
				TVA : FR 40 8297 48938
			</div>

			<div class="mb-5">
				<h2>{{ $t("text.editorial_manager") }}</h2>
				M. Antoine Kahlouche
			</div>

			<div class="mb-5">
				<h2>{{ $t("text.host") }}</h2>
				<img class="img-fluid m-4" style="width:100px;" src="@/assets/Amazon_Web_Services_Logo.svg" /> <br />
				Amazon Web Services LLC <br />
				P.O. Box 81226 <br />
				Seattle, WA 98108-1226 <br />
				USA <br />
				<br />
				<a href="https://aws.amazon.com" target="_blank">aws.amazon.com</a>
			</div>

			<div>
				<h2>{{ $t("text.payement") }}</h2>
				<img class="img-fluid m-4" style="width:150px;" src="@/assets/Stripe_Logo.svg" /> <br />
				<br />
				<a href="https://stripe.com/fr" target="_blank">stripe.com</a>
			</div>
		</Bloc>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Layout from "@/components/Layout"

export default {
	name: "Legal",
	route: {
		name: "legal",
		path: "legal"
	},
	components: { Bloc, Layout }
}
</script>

<style scoped></style>
