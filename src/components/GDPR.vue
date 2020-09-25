<template>
	<form @submit="submit">
		<div class="toast position-fixed m-4" role="alert" data-animation="false" data-autohide="false">
			<div class="toast-header">
				<strong class="my-2">{{ $t("title.gdpr") }}</strong>
			</div>
			<div class="toast-body">
				<p>{{ $t("text.gdpr") }}</p>
				<div class="clearfix">
					<div class="float-right">
						<router-link to="/about?active=gdpr" class="mr-2">{{ $t("button.more_info") }}</router-link>
						<button type="submit" class="btn btn-primary ml-2" :disabled="loading">
							<span class="spinner-border spinner-border-sm mr-1" role="status" :class="{ 'd-none': !loading }"></span>
							{{ $t("button.accept") }}
						</button>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
import axios from "@/plugins/axios.js"

export default {
	name: "GDPR",
	data: () => ({
		loading: false
	}),
	mounted: async function() {
		if (!this.$store.state.profile.terms || !this.$store.state.profile.terms.GDPR) {
			const response = await axios.get("/terms")

			if (Object.keys(response.data.terms).length === 0) {
				$(".toast").toast("show")
				return
			}

			this.$store.dispatch("profile/terms", response.data.terms)
		}

		if (this.$store.state.profile.terms.GDPR.version < this.$t("gdpr.version")) {
			$(".toast").toast("show")
		}
	},
	methods: {
		submit: async function(event) {
			event.preventDefault()
			this.loading = true

			const response = await axios.post(
				"/terms",
				{
					type: "GDPR",
					version: this.$t("gdpr.version")
				}
			)

			if (response.data.terms) {
				this.$store.dispatch("profile/uniqTerms", { key: "GDPR", value: response.data.terms })
				$(".toast").toast("hide")
			}

			this.loading = false
			return
		}
	}
}
</script>

<style scoped>
.toast {
	bottom: 0;
	z-index: 2;
	background-color: #ffffff;
}
</style>
