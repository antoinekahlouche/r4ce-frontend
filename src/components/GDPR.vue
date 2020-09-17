<template>
	<div
		class="toast position-fixed m-4 show"
		role="alert"
		data-animation="false"
		data-autohide="false"
	>
		<div class="toast-header">
			<strong class="my-2">{{$t("title.gdpr")}}</strong>
		</div>
		<div class="toast-body">
			<form action="/gdpr" method="POST">
				<p>{{$t("text.gdpr")}}</p>
				<div class="clearfix">
					<div class="float-right">
						<router-link
							:to="{path: '/about', query: {active: 'gdpr'}}"
							class="mr-2"
						>{{$t("button.more_info")}}</router-link>
						<button
							type="submit"
							data-dismiss="toast"
							class="ml-2 btn btn-primary"
						>{{$t("button.accept")}}</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "GDPR",
	mounted: () => {
		// if (this.$store.state.profile.user.acceptance.gdpr !== this.$t("gdpr.version")) {
		// 	$(".toast").toast("show")
		// }
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
