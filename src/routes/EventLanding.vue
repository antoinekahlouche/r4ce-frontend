<template>
	<Layout>
		<Bloc class="bloc">
			<div class="container-fluid">
				<div class="row no-gutters align-items-center">
					<div class="col-12 col-lg-6 text-center">
						<div class="brand my-5">R4CE</div>
						<VueTyper class="h2" text="Organiser votre évènement sportif facilement !" :pre-erase-delay="5000" :erase-delay="1000" caret-animation="smooth" />
						<br />
						<a href="#contact" class="btn btn-primary btn-lg my-5">Je suis intéressé</a>
					</div>
					<div class="col-12 col-lg-6 p-3 text-center">
						<img class="img-fluid" src="@/assets/finish_line.svg" />
					</div>
				</div>
			</div>
		</Bloc>

		<!-- <Bloc class="bg-dark bloc">
			<div class="m-auto" style="max-width:800px;">
				<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/..." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		</Bloc> -->

		<Bloc class="bloc bg-light">
			<div class="container-fluid">
				<div class="row no-gutters align-items-center">
					<div class="col-12 col-lg-6 mx-auto">
						<h2 class="text-center">R4CE : Qu'es ce que c'est ?</h2>
						<br />
						<p>R4CE facilite et améliore l'<b>accès aux évènements sportifs amateurs</b>.</p>
						<p>
							R4CE est avant tout un moteur de recherche d'évènements sportifs amateurs.
							<br />
							Pour cela R4CE répertorie et met en avant ces évènements.
						</p>
						<p>
							R4CE met en place des services à destination des organisateur de ces évènements (Cf. bloc suivant).
							<br />
							...
						</p>
						<p>
							Le projet est en constante évolution et vous pouvez nous faire part de vos idées / requettes / etc ... via le formulaire de
							<a href="#contact">contact</a>.
						</p>
						<br />
					</div>
				</div>
			</div>
		</Bloc>

		<Bloc class="bloc">
			<div class="container-fluid">
				<div class="row no-gutters align-items-center">
					<div class="col-12 col-lg-6 p-3 text-center">
						<img class="img-fluid" style="width:70%;" src="@/assets/to_do_list.svg" />
					</div>
					<div class="col-12 col-lg-6">
						<h2 class="text-center">Services</h2>
						<br />
						<h4>Inscriptions en ligne</h4>
						<ul>
							<li>Payement sécurisé<br />La gestion bancaire est assuré par Stripe</li>
							<li>Configurer l'insciptions avec les informations que vous souhaitez</li>
							<li>Virement hebdomadaire</li>
							<li>Exporter la liste des inscrits à tous moment</li>
							<li>Choisir de receptionner chaque inscription sur une boite mail spécifique</li>
							<li>Permettre de s'inscrire et payer sur place pour évider les frais</li>
						</ul>

						<h4>Visibilité de l'évènement</h4>
						<ul>
							<li>Accéder Gérer vos informations sur le moteur de recherche R4CE</li>
							<li>Statistiques de fréquentation de l'épreuve</li>
						</ul>
					</div>
				</div>
			</div>
		</Bloc>

		<Bloc class="bloc">
			<div class="container-fluid">
				<div class="row no-gutters align-items-center">
					<div class="col-12 col-lg-6 p-3 text-center">
						<img class="img-fluid" style="width:70%;" src="@/assets/calculator.svg" />
					</div>
					<div class="col-12 col-lg-6">
						<h2 class="text-center">Tarif</h2>
						<br />
						<p>
							Tarification <span class="text-uppercase font-weight-bold">unique</span> est <span class="text-uppercase font-weight-bold">claire</span>. <br />L'inscription est gratuite, R4CE se rémunère en prélevant une commission sur les inscriptions.
							<!-- <small class="form-text text-muted">Les frais bancaires sont fixés par <a href="https://stripe.com/fr/pricing" target="_blank">Stripe</a> : 1,4% + 0,25€</small>
							<small class="form-text text-muted">La commission R4CE : 5%</small> -->
						</p>
						<br />
						<div class="form-group row">
							<Label text="apply_price" for="price" class="col-sm-8 col-form-label" />
							<div class="col-sm-4 input-group">
								<input type="number" class="form-control" id="price" v-model="price" />
								<div class="input-group-append">
									<div class="input-group-text">€</div>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<Label text="fee_stripe" class="col-sm-8 col-form-label" />
							<div class="col-sm-4 input-group">
								<input type="number" class="form-control" readonly v-model="stripeFee" />
								<div class="input-group-append">
									<div class="input-group-text">€</div>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<Label text="fee_r4ce" class="col-sm-8 col-form-label" />
							<div class="col-sm-4 input-group">
								<input type="number" class="form-control" readonly v-model="r4ceFee" />
								<div class="input-group-append">
									<div class="input-group-text">€</div>
								</div>
							</div>
						</div>
						<div class="form-group row">
							<Label text="total_collected" class="col-sm-8 col-form-label" />
							<div class="col-sm-4 input-group">
								<input type="number" class="form-control font-weight-bold" readonly v-model="total" />
								<div class="input-group-append">
									<div class="input-group-text">€</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Bloc>

		<Bloc id="contact" class="bloc">
			<div class="container-fluid">
				<div class="row no-gutters align-items-center">
					<div class="col-12 col-lg-6 p-3 text-center">
						<img class="img-fluid" style="width:70%;" src="@/assets/mail_sent.svg" />
					</div>
					<div class="col-12 col-lg-6">
						<h2 class="text-center">Contact</h2>
						<br />
						<br />
						<form @submit="contact">
							<div class="form-group">
								<Label for="name" text="name" required />
								<input id="name" type="text" class="form-control" v-model="name" required :disabled="$store.state.user.signedIn" />
							</div>
							<div class="form-group">
								<Label for="email" text="email" required />
								<input id="email" type="email" class="form-control" v-model="email" required :disabled="$store.state.user.signedIn" />
							</div>
							<div class="form-group">
								<Label for="comment" text="comment" required />
								<textarea id="comment" rows="5" class="form-control" v-model="comment" required />
							</div>
							<br />
							<br />
							<div class="text-center">
								<button type="submit" class="btn btn-primary" :disabled="loading">
									<Icon v-if="loading" class="mr-2" icon="spinner" pulse />
									{{ $t("button.send") }}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Bloc>
	</Layout>
	<!-- 
