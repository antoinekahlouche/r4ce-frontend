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
					<div v-for="key in avataaars.order.display" :key="key" class="form-group">
						<Label :text="key" required />
						<select class="form-control" required v-model="avatar[key]">
							<option v-for="option in avataaars.options[key]" :key="option" :value="option">{{ $t("avatar." + key + "." + option) }}</option>
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
import avataaars, { toLabel, toIndex } from "@/helpers/avataaars.js"
import axios from "@/plugins/axios.js"
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import ListMenu from "@/layouts/ListMenu"

export default {
	name: "Profile",
	components: { Avataaars, Bloc, Label, ListMenu },
	data: () => ({
		avataaars: avataaars,
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
	mounted: function() {
		this.firstName = this.$store.state.profile.user.firstName
		this.lastName = this.$store.state.profile.user.lastName
		this.email = this.$store.state.profile.user.email

		const splittedAvataaarId = this.$store.state.profile.user.avatar.split("-")
		avataaars.order.id.forEach((name, index) => {
			this.avatar[name] = toLabel(name, splittedAvataaarId[index])
		})

		if (!this.$store.state.profile.user.verified) {
			this.$store.dispatch("alert/open", {
				type: "warning",
				message: "user_unverified",
				displayPage: "profile"
			})
		}
	},
	computed: {
		avataaarId: function() {
			return avataaars.order.id.map((name, index) => toIndex(name, this.avatar[name])).join("-")
		}
	},
	methods: {
		saveUser: async function(event) {
			event.preventDefault()
			this.loading = true

			// const response = await axios.post("/user", {
			// 	firstName: this.firstName,
			// 	lastName: this.lastName,
			// 	email: this.email
			// })
			const response = await axios.get("/event")
			this.loading = false
			return
		},
		saveAvatar: async function(event) {
			event.preventDefault()
			this.loading = true

			const response = await axios.post(
				"/user",
				{
					firstName: this.firstName,
					lastName: this.lastName,
					email: this.email
				},
				{ withCredentials: true }
			)

			this.loading = false
			return
		},
		updateAvatar: function(key, option) {
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
