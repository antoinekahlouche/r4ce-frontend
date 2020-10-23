<template>
	<div class="row">
		<div class="col-12 col-lg-3 mb-3">
			<div class="list-group active-param" role="tablist">
				<div v-for="(value, key) in $slots" :key="key" :id="'ListMenu_menu_' + key" class="list-group-item list-group-item-action pointer" data-toggle="list" :href="'#ListMenu_content_' + key" @click="changeMenu(key)">
					{{ $t("title." + key) }}
					<Icon v-if="externalLink && Object.keys(externalLink).includes(key)" class="ml-2" icon="external-link-alt" />
				</div>
			</div>

			<div v-if="withSignout" class="list-group">
				<br />
				<button id="signoutMenuButton" type="button" class="btn btn-danger text-left" :disabled="loading" @click="signout">
					<Icon v-if="loading" class="mr-2" icon="spinner" pulse />
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
</template>

<script>
import Alert from "@/components/Alert"
import Breadcrumb from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default {
	name: "ListMenu",
	components: { Alert, Breadcrumb, Footer, Header },
	props: {
		withSignout: { type: Boolean },
		externalLink: { type: Object }
	},
	data: () => ({
		loading: false
	}),
	watch: {
		"$route.query.active"(value) {
			this.show()
		}
	},
	mounted() {
		this.show()
	},
	methods: {
		show() {
			const active = this.$route.query.active
			if (active) {
				$("#ListMenu_menu_" + active).tab("show")
			} else {
				$(".list-group-item:first-child").tab("show")
			}
		},
		changeMenu(menu) {
			if (Object.keys(this.externalLink).includes(menu)) {
				this.$router.push(this.externalLink[menu])
				return
			}

			const { active, ...otherQuery } = this.$route.query
			if (active === menu) return
			this.$router.replace({ path: this.$route.currentPath, query: { active: menu, ...otherQuery } })
		},
		async signout() {
			this.loading = true

			await this.$store.dispatch("user/signout")
			this.$router.push("/signin")

			this.loading = false
			return
		}
	}
}
</script>

<style scoped>
.pointer {
	cursor: pointer;
}

#signoutMenuButton {
	padding: 12px 20px 12px 20px;
}
</style>
