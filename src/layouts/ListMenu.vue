<template>
	<div>
		<Header />
		<div class="p-3 p-lg-5 flex-grow-1">
			<Breadcrumb v-if="links" :title="title" :links="links" />
			<h1 class="mb-3 mb-lg-5">{{$t("title." + title)}}</h1>

			<div class="row">
				<div class="col-12 col-lg-3 mb-3">
					<div class="list-group active-param" role="tablist">
						<div
							v-for="(value,key) in $slots"
							:key="key"
							:id="'ListMenu_menu_'+key"
							class="list-group-item list-group-item-action"
							data-toggle="list"
							:href="'#ListMenu_content_' + key"
							v-on:click="changeMenu(key)"
						>{{$t("title." + key)}}</div>
					</div>
				</div>

				<div class="col">
					<div class="tab-content">
						<div v-for="(value,key) in $slots" :key="key" :id="'ListMenu_content_'+key" class="tab-pane">
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
import Breadcrumb from "@/components/Breadcrumb.vue"
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"

export default {
	name: "ListMenu",
	components: {
		Breadcrumb,
		Footer,
		Header
	},
	props: {
		title: { type: String, required: true },
		links: Object
	},
	mounted: function () {
		const active = this.$route.query.active
		if (active) {
			$("#ListMenu_menu_" + active).tab("show")
		} else {
			$(".list-group-item:first-child").tab("show")
		}
	},
	methods: {
		changeMenu: function (menu) {
			const { active, ...otherQuery } = this.$route.query
			this.$router.replace({ path: this.$route.currentPath, query: { active: menu, ...otherQuery } })
		}
	}
}
</script>

<style scoped>
.list-group-item {
	cursor: pointer;
}
</style>
