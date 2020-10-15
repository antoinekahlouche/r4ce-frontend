<template>
	<Layout title="credit">
		<div class="row">
			<div v-for="(value, key) in credits" :key="key" class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
				<div class="card h-100">
					<p class="font-weight-bold card-header">{{ $t("title." + value.title) }}</p>
					<div class="card-body">
						<p class="card-text">
							<b>{{ $t("text.source") }} :&nbsp;</b>
							<a :href="value.sourceLink" target="_blank">{{ value.source }}</a>
							<br />
							<b>{{ $t("text.license") }} :&nbsp;</b>
							<a :href="value.licenseLink" target="_blank">{{ value.license }}</a>
							<br />
							<b>{{ $t("text.update") }} :&nbsp;</b>
							{{ $t("text." + (value.update ? "yes" : "no")) }}
							<br />
						</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import Bloc from "@/components/Bloc"
import Layout from "@/components/Layout"

export default {
	name: "Credit",
	route: {
		name: "credit",
		path: "credit"
	},
	components: { Bloc, Layout },
	data: () => ({
		credits: [
			{
				title: "avatar",
				source: "Avataaars",
				sourceLink: "https://avataaars.com",
				license: "specific",
				licenseLink: "https://avataaars.com",
				update: false
			},
			{
				title: "map_data",
				source: "OpenStreetMap",
				sourceLink: "https://www.openstreetmap.org",
				license: "ODbL",
				licenseLink: "https://opendatacommons.org/licenses/odbl",
				update: false
			},
			{
				title: "map_generate",
				source: "OpenMapTiles",
				sourceLink: "https://openmaptiles.org",
				license: "ODbL",
				licenseLink: "https://wiki.openstreetmap.org/wiki/Open_Database_License",
				update: false
			},
			{
				title: "terms_usage",
				source: "Jurismatic",
				sourceLink: "http://www.jurismatic.com",
				license: "Creative Commons",
				licenseLink: "https://creativecommons.org/licenses/by-nc-sa/3.0/fr/legalcode",
				update: true
			},
			{
				title: "terms_gdpr",
				source: "Jurismatic",
				sourceLink: "http://www.jurismatic.com",
				license: "Creative Commons",
				licenseLink: "https://creativecommons.org/licenses/by-nc-sa/3.0/fr/legalcode",
				update: true
			},
			{
				title: "drawings",
				source: "unDaw",
				sourceLink: "https://undraw.co",
				license: "specific",
				licenseLink: "https://undraw.co/license",
				update: false
			},
			{
				title: "icons",
				source: "Font Awesome",
				sourceLink: "https://fontawesome.com",
				license: "specific",
				licenseLink: "https://fontawesome.com/license",
				update: true
			}
		]
	})
}
</script>

<style scoped></style>
