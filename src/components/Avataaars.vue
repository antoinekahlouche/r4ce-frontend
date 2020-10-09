<template>
	<Avataaars style="width:100%; max-width:500px;" :accessoriesType="accessoriesType" :clotheType="clotheType" :clotheColor="clotheColor" :eyebrowType="eyebrowType" :eyeType="eyeType" :facialHairColor="facialHairColor" :facialHairType="facialHairType" :graphicType="graphicType" :hairColor="hairColor" :mouthType="mouthType" :skinColor="skinColor" :topType="topType"></Avataaars>
</template>

<script>
import Avataaars from "@antoinekahlouche/avataaars"
import avataaars from "@/helpers/avataaars"

export default {
	components: { Avataaars },
	props: {
		id: { type: String, required: true }
	},
	data: () => ({
		accessoriesType: "",
		clotheType: "",
		clotheColor: "",
		eyebrowType: "",
		eyeType: "",
		facialHairColor: "",
		facialHairType: "",
		graphicType: "",
		hairColor: "",
		mouthType: "",
		skinColor: "",
		topType: ""
	}),
	watch: {
		id(value) {
			this.display(value)
		}
	},
	mounted() {
		this.display(this.id)
	},
	methods: {
		display(id) {
			const splittedId = id.split("-")
			this.accessoriesType = avataaars.options["accessories_type"][splittedId[0]]
			this.clotheType = avataaars.options["clothe_type"][splittedId[1]]
			this.clotheColor = avataaars.options["clothe_color"][splittedId[2]]
			this.eyebrowType = avataaars.options["eyebrow_type"][splittedId[3]]
			this.eyeType = avataaars.options["eye_type"][splittedId[4]]
			this.facialHairColor = avataaars.options["facial_hair_color"][splittedId[5]]
			this.facialHairType = avataaars.options["facial_hair_type"][splittedId[6]]
			this.graphicType = avataaars.options["graphic_type"][splittedId[7]]
			this.hairColor = avataaars.options["hair_color"][splittedId[8]]
			this.mouthType = avataaars.options["mouth_type"][splittedId[9]]
			this.skinColor = avataaars.options["skin_color"][splittedId[10]]
			this.topType = avataaars.options["top_type"][splittedId[11]]
		}
	}
}
</script>

<style scoped></style>
