<template>
	<Simple title="search">
		<template #content>
			<div class="m-auto container-sm">
				<div class="form-group">
					<Label text="sport" required />
					<select name="sport" class="form-control" v-model="sport">
						<option value>{{$t("text.all")}}</option>
						<option
							v-for="sport in sportDetails.sport"
							:key="sport"
							:value="sport"
						>{{$t("sport." + sport)}}</option>
					</select>
				</div>
				<div class="form-group">
					<Label text="discipline" required />
					<select name="discipline" class="form-control" :disabled="!sport" v-model="discipline">
						<option value>{{$t("text.all")}}</option>
						<option
							v-for="discipline in sportDetails.disciplineBySport[sport]"
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
							v-for="distance in sportDetails.distanceBySport[sport]"
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
							v-for="format in sportDetails.format"
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
			</div>
		</template>

		<template #actions>
			<div class="text-center mt-3">
				<router-link to="/event/map" class="btn btn-primary">{{$t("title.search")}}</router-link>
			</div>
			<br />
			<div class="text-center">
				<router-link to="/event/add">{{$t("title.event_add")}}</router-link>
			</div>
		</template>
	</Simple>
</template>

<script>
import Button from "@/components/Label.vue";
import Label from "@/components/Label.vue";
import Simple from "@/layouts/Simple.vue";
import sportDetails from "@/constantes/sportDetails.js";

export default {
	name: "EventSearch",
	components: {
		Button,
		Label,
		Simple,
	},
	data: () => ({ sportDetails }),
	computed: {
		sport: {
			get() {
				return this.$store.state.search.sport;
			},
			set(value) {
				this.$store.commit("search/sport", value);
				this.$store.commit("search/distance", "");
				this.$store.commit("search/discipline", "");
			},
		},
		discipline: {
			get() {
				return this.$store.state.search.discipline;
			},
			set(value) {
				this.$store.commit("search/discipline", value);
			},
		},
		distance: {
			get() {
				return this.$store.state.search.distance;
			},
			set(value) {
				this.$store.commit("search/distance", value);
			},
		},
		format: {
			get() {
				return this.$store.state.search.format;
			},
			set(value) {
				this.$store.commit("search/format", value);
			},
		},
		where: {
			get() {
				return this.$store.state.search.where;
			},
			set(value) {
				this.$store.commit("search/where", value);
			},
		},
		from: {
			get() {
				return this.$store.state.search.from;
			},
			set(value) {
				this.$store.commit("search/from", value);
			},
		},
		to: {
			get() {
				return this.$store.state.search.to;
			},
			set(value) {
				this.$store.commit("search/to", value);
			},
		},
	},
};
</script>

<style scoped>
</style>
