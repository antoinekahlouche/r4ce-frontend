<template>
	<Global title="about">
		<ListMenu>
			<template #legal>
				<Bloc>
					<div class="mb-5">
						<h2>{{ $t("text.editor") }}</h2>
						Antoine Kahlouche SASU <br />
						3 rue Arletty <br />
						92400 Courbevoie <br />
						FRANCE
						<br />
						<br />
						contact@r4ce.co <br />
						<a href="https://antoine.kahlouche.fr" target="_blank">antoine.kahlouche.fr</a>
						<br />
						<br />Capital : 1000€ <br />
						SIRET : 829 748 938 00018 RCS Nanterre <br />
						TVA : FR 40 8297 48938
					</div>

					<div class="mb-5">
						<h2>{{ $t("text.editorial_manager") }}</h2>
						M. Antoine Kahlouche
					</div>

					<div>
						<h2>{{ $t("text.host") }}</h2>
						Amazon Web Services LLC <br />
						P.O. Box 81226 <br />
						Seattle, WA 98108-1226 <br />
						USA <br />
						<br />
						<a href="https://aws.amazon.com" target="_blank">aws.amazon.com</a>
					</div>
				</Bloc>
			</template>

			<template #usage>
				<Bloc>
					<div v-for="(value, key) in $t('usage')" :key="key">
						<div v-if="key.endsWith('title')" class="mb-5">
							<h2 v-if="key.split('_').length === 2">{{ key.split("_")[0] }} {{ value }}</h2>
							<h3 v-if="key.split('_').length === 3">{{ key.split("_")[0] }}.{{ key.split("_")[1] }} {{ value }}</h3>
						</div>
						<div v-else-if="key.endsWith('content')" class="mb-5" v-html="value"></div>
					</div>
				</Bloc>
			</template>

			<template #gdpr>
				<Bloc>
					<div v-for="(value, key) in $t('gdpr')" :key="key">
						<div v-if="key.endsWith('title')" class="mb-5">
							<h2 v-if="key.split('_').length === 2">{{ key.split("_")[0] }} {{ value }}</h2>
							<h3 v-if="key.split('_').length === 3">{{ key.split("_")[0] }}.{{ key.split("_")[1] }} {{ value }}</h3>
						</div>
						<div v-else-if="key.endsWith('content')" class="mb-5" v-html="value"></div>
					</div>
				</Bloc>
			</template>

			<template #team>
				<Bloc class="text-center">
					<Avataaars class="m-auto avatar pb-3" id="4-4-14-2-2-5-2-0-0-8-3-0" />
					<h2>Antoine Kahlouche</h2>
					<p class="text-muted">{{ $t("text.creator") }}</p>
				</Bloc>
			</template>

			<template #social>
				<div class="alert alert-primary" role="alert">{{ $t("alert.social_network_inexisten") }}</div>
			</template>

			<template #credit>
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
			</template>
		</ListMenu>
	</Global>
</template>

<script>
import Avataaars from "@/components/Avataaars"
import Bloc from "@/components/Bloc"
import ListMenu from "@/components/ListMenu"
import Global from "@/components/Layout"

export default {
	name: "About",
	route: {
		name: "about",
		path: "about"
	},
	components: { Avataaars, Bloc, ListMenu, Global },
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
				title: "usage",
				source: "Jurismatic",
				sourceLink: "http://www.jurismatic.com",
				license: "Creative Commons",
				licenseLink: "https://creativecommons.org/licenses/by-nc-sa/3.0/fr/legalcode",
				update: true
			},
			{
				title: "gdpr",
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

<style scoped>
.avatar {
	width: 30rem;
}
</style>
