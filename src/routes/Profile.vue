<template>
	<ListMenu title="profile" withSignout>
		<template #details>
			<form @submit="saveUser">
				<Bloc container="sm">
					<div class="form-group">
						<Label for="first_name" text="first_name" required />
						<input id="first_name" type="text" class="form-control" v-model="firstName" required />
					</div>

					<div class="form-group">
						<Label for="last_name" text="last_name" required />
						<input id="last_name" type="text" class="form-control" v-model="lastName" required />
					</div>

					<div class="form-group">
						<Label for="email" text="email" required />
						<input id="email" type="email" class="form-control" v-model="email" required />
					</div>

					<div class="form-group">
						<Label for="locale" text="locale" required />
						<select id="locale" class="form-control" v-model="locale" required disabled>
							<option value="fr">{{ $t("locale.french") }}</option>
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

		<template #avatar>
			<form @submit="saveAvatar">
				<Bloc container="sm">
					<div class="text-center">
						<Avataaars class="m-auto avatar pb-3" :id="avataaarId" />
					</div>
					<div v-for="key in avataaars.order.display" :key="key" class="form-group">
						<Label :for="key" :text="key" required />
						<select :id="key" class="form-control" required v-model="avatar[key]">
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
	</ListMenu>
</template>

<script>
import Avataaars from "@/components/Avataaars"
import avataaars, { toLabel, toIndex } from "@/helpers/avataaars"
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import ListMenu from "@/layouts/ListMenu"

export default {
	name: "Profile",
	route: {
		name: "profile",
		path: "profile",
		meta: { isSignedIn: true }
	},
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
		locale: null,
		email: null
	}),
	mounted: function() {
		this.firstName = this.$store.state.user.firstName
		this.lastName = this.$store.state.user.lastName
		this.locale = this.$store.state.user.locale
		this.email = this.$store.state.user.email

		const splittedAvataaarId = this.$store.state.user.avatar.split("-")
		avataaars.order.id.forEach((name, index) => {
			this.avatar[name] = toLabel(name, splittedAvataaarId[index])
		})

		if (!this.$store.state.user.verified) {
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

			await this.$store.dispatch("user/updateUser", {
				firstName: this.firstName,
				lastName: this.lastName,
				locale: this.locale,
				email: this.email
			})

			this.loading = false
			return
		},
		saveAvatar: async function(event) {
			event.preventDefault()
			this.loading = true

			await this.$store.dispatch("user/updateAvatar", {
				avatar: this.avataaarId
			})

			this.loading = false
			return
		}
	}
}
</script>

<style scoped>
.avatar {
	width: 30rem;
}
</style>