GRATUIT Visibilité de vos courses dans notre moteur de recherche
GRATUIT SEO de votre evènement pour une meilleur visibilité sur Google
GRATUIT Diffusez votre projet ; Partagez la page de votre projet à vos contacts et sur les réseaux sociaux. Vous pouvez aussi directement l’intégrer sur votre site.
GRATUIT Formulaire d'inscription 100% personnalisable
GRATUIT Options illimitées
GRATUIT Pré-inscription (pas de paiement en ligne)
GRATUIT Inscriptions gratuites
GRATUIT Reverse mensuel des fonds collectés
GRATUIT Inscriptions saisies ou importées
GRATUIT Statistiques sur mesure detaillées
GRATUIT Accés Back Office illimité
GRATUIT Export de données illimité
Montant de la commission :


R4CE accompagne l'ensemble des organisateurs d'événements sportifs jusqu’à la ligne de départ.
Avec ses applications web & mobile, R4CE vous propose de gérer l'inscription en ligne de vos participants et de nombreux services annexes : retrait des dossards, covoiturage…
Que vous soyez des professionnels du sport ou des bénévoles passionnés, notre application s’adapte à tous et permet de répondre à des besoins aussi simples que complexes

Pour maîtriser chaque étape avant le jour j...
De la construction de votre formulaire en ligne sur mesure, à la collecte et la gestion de vos inscriptions
en un clin d’oeil, en passant par le contrôle de vos finances, ou encore le retrait des dossards digitalisé
avec son application dédiée… Nous vous accompagnons jusqu’à la ligne de départ en toute sérénité
Creation Inscriptions Finances Retrait de dossards


