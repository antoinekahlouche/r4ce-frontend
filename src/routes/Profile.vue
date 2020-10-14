<template>
	<Layout title="profile">
		<ListMenu withSignout>
			<template #details>
				<form @submit="saveUser">
					<div v-if="!$store.state.user.verified && !verifyLinkSend" class="alert alert-warning" role="alert">
						{{ $t("alert.user_unverified") }} <a href="#" @click="sendVerifyLink()">{{ $t("text.resend_verify") }}</a>
					</div>
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
								<option value="FR">{{ $t("locale.FR") }}</option>
							</select>
						</div>
					</Bloc>
					<div class="text-center">
						<button type="submit" class="btn btn-success" :disabled="loading">
							<Spinner v-if="loading" />
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
				<div>
					<ul v-if="$store.state.user.comments && $store.state.user.comments.length > 0" class="list-group">
						<li href="#" v-for="(comment, i) in $store.state.user.comments" :key="comment._id" class="list-group-item pt-4">
							<div>
								<span class="font-weight-bold h5">
									{{ comment.eventName }}
								</span>
								<span class="float-right">
									<StarRating v-model="comment.rating" inactive-color="#EEEEEE" active-color="#FFC107" :border-width="3" border-color="#EEEEEE" active-border-color="#FFB300" :show-rating="false" :star-size="15" rounded-corners readOnly></StarRating>
								</span>
							</div>
							<p>
								{{ comment.race }}
								<span v-if="comment.year">{{ comment.year }}</span>
								<span v-if="comment.time">{{ comment.time }}</span>
							</p>

							<p>{{ comment.message }}</p>

							<span class="float-right">
								<span class="spinner-border spinner-border-sm mr-1 text-primary" role="status" :class="{ 'd-none': !loadingDeleteIndexes.includes(i) }"></span>
								<a href="#" @click="deleteComment(comment._id, i)" :style="{ display: loadingDeleteIndexes.includes(i) ? 'none' : 'block' }">{{ $t("button.delete") }}</a>
							</span>
						</li>
					</ul>
					<div v-else class="alert alert-primary" role="alert">
						{{ $t("alert.comment_list_empty") }}
					</div>
				</div>
			</template>

			<template #admin v-if="$store.state.user.roles && $store.state.user.roles.length > 0">
				<div class="border rounded-lg">
					<table class="table table-hover m-0">
						<thead class="thead-light">
							<tr>
								<th scope="col">{{ $t("text.level") }}</th>
								<th scope="col">{{ $t("text.type") }}</th>
								<th scope="col">{{ $t("text.details") }}</th>
							</tr>
						</thead>
						<tbody class="thead-light">
							<tr v-for="role in $store.state.user.roles" :key="role._id" class="clickable-row pointer" @click="redirect(role)">
								<td>{{ $t("role.level." + role.level) }}</td>
								<td>{{ $t("role.type." + role.type) }}</td>
								<td v-if="role.event">{{ role.event.name }}</td>
								<td v-else></td>
							</tr>
						</tbody>
					</table>
				</div>
			</template>
		</ListMenu>
	</Layout>
</template>

<script>
import Avataaars from "@/components/Avataaars"
import avataaars, { toLabel, toIndex } from "@/helpers/avataaars"
import Bloc from "@/components/Bloc"
import Label from "@/components/Label"
import ListMenu from "@/components/ListMenu"
import Layout from "@/components/Layout"
import StarRating from "vue-star-rating"
import Spinner from "@/components/Spinner"

export default {
	name: "Profile",
	route: {
		name: "profile",
		path: "profile",
		meta: { isSignedIn: true }
	},
	components: { Avataaars, Bloc, Label, ListMenu, StarRating, Layout, Spinner },
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
		email: null,
		verifyLinkSend: false,
		loadingDeleteIndexes: []
	}),
	async mounted() {
		this.firstName = this.$store.state.user.firstName
		this.lastName = this.$store.state.user.lastName
		this.locale = this.$store.state.user.locale
		this.email = this.$store.state.user.email

		const splittedAvataaarId = this.$store.state.user.avatar.split("-")
		avataaars.order.id.forEach((name, index) => {
			this.avatar[name] = toLabel(name, splittedAvataaarId[index])
		})

		this.$store.dispatch("user/getComments")
	},
	computed: {
		avataaarId() {
			return avataaars.order.id.map((name, index) => toIndex(name, this.avatar[name])).join("-")
		}
	},
	methods: {
		async saveUser(event) {
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
		async saveAvatar(event) {
			event.preventDefault()
			this.loading = true

			await this.$store.dispatch("user/updateAvatar", {
				avatar: this.avataaarId
			})

			this.loading = false
			return
		},
		sendVerifyLink() {
			this.$store.dispatch("user/getVerify")
			this.verifyLinkSend = true
		},
		redirect(role) {
			switch (role.type) {
				case "GLOBAL":
					this.$router.push("/admin")
					break

				default:
					break
			}
		},
		async deleteComment(commentId, i) {
			this.loadingDeleteIndexes.push(i)
			await this.$store.dispatch("user/deleteComment", commentId)
			this.$store.dispatch("alert/open", { type: "success", message: "comment_deleted" })

			const index = this.loadingDeleteIndexes.indexOf(i)
			if (index > -1) {
				this.loadingDeleteIndexes.splice(index, 1)
			}
		}
	}
}
</script>

<style scoped>
.avatar {
	width: 30rem;
}
</style>
