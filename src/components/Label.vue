<template>
	<label :class="{ 'm-0': condensed }">
		<b>
			<span v-html="$t('label.' + text)"></span>
			<span v-if="required" class="text-danger">&nbsp;*</span>
		</b>
	</label>
</template>

<script>
export default {
	name: "EventSearch",
	props: {
		text: { type: String, required: true },
		required: { type: Boolean },
		condensed: { type: Boolean }
	},
	i18n: {
		messages: {
			fr: {
				label: {
					accept_terms_usage: "J'accepte les <a href='/terms/usage'>conditions générales d'utilisation</a>",
					accept_gdpr: "J'accepte la <a href='/terms/gdpr'>politique de confidentialité</a>",
					accept_terms_sale: "J'accepte les <a href='/terms/sale'>conditions générales de vente</a>",
					accessories_type: "Accessoires",
					address: "Adresse",
					apply_price: "Montant de l'inscription",
					avatar: "Avatar",
					clothe_type: "Vêtements",
					clothe_color: "Couleur des vêtements",
					comment: "Commentaire",
					coordinates: "Coordonées",
					country: "Pays",
					date: "Date",
					discipline: "Discipline",
					distance: "Distance",
					duration: "Temps",
					email: "Email",
					event_allready_present: "J'ai vérifié que l'événement n'éxiste pas déjà, y compris sur une année précédente (dans le cas contraire vous pouvez le modifier)",
					eyebrow_type: "Sourcils",
					eye_type: "Yeux",
					facebook: "Facebook",
					facial_hair_color: "Couleur de la barbe",
					facial_hair_type: "Barbe",
					fee_r4ce: "Commission",
					fee_stripe: "Frais bancaire",
					first_name: "Prénom",
					format: "Format",
					from: "Du",
					graphic_type: "Logo",
					hair_color: "Couleur de cheveux",
					in: "En",
					instagram: "Instagram",
					last_name: "Nom",
					locale: "Langue",
					mouth_type: "Bouche",
					name: "Nom",
					password: "Mot de passe",
					promoter: "Organisateur",
					race: "Épreuve",
					rating: "Note de l'évènement",
					represent_event: "Je représente l'organisation de cet évènement",
					skin_color: "Couleur de peau",
					sport: "Sport",
					strava: "Strava",
					time: "Heure",
					to: "Au",
					top_type: "Cheveux",
					total_collected: "Montant perçu",
					twitter: "Twitter",
					update_agreement: "Je m'engage à maintenir les informations à jour",
					valid_info: "Je m'engage à fournir des informaions valides",
					website: "Site internet",
					year: "Année",
					youtube: "YouTube"
				}
			}
		}
	}
}
</script>

<style scoped></style>
