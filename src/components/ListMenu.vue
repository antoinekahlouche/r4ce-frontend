<template>
	<div class="row">
		<div class="col-12 col-lg-3 mb-3">
			<div class="list-group active-param" role="tablist">
				<div v-for="(value, key) in $slots" :key="key" :id="'ListMenu_menu_' + key" class="list-group-item list-group-item-action pointer" data-toggle="list" :href="'#ListMenu_content_' + key" @click="changeMenu(key)">{{ $t("title." + key) }}</div>
			</div>

			<div v-if="withSignout" class="list-group">
				<br />
				<button id="signoutMenuButton" type="button" class="btn btn-danger text-left" :disabled="loading" @click="signout">
					<Spinner v-if="loading" />
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
import Spinner from "@/components/Spinner"

export default {
	name: "ListMenu",
	components: { Alert, Breadcrumb, Footer, Header,Spinner },
	props: {
		withSignout: { type: Boolean, default: false }
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
