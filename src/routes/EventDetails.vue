<template>
	<Layout
		icon="calendar-day"
		:title="event ? event.name : ''"
		:translateTitle="false"
		:loading="loading"
		:links="[
			{ name: 'search', link: '/event/search' },
			{ name: 'map', link: '/event/map?' + this.$store.getters['search/query'] }
		]"
	>
		<ListMenu v-if="event && comments">
			<template #races>
				<div class="card-columns">
					<div class="card" v-for="race in event.races" :key="race._id">
						<div class="card-body">
							<Label text="sport" condensed /> : {{ $t("sport." + race.sport) }}<br />
							<Label text="discipline" condensed /> : {{ $t("discipline." + race.discipline) }}<br />
							<Label text="distance" condensed /> : {{ $t("distance." + race.distance) }}<br />
							<Label text="format" condensed /> : {{ $t("format." + race.format) }}<br />
							<Label text="date" condensed /> : {{ moment.display(race.date) }}
							<span v-if="race.time"><br /><Label text="time" condensed /> : {{ race.time }}</span>
							<span v-if="race.price"><br /><Label text="price" condensed /> : {{ race.price }}</span>
						</div>
					</div>
				</div>
			</template>

			<template #comments>
				<div v-if="!$store.state.user.signedIn" class="alert alert-primary" role="alert">
					{{ $t("text.restriction_comments") }}<router-link :to="'/signin?redirect=' + $route.fullPath" class="alert-link">{{ $t("text.connect") }}</router-link>
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
							<button type="submit" class="btn btn-primary" :disabled="loadingSubmit">
								<Icon v-if="loadingSubmit" class="mr-2" icon="spinner" pulse />
								{{ $t("button.send") }}
							</button>
						</div>
					</form>
				</div>
			</template>

			<!-- <template #map></template> -->

			<template #contact>
				<Bloc>
					<span v-if="event.promoter"><Label text="promoter" /> : {{ event.promoter }}</span>
					<Label text="website" /> : <a target="_blank" :href="event.website">{{ event.website }}</a>
					<span v-if="event.email"><Label text="email" /> : {{ event.email }}</span>
					<span v-if="event.address"><Label text="address" /> : {{ event.address }}</span>

					<span v-if="event.facebook || event.instagram || event.strava || event.twitter || event.youtube">
						<Label text="social_network" /> :
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
					</span>
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
	</Layout>
</template>

<script>
import Avataaars from "@/components/Avataaars"
import Bloc from "@/components/Bloc"
import ListMenu from "@/components/ListMenu"
import Layout from "@/components/Layout"
import moment from "@/plugins/moment"
import axios from "@/plugins/axios"
import Label from "@/components/Label"
import StarRating from "vue-star-rating"

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
	components: { Avataaars, Bloc, Label, ListMenu, StarRating, Layout },
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
		if (!responseEvent || !responseEvent.data?.event) return this.$router.push("/error?code=404")
		this.event = responseEvent.data.event
		document.title = process.env.VUE_APP_PAGE_PREFIX + " - " + this.event.name

		const responseComments = await axios.get("/commentsevent", { params: { eventId: this.event._id } })
		if (responseComments) {
			this.comments = responseComments.data.comments.sort()
			this.updateRating()
		}

		this.loading = false
	},
	methods: {
		async submit() {
			event.preventDefault()
			this.loadingSubmit = true

			const response = await axios.post("/comment", { eventId: this.event._id, ...this.comment })
			if (!response) {
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
