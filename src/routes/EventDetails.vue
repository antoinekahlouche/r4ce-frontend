<template>
	<Global :title="event ? event.name : null" :translateTitle="false" :loading="loading">
		<ListMenu v-if="event && comments">
			<template #races>
				<div class="card-columns">
					<div class="card" v-for="race in event.races" :key="race._id">
						<div class="card-body">
							<div>
								<span class="font-weight-bold">{{ $t("label.sport") }} : </span>{{ $t("sport." + race.sport) }}<br />
								<span class="font-weight-bold">{{ $t("label.discipline") }} : </span>{{ $t("discipline." + race.discipline) }}<br />
								<span class="font-weight-bold">{{ $t("label.distance") }} : </span>{{ $t("distance." + race.distance) }}<br />
								<span class="font-weight-bold">{{ $t("label.format") }} : </span>{{ $t("format." + race.format) }}<br />
								<span class="font-weight-bold">{{ $t("label.date") }} : </span>{{ moment.display(race.date) }}<br />

								<div v-if="race.time">
									<span class="font-weight-bold">{{ $t("text.time") }} : </span>{{ race.time }}<br />
								</div>
								<div v-if="race.price">
									<span class="font-weight-bold">{{ $t("text.price") }} : </span>{{ race.price }}<br />
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>

			<template #comments>
				<div v-if="!$store.state.user.signedIn" class="alert alert-primary" role="alert">
					{{ $t("alert.restriction_comments") }}<router-link :to="'/signin?redirect=' + $route.fullPath" class="alert-link">{{ $t("text.connect") }}</router-link>
				</div>

				<div class="card-columns">
					<div class="card text-white bg-primary">
						<div class="card-header">{{ $t("text.average") }} - {{ $tc("text.answer", comments.length) }}</div>
						<div class="card-body text-center p-0 pb-3">
							<span class="font-weight-bold rating">{{ rating || "?" }}</span> / 5
						</div>
					</div>
					<div v-for="comment in comments" :key="comment._id" class="card">
						<div class="card-body py-1">
							<div class="card-title row m-0">
								<div class="col-auto">
									<div class="username">
										<Avataaars style="width:10rem;" class="mb-3" :id="comment.userAvatar" />
									</div>
								</div>
								<div class="col m-auto">
									<div class="font-weight-bold">{{ comment.userName }}</div>
									<small class="text-muted">
										{{ comment.race }}
										<span v-if="comment.year">- {{ comment.year }}</span>
										<span v-if="comment.time">- {{ comment.time }}</span>
									</small>
									<br />
									<small class="text-muted">
										<StarRating v-model="comment.rating" inactive-color="#EEEEEE" active-color="#FFC107" :border-width="3" border-color="#EEEEEE" active-border-color="#FFB300" :show-rating="false" :star-size="15" rounded-corners readOnly></StarRating>
									</small>
								</div>
							</div>
							<p v-if="comment.message" class="card-text py-3">{{ comment.message }}</p>
						</div>
					</div>
				</div>

				<div v-if="$store.state.user.signedIn">
					<form @submit="submit">
						<br />
						<div class="border p-4 rounded-lg bg-light">
							<div class="form-row">
								<div class="form-group col-12 col-md-12">
									<Label for="race" text="race" required />
									<input type="text" class="form-control" name="race" v-model="comment.race" required />
								</div>
								<div class="form-group col-12 col-md-4">
									<Label for="rating" text="rating" required />
									<div class="h2 rate text-center d-flex justify-content-center">
										<StarRating v-model="comment.rating" inactive-color="#EEEEEE" active-color="#FFC107" :border-width="3" border-color="#EEEEEE" active-border-color="#FFB300" :show-rating="false" :star-size="30" rounded-corners></StarRating>
									</div>
								</div>
								<div class="form-group col-12 col-md-4">
									<Label for="year" text="year" />
									<input type="number" class="form-control" name="year" placeholder="aaaa" v-model="comment.year" />
								</div>
								<div class="form-group col-12 col-md-4">
									<Label for="time" text="duration" />
									<input type="text" class="form-control" name="time" placeholder="hh:mm:ss" v-model="comment.time" />
								</div>
							</div>
							<div class="form-group">
								<Label for="message" text="comment" />
								<textarea name="message" class="form-control" rows="5" v-model="comment.comment"></textarea>
							</div>
						</div>
						<br />
						<div class="text-center">
							<button type="submit" class="btn btn-success" :disabled="loadingSubmit">
								<Spinner v-if="loadingSubmit" />
								{{ $t("button.send") }}
							</button>
						</div>
					</form>
				</div>
			</template>

			<!-- <template #map></template> -->

			<template #contact>
				<Bloc>
					<dl class="row">
						<dt v-if="event.promoter" class="col-sm-4 text-sm-right">{{ $t("label.promoter") }} :</dt>
						<dd v-if="event.promoter" class="col-sm-8">{{ event.promoter }}</dd>

						<dt class="col-sm-4 text-sm-right">{{ $t("label.website") }} :</dt>
						<dd class="col-sm-8">
							<a target="_blank" :href="event.website">{{ event.website }}</a>
						</dd>

						<dt v-if="event.email" class="col-sm-4 text-sm-right">{{ $t("label.email") }} :</dt>
						<dd v-if="event.email" class="col-sm-8">{{ event.email }}</dd>

						<dt v-if="event.address" class="col-sm-4 text-sm-right">{{ $t("label.address") }} :</dt>
						<dd v-if="event.address" class="col-sm-8">{{ event.address }}</dd>

						<dt v-if="event.facebook || event.instagram || event.strava || event.twitter || event.youtube" class="col-sm-4 text-sm-right">{{ $t("label.social_network") }} :</dt>
						<dd v-if="event.facebook || event.instagram || event.strava || event.twitter || event.youtube" class="col-sm-8">
							<div v-if="event.facebook">
								<a :href="event.facebook" role="button" class="my-2 mr-2 btn text-light facebook">{{ $t("text.facebook") }}</a>
								<br />
							</div>
							<div v-if="event.instagram">
								<a :href="event.instagram" role="button" class="my-2 mr-2 btn text-light instagram">{{ $t("text.instagre") }}</a>
								<br />
							</div>
							<div v-if="event.strava">
								<a :href="event.strava" role="button" class="my-2 mr-2 btn text-light strava">{{ $t("text.strava") }}</a>
								<br />
							</div>
							<div v-if="event.twitter">
								<a :href="event.twitter" role="button" class="my-2 mr-2 btn text-light twitter">{{ $t("text.twitter") }}</a>
								<br />
							</div>
							<div v-if="event.youtube">
								<a :href="event.youtube" role="button" class="my-2 btn text-light youtube">{{ $t("text.youtube") }}</a>
								<br />
							</div>
						</dd>
					</dl>
				</Bloc>
			</template>
		</ListMenu>
		<div v-if="event && !event.admin" class="row mt-3">
			<div class="col text-right">
				<router-link :to="'/event/claim/' + event.permalink">{{ $t("text.event_admin") }}</router-link>
				<br />
				<router-link :to="'/event/update/' + event.permalink">{{ $t("title.event_update") }}</router-link>
			</div>
		</div>
	</Global>
