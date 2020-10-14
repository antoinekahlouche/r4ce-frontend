<template>
	<Layout>
		<Bloc>
			<div class="container-fluid">
				<div class="row no-gutters align-items-center">
					<div class="col-12 col-lg-6 text-center">
						<div class="brand mt-5">R4CE</div>
						<div class="h2 my-5">Organiser votre évènement sportif facilement</div>
						<router-link class="btn btn-primary btn-lg mb-5" to="/event/search">Rechercher mon évènement</router-link>
					</div>
					<div class="col-12 col-lg-6 p-3 text-center">
						<img class="img-fluid" src="@/assets/undraw_finish_line_katerina_limpitsouni_xy20.svg" />
					</div>
				</div>
			</div>
		</Bloc>

		<Bloc noPadding style="background:#212121;">
			<div class="m-auto" style="max-width:800px;">
				<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/5yx6BWlEVcY" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		</Bloc>

		<div class="card-deck">
			<div class="card bg-light">
				<div class="card-body">
					<h5 class="card-title">
						<b>Etape 1</b><br />
						Rechercher votre évènement
					</h5>
					<p class="card-text"></p>
				</div>
			</div>
			<div class="card bg-light">
				<div class="card-body">
					<h5 class="card-title">
						<b>Etape 2</b><br />
						Revendiquer votre évènement
					</h5>
					<p class="card-text">Des informations vous serront demander pour éviter toute fraude.</p>
				</div>
			</div>
			<div class="card bg-light">
				<div class="card-body">
					<h5 class="card-title">
						<b>Etape 3</b><br />
						Personnaliser l'inscription
					</h5>
					<p class="card-text">Indiquer les informations nécessaire à l'inscription de chaqune de vos course.</p>
				</div>
			</div>
		</div>
		<br />

		<Bloc>
			<div class="container-fluid">
				<div class="row no-gutters align-items-center">
					<div class="col-12 col-lg-6 p-3 text-center">
						<img class="img-fluid" style="width:70%;" src="@/assets/undraw_To_do_list_re_9nt7.svg" />
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

		<Bloc>
			<div class="container-fluid">
				<div class="row no-gutters align-items-center">
					<div class="col-12 col-lg-6 p-3 text-center">
						<img class="img-fluid" style="width:70%;" src="@/assets/undraw_Calculator_0evy.svg" />
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

		<div class="text-center">
			<router-link class="btn btn-primary btn-lg my-5" to="/event/search">Rechercher mon évènement</router-link>
		</div>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import Button from "@/components/Label"
import Layout from "@/components/Layout"

export default {
	name: "EventLanding",
	route: {
		name: "event_landing",
		path: "event"
	},
	components: { Bloc, Button, Layout, Label },
	data: () => ({
		price: 25
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
</style>
