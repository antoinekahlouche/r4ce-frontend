<template>
	<Simple title="search">
		<form @submit="submit">
			<Bloc container="sm">
				<div class="form-group">
					<Label text="sport" required />
					<select name="sport" class="form-control" v-model="sport">
						<option value>{{$t("text.all")}}</option>
						<option v-for="sport in event.sport()" :key="sport" :value="sport">{{$t("sport." + sport)}}</option>
					</select>
				</div>
				<div class="form-group">
					<Label text="discipline" required />
					<select name="discipline" class="form-control" :disabled="!sport" v-model="discipline">
						<option value>{{$t("text.all")}}</option>
						<option
							v-for="discipline in event.discipline(sport)"
							:key="discipline"
							:value="discipline"
						>{{$t("discipline." + discipline)}}</option>
					</select>
				</div>
				<div class="form-group">
					<Label text="distance" required />
					<select name="distance" class="form-control" :disabled="!sport" v-model="distance">
						<option value>{{$t("text.all")}}</option>
						<option
							v-for="distance in event.distance(sport)"
							:key="distance"
							:value="distance"
						>{{$t("distance." + distance)}}</option>
					</select>
				</div>
				<div class="form-group">
					<Label text="format" required />
					<select name="format" class="form-control" v-model="format">
						<option value>{{$t("text.all")}}</option>
						<option
							v-for="format in event.format()"
							:key="format"
							:value="format"
						>{{$t("format." + format)}}</option>
					</select>
				</div>
				<div class="form-group">
					<Label text="in" required />
					<select name="where" class="form-control" disabled v-model="where">
						<option value="FR">{{$t("country.FR")}}</option>
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
				<button type="submit" class="btn btn-primary">{{$t("button.search")}}</button>
			</div>
			<br />
			<div class="text-center">
				<router-link to="/event/add">{{$t("button.event_add")}}</router-link>
			</div>
		</form>
	</Simple>
</template>

<script>
import Bloc from "@/components/Bloc.vue"
import Button from "@/components/Label.vue"
import Label from "@/components/Label.vue"
import Simple from "@/layouts/Simple.vue"
import event from "@/helpers/event.js"

export default {
	name: "EventSearch",
	components: { Bloc, Button, Label, Simple },
	data: () => ({ event }),
	computed: {
		sport: {
			get() {
				return this.$store.state.events.search.sport
			},
			set(value) {
				this.$store.dispatch("events/sport", value)
				this.$store.dispatch("events/distance", "")
				this.$store.dispatch("events/discipline", "")
			}
		},
		discipline: {
			get() {
				return this.$store.state.events.search.discipline
			},
			set(value) {
				this.$store.dispatch("events/discipline", value)
			}
		},
		distance: {
			get() {
				return this.$store.state.events.search.distance
			},
			set(value) {
				this.$store.dispatch("events/distance", value)
			}
		},
		format: {
			get() {
				return this.$store.state.events.search.format
			},
			set(value) {
				this.$store.dispatch("events/format", value)
			}
		},
		where: {
			get() {
				return this.$store.state.events.search.where
			},
			set(value) {
				this.$store.dispatch("events/where", value)
			}
		},
		from: {
			get() {
				return this.$store.state.events.search.from
			},
			set(value) {
				this.$store.dispatch("events/from", value)
			}
		},
		to: {
			get() {
				return this.$store.state.events.search.to
			},
			set(value) {
				this.$store.dispatch("events/to", value)
			}
		}
	},
	methods: {
		submit: function (event) {
			this.$router.push("EventMap")
			event.preventDefault()
		}
	}
}
</script>

<style scoped>
</style>