</template>

<script>
import Avataaars from "@/components/Avataaars"
import Bloc from "@/components/Bloc"
import ListMenu from "@/components/ListMenu"
import Global from "@/components/Layout"
import moment from "@/plugins/moment"
import axios from "@/plugins/axios"
import Label from "@/components/Label"
import StarRating from "vue-star-rating"
import Spinner from "@/components/Spinner"

const initialComment = {
	race: null,
	rating: 5,
	year: null,
	time: null,
	comment: null
}

export default {
	name: "EventDetails",
	route: {
		name: "event_details",
		path: "event/details/:permalink"
	},
	components: { Avataaars, Bloc, Label, ListMenu, StarRating, Global, Spinner },
	data: () => ({
		moment,
		loading: true,
		loadingSubmit: false,
		event: null,
		comments: null,
		rating: null,
		comment: { ...initialComment }
	}),
	async mounted() {
		const permalink = this.$route.params.permalink

		const responseEvent = await axios.get("/event", { params: { permalink } })
		if (!responseEvent.data?.event) return this.$router.push("/error?code=404")
		this.event = responseEvent.data.event

		const responseComments = await axios.get("/commentsevent", { params: { eventId: this.event._id } })
		this.comments = responseComments.data.comments.sort()
		this.updateRating()

		document.title = process.env.VUE_APP_PAGE_PREFIX + " - " + this.event.name
		this.loading = false
	},
	methods: {
		async submit() {
			event.preventDefault()
			this.loadingSubmit = true

			const response = await axios.post("/comment", { eventId: this.event._id, ...this.comment })
			if (!response.data?.comment) {
				this.$store.dispatch("alert/open", { type: "danger", message: "comment_error" })
				this.loadingSubmit = false
				return
			}

			this.comment = { ...initialComment }
			this.comments.unshift(response.data.comment)
			this.$store.dispatch("alert/open", { type: "success", message: "comment_added" })
			this.updateRating()

			this.loadingSubmit = false
			return
		},
		updateRating() {
			const ratingSum = this.comments.reduce((accumulator, comment) => accumulator + comment.rating, 0)
			const ratingAvg = ratingSum / this.comments.length
			const ratingRnd = Math.round(ratingAvg * 100) / 100
			this.rating = ratingRnd
		}
	}
}
</script>

<style scoped>
.rating {
	font-size: 5rem;
}
</style>
