<template>
	<Global title="search">
		<form @submit="submit">
			<Bloc container="sm">
				<div class="form-group">
					<Label text="sport" required />
					<select name="sport" class="form-control" v-model="sport">
						<option value>{{ $t("text.all") }}</option>
						<option v-for="sport in eventHelper.sport()" :key="sport" :value="sport">{{ $t("sport." + sport) }}</option>
					</select>
				</div>
				<div class="form-group">
					<Label text="discipline" required />
					<select name="discipline" class="form-control" :disabled="!sport" v-model="discipline">
						<option value>{{ $t("text.all") }}</option>
						<option v-for="discipline in eventHelper.discipline(sport)" :key="discipline" :value="discipline">{{ $t("discipline." + discipline) }}</option>
					</select>
				</div>
				<div class="form-group">
					<Label text="distance" required />
					<select name="distance" class="form-control" :disabled="!sport" v-model="distance">
						<option value>{{ $t("text.all") }}</option>
						<option v-for="distance in eventHelper.distance(sport)" :key="distance" :value="distance">{{ $t("distance." + distance) }}</option>
					</select>
				</div>
				<div class="form-group">
					<Label text="format" required />
					<select name="format" class="form-control" v-model="format">
						<option value>{{ $t("text.all") }}</option>
						<option v-for="format in eventHelper.format()" :key="format" :value="format">{{ $t("format." + format) }}</option>
					</select>
				</div>
				<div class="form-group">
					<Label text="in" required />
					<select name="country" class="form-control" disabled v-model="country">
						<option value="FR">{{ $t("country.FR") }}</option>
					</select>
				</div>
				<div class="form-row">
					<div class="form-group col-sm-6">
						<Label text="from" required />
						<input name="from" type="date" class="form-control" required v-model="from" />
					</div>
					<div class="form-group col-sm-6">
						<Label text="to" required />
						<input name="to" type="date" class="form-control" required v-model="to" />
					</div>
				</div>
			</Bloc>
			<div class="text-center mt-3">
				<button type="submit" class="btn btn-primary">{{ $t("button.search") }}</button>
			</div>
			<br />
			<div class="text-center">
				<router-link to="/event/update">{{ $t("button.event_add") }}</router-link>
			</div>
		</form>
	</Global>
</template>

<script>
import Bloc from "@/components/Bloc"
import Button from "@/components/Label"
import Label from "@/components/Label"
import Global from "@/components/Layout"
import eventHelper from "@/helpers/event"

export default {
	name: "EventSearch",
	route: {
		name: "event_search",
		path: "",
		alias: "event/search"
	},
	components: { Bloc, Button, Label, Global },
	data: () => ({
		eventHelper
	}),
	computed: {
		sport: {
			get() {
				return this.$store.state.search.sport
			},
			set(value) {
				this.$store.dispatch("search/sport", value)
				this.$store.dispatch("search/distance", "")
				this.$store.dispatch("search/discipline", "")
			}
		},
		discipline: {
			get() {
				return this.$store.state.search.discipline
			},
			set(value) {
				this.$store.dispatch("search/discipline", value)
			}
		},
		distance: {
			get() {
				return this.$store.state.search.distance
			},
			set(value) {
				this.$store.dispatch("search/distance", value)
			}
		},
		format: {
			get() {
				return this.$store.state.search.format
			},
			set(value) {
				this.$store.dispatch("search/format", value)
			}
		},
		country: {
			get() {
				return this.$store.state.search.country
			},
			set(value) {
				this.$store.dispatch("search/country", value)
			}
		},
		from: {
			get() {
				return this.$store.state.search.from
			},
			set(value) {
				this.$store.dispatch("search/from", value)
			}
		},
		to: {
			get() {
				return this.$store.state.search.to
			},
			set(value) {
				this.$store.dispatch("search/to", value)
			}
		}
	},
	methods: {
		submit(event) {
			event.preventDefault()
			this.$router.push("/event/map?" + this.$store.getters["search/query"])
		}
	}
}
</script>

<style scoped></style>