Ils en parlent ...



Créez votre compte
Inscrivez votre association gratuitement et en quelques clics. Accédez ensuite à l’espace de votre association.
Lancez votre projet
Créez une billetterie, un formulaire d’adhésion, un appel au don. Le tout facilement et sans connaissances particulières en informatique.
Diffusez votre projet
Partagez la page de votre projet à vos contacts et sur les réseaux sociaux. Vous pouvez aussi directement l’intégrer sur votre site.
Collectez des paiements
Recevez des paiements en ligne et financez vos activités. HelloAsso vous verse chaque € collecté sur votre compte bancaire, tous les mois ou à la demande.


Aucune connaissance technique nécessaire
Pas besoin d’être informaticien, ni graphiste, chacun peut lancer simplement et en quelques minutes les formulaires de paiement pour son association.

Une équipe qui vous accompagne
Besoin d’une réponse ou d’un conseil ? Notre équipe est là pour vous accompagner par e-mail. Nous traitons les demandes rapidement.


Remboursement des coureurs
Une blessure, ca peut arriver. Vous pouvez rembourser le sportif en un clic





1. Pourquoi choisir R4CE ?
C'est gratuit
En tant qu'organisateur, vous utilisez tous nos services gratuitement

Vous n'êtes jamais seuls
Nous sommes à votre disposition par téléphone ou par email




4. Exploitez vos données
Statistiques par date
Visualiser l'évolution des inscriptions

Comparatif des inscriptions
En avance ? en retard ? vous pouvez comparer vos données d'année en année

Statistiques géographiques
Visualisez sur une carte d'où viennent vos inscrits

5. Ma course approche !
Mail d'informations
Envoyez un mail en un clic à tous vos inscrits

Numérotez...puis imprimez
Nous vous fournissons des fiches par ordre alphabétique ou par numéro de dossards

Dossards par SMS
C'est nouveau, vous pouvez envoyer les numéros de dossards par SMS aux sportifs




1. S'inscrire
2. Se déclarer comme responsable de l'évènement
3. Creation du formulaire d'inscription
4. Collectez les inscriptions
	 -->
</template>

<script>
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import Button from "@/components/Label"
import Layout from "@/components/Layout"
import axios from "@/plugins/axios"
import { VueTyper } from "vue-typer"

export default {
	name: "EventLanding",
	route: {
		name: "event_landing",
		path: "event"
	},
	components: { Bloc, Button, Layout, Label, VueTyper },
	data: () => ({
		loading: false,
		price: 25,
		name: null,
		email: null,
		comment: "Tennez-moi informé de l'ouverture du service."
	}),
	computed: {
		stripeFee() {
			return this.round(this.price * 0.014 + 0.25)
		},
		r4ceFee() {
			return this.round(this.price * 0.05)
		},
		total() {
			return this.round(this.price - this.stripeFee - this.r4ceFee)
		}
	},
	mounted() {
		if (this.$store.state.user.signedIn) {
			this.name = this.$store.state.user.firstName + " " + this.$store.state.user.lastName
			this.email = this.$store.state.user.email
		}
	},
	methods: {
		round(value) {
			return Math.round(value * 100) / 100
		},
		async contact(event) {
			event.preventDefault()
			this.loading = true

			const response = await axios.post("/contact", {
				name: this.name,
				email: this.email,
				locale: this.$i18n.locale.toUpperCase(),
				comment: this.comment
			})

			if (!response) {
				this.$store.dispatch("alert/open", { type: "error", message: "email_contact_error", details: process.env.VUE_APP_EMAIL_CONTACT })
				return
			}

			this.$store.dispatch("alert/open", { type: "success", message: "email_contact_sent" })
			this.name = null
			this.email = null
			this.comment = null
			this.loading = false
		}
	}
}
</script>

<style scoped>
.brand {
	line-height: 5rem;
	letter-spacing: 0.2rem;
	font-size: 6rem;
	font-family: "Lilita One";
}

.bloc {
	padding-top: 100px !important;
	padding-bottom: 100px !important;
}
</style>
