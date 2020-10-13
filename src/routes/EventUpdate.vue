<template>
	<Global :title="isAdd ? 'event_add' : 'event_update'" :loading="loading">
		<ListMenu>
			<template #event>
				<Bloc>
					<div class="form-group">
						<Label text="name" required />
						<input type="text" class="form-control" v-model="event.name" required @change="updatePermalink()" />
						<input id="eventPermalinkInput" type="hidden" class="form-control" v-model="event.permalink" required />
						<small class="form-text text-muted">
							{{ frontendUrl }}event/detail/<b>{{ event.permalink ? event.permalink : "..." }}</b>
						</small>
					</div>
					<div class="form-group">
						<Label text="promoter" />
						<input type="text" class="form-control" v-model="event.promoter" />
					</div>
					<div class="form-group">
						<Label text="website" required />
						<input type="text" class="form-control" v-model="event.website" required />
					</div>
					<div class="form-group">
						<Label text="email" />
						<input type="email" class="form-control" v-model="event.email" />
					</div>
					<div class="form-group">
						<Label text="country" required />
						<select class="form-control" v-model="event.country" required>
							<option value="FR">{{ $t("country.FR") }}</option>
						</select>
					</div>
					<div class="form-group">
						<Label text="address" />
						<input type="text" class="form-control" v-model="event.address" />
					</div>
					<div class="form-group">
						<Label text="facebook" />
						<input type="text" class="form-control" v-model="event.facebook" />
					</div>
					<div class="form-group">
						<Label text="instagram" />
						<input type="text" class="form-control" v-model="event.instagram" />
					</div>
					<div class="form-group">
						<Label text="strava" />
						<input type="text" class="form-control" v-model="event.strava" />
					</div>
					<div class="form-group">
						<Label text="twitter" />
						<input type="text" class="form-control" v-model="event.twitter" />
					</div>
					<div class="form-group">
						<Label text="youtube" />
						<input type="text" class="form-control" v-model="event.youtube" />
					</div>
				</Bloc>
			</template>
			<template #location>
				<Bloc noPadding>
					<div id="map" class="rounded-lg" />
					<div id="pin" class="position-absolute" />
				</Bloc>

				<div class="text-right">
					<button type="button" class="btn btn-secondary" @click="resetCenter()">{{ $t("button.reset") }}</button>
				</div>
			</template>
			<template #races>
				<div>
					<Bloc v-for="(race, index) in event.races" :key="index">
						<div class="form-group">
							<Label text="date" required />
							<input type="date" class="form-control" v-model="event.races[index].date" required />
						</div>
						<div class="form-group">
							<Label text="time" />
							<input type="time" class="form-control" v-model="event.races[index].time" />
						</div>
						<div class="form-group">
							<Label text="sport" required />
							<select name="sport" class="form-control" v-model="event.races[index].sport">
								<option v-for="sport in eventHelper.sport()" :key="sport" :value="sport">{{ $t("sport." + sport) }}</option>
							</select>
						</div>
						<div class="form-group">
							<Label text="discipline" required />
							<select name="discipline" class="form-control" :disabled="!event.races[index].sport" v-model="event.races[index].discipline">
								<option v-for="discipline in eventHelper.discipline(event.races[index].sport)" :key="discipline" :value="discipline">{{ $t("discipline." + discipline) }}</option>
							</select>
						</div>
						<div class="form-group">
							<Label text="distance" required />
							<select name="distance" class="form-control" :disabled="!event.races[index].sport" v-model="event.races[index].distance">
								<option v-for="distance in eventHelper.distance(event.races[index].sport)" :key="distance" :value="distance">{{ $t("distance." + distance) }}</option>
							</select>
						</div>
						<div class="form-group">
							<Label text="format" required />
							<select name="format" class="form-control" v-model="event.races[index].format">
								<option v-for="format in eventHelper.format()" :key="format" :value="format">{{ $t("format." + format) }}</option>
							</select>
						</div>
						<br />
						<div class="text-right">
							<button type="button" class="btn btn-danger" @click="deleteRace(index)">{{ $t("button.delete") }}</button>
						</div>
					</Bloc>

					<div class="text-right">
						<button type="button" class="btn btn-success" @click="addRace()">{{ $t("button.add_race") }}</button>
					</div>
				</div>
			</template>
			<template #recap>
				<form @submit="submit">
					<Bloc>
						<div class="form-group custom-control custom-checkbox">
							<input type="checkbox" id="valid_info" class="custom-control-input" required />
							<Label class="custom-control-label" text="valid_info" for="valid_info" required />
						</div>
						<div v-if="isAdd" class="form-group custom-control custom-checkbox">
							<input type="checkbox" id="event_allready_present" class="custom-control-input" required />
							<Label class="custom-control-label" text="event_allready_present" for="event_allready_present" required />
						</div>
					</Bloc>
					<div class="text-center">
						<button type="button" class="btn btn-secondary mr-2">{{ $t("button.cancel") }}</button>
						<button type="submit" class="btn btn-success" :disabled="loadingSubmit">
							<Spinner v-if="loadingSubmit" />
							{{ $t("button." + (isAdd ? "confirm_add" : "confirm_edit")) }}
						</button>
					</div>
				</form>
			</template>
		</ListMenu>
	</Global>
