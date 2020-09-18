<template>
	<Avataaars
		circleColor="#E9ECEF"
		:accessoriesType="value(0)"
		:clotheType="value(1)"
		:clotheColor="value(2)"
		:eyebrowType="value(3)"
		:eyeType="value(4)"
		:facialHairColor="value(5)"
		:facialHairType="value(6)"
		:graphicType="value(7)"
		:hairColor="value(8)"
		:mouthType="value(9)"
		:skinColor="value(10)"
		:topType="value(11)"
	></Avataaars>
</template>

<script>
import Avataaars from "vuejs-avataaars"
import avataaars from "@/helpers/avataaars.js"

export default {
	components: { Avataaars },
	props: {
		id: { type: String, required: true }
	},
	methods: {
		value: function (index) {
			return avataaars.options[Object.keys(avataaars.options)[index]][this.id.split("-")[index]]
		}
	}
}
</script>

<style scoped>
</style>
