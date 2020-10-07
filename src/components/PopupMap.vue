<template>
	<div class="card border-0 popup">
		<div v-if="event" class="card-body p-3">
			<p class="h5 card-title font-weight-bold">{{ event.name }}</p>
			<div class="h6 card-subtitle text-muted">
				<div v-for="date in distinctDate" :key="date">
					<b class="text-dark">{{ moment.display(date) }}</b>
					<div class="pt-2">
						<div v-for="race in event.races" :key="race._id">
							<span v-if="race.date === date">
								- {{ $t("distance." + race.distance) }} : {{ $t("discipline." + race.discipline) }}
								<br />
							</span>
						</div>
					</div>
				</div>
			</div>
			<router-link :to="`/event/detail/${event.permalink}`" class="btn btn-primary btn-block mt-3">
				{{ $t("button.detail") }}
			</router-link>
		</div>
		<div v-else>
			<div class="list-group border-0">
				<a v-for="(event, i) in events" :key="i" href="#" @click="select(event)" class="list-group-item list-group-item-action border-right-0 border-left-0" :class="{ 'border-bottom-0': i === events.length - 1 }">
					<p class="h6 m-0 text-truncate">{{ event.name }}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import moment from "@/plugins/moment"
import i18n from "@/plugins/i18n"

export default {
	props: {
		event: { type: Object },
		events: { type: Array }
	},
	data: () => ({
		moment
	}),
	mounted() {},
	computed: {
		distinctDate() {
			return [...new Set(this.event.races.map(race => race.date))].sort()
		}
	},
	methods: {
		select(event) {
			this.event = event
		}
	}
}
</script>

<style scoped></style>
