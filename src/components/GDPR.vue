<template>
	<form v-if="show" @submit="submit">
		<div class="toast position-fixed m-4" role="alert" data-animation="false" data-autohide="false">
			<div class="toast-header">
				<strong class="my-2">{{ $t("title.gdpr") }}</strong>
			</div>
			<div class="toast-body">
				<p>{{ $t("text.gdpr") }}</p>
				<div class="clearfix">
					<div class="float-right">
						<router-link to="/gdpr" class="mr-2">{{ $t("button.more_info") }}</router-link>
						<button type="submit" class="btn btn-primary ml-2" :disabled="loading">
							<Icon v-if="loading" class="mr-2" icon="spinner" pulse />
							{{ $t("button.accept") }}
						</button>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
export default {
	name: "GDPR",
	data: () => ({
		loading: false
	}),
	computed: {
		show() {
			return this.$store.getters["terms/showGDPRToast"]
		}
	},
	methods: {
		async submit(event) {
			event.preventDefault()
			this.loading = true

			await this.$store.dispatch("terms/set", "GDPR")

			this.loading = false
			return
		}
	}
}
</script>

<style scoped>
.toast {
	bottom: 0;
	z-index: 3;
	background-color: #ffffff;
}
</style>
