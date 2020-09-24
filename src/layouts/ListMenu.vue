<template>
	<div>
		<Header />
		<div class="p-3 p-lg-5 flex-grow-1">
			<Breadcrumb v-if="links" :title="title" :links="links" />
			<Alert />
			<h1 class="mb-3 mb-lg-5">{{ $t("title." + title) }}</h1>

			<div class="row">
				<div class="col-12 col-lg-3 mb-3">
					<div class="list-group active-param" role="tablist">
						<div v-for="(value, key) in $slots" :key="key" :id="'ListMenu_menu_' + key" class="list-group-item list-group-item-action" data-toggle="list" :href="'#ListMenu_content_' + key" v-on:click="changeMenu(key)">{{ $t("title." + key) }}</div>
					</div>

					<div v-if="withSignout" class="list-group">
						<br />
						<button id="signoutMenuButton" type="button" class="btn btn-danger text-left" :disabled="loading" @click="signout">
							<span class="spinner-border spinner-border-sm mr-1" role="status" :class="{ 'd-none': !loading }"></span>
							{{ $t("button.signout") }}
						</button>
					</div>
				</div>

				<div class="col">
					<div class="tab-content">
						<div v-for="(value, key) in $slots" :key="key" :id="'ListMenu_content_' + key" class="tab-pane">
							<slot :name="key" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Alert from "@/components/Alert"
import axios from "@/plugins/axios.js"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default {
	name: "ListMenu",
	components: { Alert, Breadcrumb, Footer, Header },
	props: {
		title: { type: String, required: true },
		links: Object,
		withSignout: Boolean
	},
	data: () => ({
		loading: false
	}),
	watch: {
		"$route.query.active": function(value) {
			this.show()
		}
	},
	mounted: function() {
		this.show()
	},
	methods: {
		show: function() {
			const active = this.$route.query.active
			if (active) {
				$("#ListMenu_menu_" + active).tab("show")
			} else {
				$(".list-group-item:first-child").tab("show")
			}
		},
		changeMenu: function(menu) {
			const { active, ...otherQuery } = this.$route.query
			if (active === menu) return
			this.$router.replace({ path: this.$route.currentPath, query: { active: menu, ...otherQuery } })
		},
		signout: async function() {
			this.loading = true

			const response = await axios.post("/signout", { withCredentials: true })
			this.$store.dispatch("profile/user", null)
			this.$router.push("/signin")
			this.loading = false
			return
		}
	}
}
</script>

<style scoped>
.list-group-item {
	cursor: pointer;
}

#signoutMenuButton {
	padding: 12px 20px 12px 20px;
}
</style>
