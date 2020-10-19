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
					<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/5yx6BWlEVcY" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		</Bloc> -->

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
							<li>Accéder Gérer vos informations sur le moteur de recherche R4ce</li>
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
							Tarification <span class="text-uppercase font-weight-bold">unique</span> est <span class="text-uppercase font-weight-bold">claire</span>. <br />L'inscription est gratuite, R4ce se rémunère en prélevant une commission sur les inscriptions.
							<!-- <small class="form-text text-muted">Les frais bancaires sont fixés par <a href="https://stripe.com/fr/pricing" target="_blank">Stripe</a> : 1,4% + 0,25€</small>
							<small class="form-text text-muted">La commission R4ce : 5%</small> -->
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
						<p>
							Me tenir informé lors de l'ouverture du service.
						</p>
						<br />
						<form @submit="contact">
							<div class="form-group">
								<Label for="name" text="name" required />
								<input id="name" type="text" class="form-control" v-model="name" required />
							</div>
							<div class="form-group">
								<Label for="email" text="email" required />
								<input id="email" type="email" class="form-control" v-model="email" required />
							</div>
							<div class="form-group">
								<Label for="comment" text="comment" required />
								<textarea id="comment" rows="5" class="form-control" v-model="comment" required />
							</div>
							<br />
							<br />
							<div class="text-center">
								<button type="submit" class="btn btn-primary" :disabled="loading">
									<Spinner v-if="loading" />
									{{ $t("button.send") }}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Bloc>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import Button from "@/components/Label"
import Layout from "@/components/Layout"
import axios from "@/plugins/axios"
import { VueTyper } from "vue-typer"
import Spinner from "@/components/Spinner"

export default {
	name: "EventLanding",
	route: {
		name: "event_landing",
		path: "event"
	},
	components: { Bloc, Button, Layout, Label, VueTyper, Spinner },
	data: () => ({
		loading: false,
		price: 25,
		name: null,
		email: null,
		comment: null
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
	padding: 100px 0 !important;
}
</style>
