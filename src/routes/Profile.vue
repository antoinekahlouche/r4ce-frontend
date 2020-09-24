<template>
	<ListMenu title="profile" withSignout>
		<template #details>
			<form @submit="saveUser">
				<Bloc container="sm">
					<div class="form-group">
						<Label text="first_name" required />
						<input type="text" class="form-control" v-model="firstName" required />
					</div>

					<div class="form-group">
						<Label text="last_name" required />
						<input type="text" class="form-control" v-model="lastName" required />
					</div>

					<div class="form-group">
						<Label text="email" required />
						<input type="email" class="form-control" v-model="email" required />
					</div>
				</Bloc>
				<div class="text-center">
					<button type="submit" class="btn btn-success" :disabled="loading">
						<span class="spinner-border spinner-border-sm mr-1" role="status" :class="{ 'd-none': !loading }"></span>
						{{ $t("button.save") }}
					</button>
				</div>
			</form>
		</template>

		<template #avatar>
			<form @submit="saveAvatar">
				<Bloc container="sm">
					<div class="text-center">
						<Avataaars class="m-auto avatar pb-3" :id="avataaarId" />
					</div>
					<div v-for="key in Object.keys(options)" :key="key" class="form-group">
						<Label :text="key" required />
						<select class="form-control" required v-model="avatar[key]">
							<option v-for="option in options[key]" :key="option" :value="option">{{ $t("avatar." + key + "." + option) }}</option>
						</select>
					</div>
				</Bloc>
				<div class="text-center">
					<button type="submit" class="btn btn-success" :disabled="loading">
						<span class="spinner-border spinner-border-sm mr-1" role="status" :class="{ 'd-none': !loading }"></span>
						{{ $t("button.save") }}
					</button>
				</div>
			</form>
		</template>

		<template #comments>
			<div></div>
		</template>

		<template #admin>
			<div></div>
		</template>
	</ListMenu>
</template>

<script>
import Avataaars from "@/components/Avataaars"
import options, { toLabel, toIndex } from "@/helpers/avataaars.js"
import axios from "@/plugins/axios.js"
import Bloc from "@/components/Bloc.vue"
import Label from "@/components/Label.vue"
import ListMenu from "@/layouts/ListMenu.vue"

export default {
	name: "Profile",
	components: { Avataaars, Bloc, Label, ListMenu },
	data: () => ({
		options: options.options,
		avatar: {
			accessories_type: "",
			clothe_type: "",
			clothe_color: "",
			eyebrow_type: "",
			eye_type: "",
			facial_hair_color: "",
			facial_hair_type: "",
			graphic_type: "",
			hair_color: "",
			mouth_type: "",
			skin_color: "",
			top_type: ""
		},
		loading: false,
		firstName: null,
		lastName: null,
		email: null
	}),
	mounted: function () {
		this.firstName = this.$store.state.profile.user.firstName
		this.lastName = this.$store.state.profile.user.lastName
		this.email = this.$store.state.profile.user.email

		const splittedAvataaarId = this.$store.state.profile.user.avatar.split("-")
		this.avatar.accessories_type = toLabel("accessories_type", splittedAvataaarId[0])
		this.avatar.clothe_type = toLabel("clothe_type", splittedAvataaarId[1])
		this.avatar.clothe_color = toLabel("clothe_color", splittedAvataaarId[2])
		this.avatar.eyebrow_type = toLabel("eyebrow_type", splittedAvataaarId[3])
		this.avatar.eye_type = toLabel("eye_type", splittedAvataaarId[4])
		this.avatar.facial_hair_color = toLabel("facial_hair_color", splittedAvataaarId[5])
		this.avatar.facial_hair_type = toLabel("facial_hair_type", splittedAvataaarId[6])
		this.avatar.graphic_type = toLabel("graphic_type", splittedAvataaarId[7])
		this.avatar.hair_color = toLabel("hair_color", splittedAvataaarId[8])
		this.avatar.mouth_type = toLabel("mouth_type", splittedAvataaarId[9])
		this.avatar.skin_color = toLabel("skin_color", splittedAvataaarId[10])
		this.avatar.top_type = toLabel("top_type", splittedAvataaarId[11])

		if (!this.$store.state.profile.user.verified) {
			this.$store.dispatch("alert/open", {
				type: "warning",
				message: "user_unverified",
				displayPage: "Profile"
			})
		}
	},
	computed: {
		avataaarId: function () {
			return [
				toIndex("accessories_type", this.avatar.accessories_type), //
				toIndex("clothe_type", this.avatar.clothe_type),
				toIndex("clothe_color", this.avatar.clothe_color),
				toIndex("eyebrow_type", this.avatar.eyebrow_type),
				toIndex("eye_type", this.avatar.eye_type),
				toIndex("facial_hair_color", this.avatar.facial_hair_color),
				toIndex("facial_hair_type", this.avatar.facial_hair_type),
				toIndex("graphic_type", this.avatar.graphic_type),
				toIndex("hair_color", this.avatar.hair_color),
				toIndex("mouth_type", this.avatar.mouth_type),
				toIndex("skin_color", this.avatar.skin_color),
				toIndex("top_type", this.avatar.top_type)
			].join("-")
		}
	},
	methods: {
		saveUser: async function (event) {
			event.preventDefault()
			this.loading = true

			// const response = await axios.post("/user", {
			// 	firstName: this.firstName,
			// 	lastName: this.lastName,
			// 	email: this.email
			// })
			const response = await axios.get("/event")
			console.log(response)
			this.loading = false
			return
		},
		saveAvatar: async function (event) {
			event.preventDefault()
			this.loading = true

			const response = await axios.post("/user", {
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email
			})

			this.loading = false
			return
		},
		updateAvatar: function (key, option) {
			console.log(key, option)
			// this.avataaar =
		}
	}
}
</script>

<style scoped>
.avatar {
	width: 30rem;
}
</style>