</template>

<script>
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import ListMenu from "@/components/ListMenu"
import Global from "@/components/Layout"
import mapHelper from "@/helpers/map"
import eventHelper from "@/helpers/event"
import axios from "@/plugins/axios"
import Spinner from "@/components/Spinner"
import moment from "@/plugins/moment"

export default {
	name: "EventUpdate",
	route: {
		name: "event_update",
		path: "event/update/:permalink?",
		meta: { isSignedIn: true, isVerified: true }
	},
	components: { Bloc, Label, ListMenu, Map, Global, Spinner },
	data: () => ({
		loading: true,
		loadingSubmit: false,
		event: {},
		eventHelper,
		map: null,
		initialCenter: null
	}),
	computed: {
		isAdd() {
			return !this.$route.params.permalink
		},
		frontendUrl: () => process.env.VUE_APP_FRONTEND_URL
	},
	async mounted() {
		this.map = mapHelper.create("map", this.event.coordinates, this.isAdd ? 5 : 11)
		const that = this
		$("#ListMenu_menu_location").on("shown.bs.tab", () => {
			that.map.resize()
		})
		this.map.on("moveend", () => {
			this.event.coordinates = { lng: this.map.getCenter().lng, lat: this.map.getCenter().lat }
		})

		if (!this.isAdd) {
			const response = await axios.get("/event", { params: { permalink: this.$route.params.permalink } })
			if (!response.data?.event) return this.$router.push("/error?code=404")
			const event = response.data.event
			this.initialCenter = { lng: event.coordinates[0], lat: event.coordinates[1] }

			for (const race of event.races) {
				race.date = moment(race.date).format()
			}

			this.event = event
			this.resetCenter()
		}

		this.loading = false
	},
	methods: {
		async submit(event) {
			event.preventDefault()
			this.loadingSubmit = true

			const invalid = []

			const requiredEventField = ["name", "website", "country"]
			for (const field of requiredEventField) {
				if (!this.event[field]) invalid.push({ tab: "event", field })
			}

			if (!this.event.coordinates) invalid.push({ tab: "location", field: "coordinates" })

			if (!this.event.races || this.event.races.length === 0) {
				invalid.push({ tab: "races", field: "races" })
			} else {
				const requiredRaceField = ["date", "sport", "discipline", "distance", "format"]
				for (const race of this.event.races) {
					for (const field of requiredRaceField) {
						if (!race[field]) invalid.push({ tab: "race", field })
					}
				}
			}

			if (invalid.length !== 0) {
				let details = "<ul class='m-0'>"
				for (const entry of invalid) {
					const field = entry.field === "races" ? "text.race_absent" : "label." + entry.field
					details += "<li>"
					details += this.$t("title." + entry.tab)
					details += " - "
					details += this.$t(field)
					details += "</li>"
				}
				details += "</ul>"
				this.$store.dispatch("alert/open", { type: "warning", message: "field_error", details, displayPage: this.$route.name })
			} else {
				const response = await axios.post(this.isAdd ? "/eventadd" : "/eventedit", {
					event: this.event
				})

				if (response.data?.alert) {
					this.$store.dispatch("alert/open", { type: response.data.alert.type, message: response.data.alert.message, displayPage: this.$route.name })
				} else {
					this.$store.dispatch("alert/open", {
						type: "success",
						message: this.isAdd ? "event_update_add" : "event_update_edit",
						displayPage: this.isAdd ? "event_search" : "event_details"
					})
					this.$router.push(this.isAdd ? "/event/search" : "/event/details/" + this.$route.params.permalink)
				}
			}

			this.loadingSubmit = false
			return
		},
		updatePermalink() {
			this.$set(
				this.event,
				"permalink",
				this.event.name
					.toLowerCase()
					.trim()
					.replace(/ +/g, "-")
					.replace(/[^a-z0-9-]/g, "")
			)
		},
		addRace(index) {
			let races = this.event.races || []
			races.push({})
			this.$set(this.event, "races", races)
		},
		deleteRace(index) {
			this.event.races.splice(index, 1)
		},
		resetCenter() {
			let center
			if (this.initialCenter) {
				center = this.initialCenter
			} else {
				center = JSON.parse(process.env.VUE_APP_MAP_CENTER)
			}

			this.$set(this.event, "coordinates", this.initialCenter)
			this.map.flyTo({
				center: [center.lng, center.lat],
				essential: true
			})
		}
	}
}
</script>

<style scoped>
#map {
	width: 100%;
	height: 50vh;
}
#pin {
	top: 50%;
	left: 50%;
	width: 30px;
	margin-top: -15px;
	margin-left: -15px;
	height: 30px;
	background: #007bff;
	border-radius: 50%;
	border: 2px solid #005fc5;
}
</style>
