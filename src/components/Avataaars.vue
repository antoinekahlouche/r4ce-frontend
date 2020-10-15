<template>
	<Avataaars style="width:100%; max-width:500px;" :accessoriesType="accessories_type" :clotheType="clothe_type" :clotheColor="clothe_color" :eyebrowType="eyebrow_type" :eyeType="eye_type" :facialHairColor="facial_hair_color" :facialHairType="facial_hair_type" :graphicType="graphic_type" :hairColor="hair_color" :mouthType="mouth_type" :skinColor="skin_color" :topType="top_type" />
</template>

<script>
import Avataaars from "@antoinekahlouche/avataaars"
import avataaarsHelper, { toLabel, toIndex,orderIndex } from "@/helpers/avataaars"
import Label from "@/components/Label"

export default {
	components: { Avataaars },
	props: {
		id: { type: String, default: "4-4-14-2-2-5-2-0-0-8-3-0" }
	},
	computed: {
		accessories_type() {
			return this.getValue("accessories_type")
		},
		clothe_type() {
			return this.getValue("clothe_type")
		},
		clothe_color() {
			return this.getValue("clothe_color")
		},
		eyebrow_type() {
			return this.getValue("eyebrow_type")
		},
		eye_type() {
			return this.getValue("eye_type")
		},
		facial_hair_color() {
			return this.getValue("facial_hair_color")
		},
		facial_hair_type() {
			return this.getValue("facial_hair_type")
		},
		graphic_type() {
			return this.getValue("graphic_type")
		},
		hair_color() {
			return this.getValue("hair_color")
		},
		mouth_type() {
			return this.getValue("mouth_type")
		},
		skin_color() {
			return this.getValue("skin_color")
		},
		top_type() {
			return this.getValue("top_type")
		}
	},
	methods: {
		idNullSafe() {
			return this.id || ""
		},
		getValue(type) {
			return avataaarsHelper.options[type][this.idNullSafe().split("-")[orderIndex(type)]]
		}
	}
}
</script>

<style scoped></style>
