<template>
	<ListMenu title="profile">
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
					<button type="button" class="btn btn-danger mr-4" :disabled="loading" @click="signout">
						<span
							class="spinner-border spinner-border-sm mr-1"
							role="status"
							:class="{'d-none':!loading}"
						></span>
						{{$t("button.signout")}}
					</button>
					<button type="submit" class="btn btn-success" :disabled="loading">
						<span
							class="spinner-border spinner-border-sm mr-1"
							role="status"
							:class="{'d-none':!loading}"
						></span>
						{{$t("button.save")}}
					</button>
				</div>
			</form>
		</template>

		<template #avatar>
			<form @submit="saveAvatar">
				<Bloc container="sm">
					<div class="text-center">
						<Avataaars v-if="avataaar" class="m-auto avatar pb-3" :id="displayAvataaar" />
					</div>

					<div v-for="(key, i) in Object.keys(avataaarsOptions)" :key="i" class="form-group">
						<Label :text="key" required />
						<select class="form-control" required v-model="avataaar[i]">
							<option
								v-for="(option, j) in avataaarsOptions[key]"
								:key="j"
								:value="j"
							>{{$t("avatar." + key + "." + option)}}</option>
						</select>
					</div>
				</Bloc>
				<div class="text-center">
					<button type="submit" class="btn btn-success" :disabled="loading">
						<span
							class="spinner-border spinner-border-sm mr-1"
							role="status"
							:class="{'d-none':!loading}"
						></span>
						{{$t("button.save")}}
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
import Avataaars from "@/components/Avataaars.vue"
import avataaars from "@/helpers/avataaars.js"
import axios from "@/plugins/axios.js"
import Bloc from "@/components/Bloc.vue"
import Label from "@/components/Label.vue"
import ListMenu from "@/layouts/ListMenu.vue"

export default {
	name: "Profile",
	components: { Avataaars, Bloc, Label, ListMenu },
	data: () => ({
		avataaarsOptions: avataaars.options,
		avataaar: "",
		loading: false,
		firstName: null,
		lastName: null,
		email: null
	}),
	mounted: function () {
		this.firstName = this.$store.state.profile.user.firstName
		this.lastName = this.$store.state.profile.user.lastName
		this.email = this.$store.state.profile.user.email
		this.avataaar = this.$store.state.profile.user.avatar.split("-")
	},
	computed: {
		displayAvataaar: function () {
			return this.avataaar.join("-")
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
		signout: async function () {
			this.loading = true

			const response = await axios.post("/signout")
			console.log(response)
			this.$store.dispatch("profile/user", null)
			this.$router.push("/signin")
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
