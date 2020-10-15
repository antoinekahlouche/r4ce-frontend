<template>
	<div v-if="alert.type" class="mb-lg-5">
		<div class="alert alert-dismissible" :class="'alert-' + alert.type" role="alert">
			<span v-if="alert.details" v-html="$t('alert.' + alert.message) + '<br />' + alert.details"></span>
			<span v-else v-html="$t('alert.' + alert.message)"></span>
			<button @click="close()" type="button" class="close">
				<span>&times;</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Alerts",
	methods: {
		close() {
			this.$store.dispatch("alert/close")
			// this.$store.commit("alert/CLOSE")
		}
	},
	computed: {
		alert() {
			return this.$store.state.alert
		}
	},
	i18n: {
		messages: {
			fr: {
				alert: {
					avatar_invalid: "L'avatar n'est pas valide",
					avatar_updated: "Avatar modifié",
					claim_success: "Vous êtes désormais l'administrateur de cet évènement",
					comment_added: "Commentaire ajouté",
					comment_deleted: "Commentaire supprimé",
					comment_deletion_error: "Le commentaire n'a pas pu être supprimé",
					comment_error: "Erreur lors de l'ajout du commentaire",
					date_from_invalid: "La date de début n'est pas valide",
					date_to_invalid: "La date de fin n'est pas valide",
					email_invalid: "L'e-mail n'est pas valide",
					email_taken: "E-mail déjà pris",
					email_verified: "E-mail vérifié",
					email_password_sent: "E-mail de modification de mot de passe envoyé",
					email_verification_sent: "E-mail de vérification envoyé",
					email_contact_sent: "Votre message a été envoyé",
					email_contact_error: "Une erreur est survenue dans la prise en compte de votre message, veuillez contacter directement : ",
					event_add: "Vous ne trouvez pas une épreuve ? <a href='/event/update' class='alert-link'>Ajoutez-la</a> !",
					event_update_add: "Votre proposition d'ajout d'événement à été transmise",
					event_covid19: "En raison du COVID-19 plusieurs épreuves ont étés annulés ou décalées, veuillez vérifier les dates sur leurs sites officiels",
					event_giveup: "Événement abandonné",
					event_inexistent: "Cet évènement n'existe pas, vous ne pouvez pas le modifier",
					event_name_used: "Ce nom d'évènement est déjà utilisé",
					event_update_edit: "Votre proposition de modificaition d'événement à été transmise",
					event_updated: "Événement modifié",
					event_validate_update: "Vous pouvez <a href='/event/update' class='alert-link'>valider</a> une modification effectuée par un autre utilisateur",
					field_error: "Les champs suivants sont obligatoires : (Onglet - Champ)",
					first_name_invalid: "Le prénom n'est pas valide",
					last_name_invalid: "Le nom de famille n'est pas valide",
					link_invalid: "Le lien est invalide",
					link_verification_expired: "Le lien a expiré veuillez redemander un mail de vérification",
					mail_error: "Une erreur est survenu lors de l'envoi du mail",
					password_invalid: "Le mot de passe n'est pas valide",
					password_updated: "Mot de passe modifié",
					password_wrong: "Mauvais mot de passe",
					profile_updated: "Profil modifié",
					restriction_administrator: "Vous n'êtes pas administrateur",
					restriction_authenticated: "Vous devez vous connecter pour accéder à cette page",
					restriction_unverified: "Vous devez vérifier votre e-mail pour accéder à cette page",
					restriction_unverified_contact: "Vous devez avoir un compte vérifié pour envoyer une demande de contact",
					review_absent: "La mise à jour n'éxiste pas",
					review_allready_handled: "La mise à jour à déjà été traité",
					review_handled: "La mise à jour à été traité",
					search_max: "La recherche à retourné plus de 500 résultats, veuillez affiner vos critères de recherches",
					social_network_inexisten: "Aucun lien social pour le moment",
					user_connected: "Connecté",
					user_created: "Utilisateur créer, un e-mail vous a été envoyé pour le vérifier",
					user_inexistent: "L'utilisateur n'existe pas"
				}
			}
		}
	}
}
</script>

<style scoped>
button {
	border: none;
	outline: none;
	text-decoration: unset;
}
</style>
