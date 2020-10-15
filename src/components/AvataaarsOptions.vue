<template>
	<div>
		<div class="form-group">
			<Label for="clothe_type" text="clothe_type" required />
			<select id="clothe_type" class="form-control" required v-model="clothe_type">
				<option v-for="option in avataaarsHelper.options.clothe_type" :key="option" :value="option">
					{{ $t("avatar.clothe_type." + option) }}
				</option>
			</select>
		</div>
		<div v-if="['CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'].includes(clothe_type)" class="form-group">
			<Label for="clothe_color" text="clothe_color" required />
			<select id="clothe_color" class="form-control" required v-model="clothe_color">
				<option v-for="option in avataaarsHelper.options.clothe_color" :key="option" :value="option">
					{{ $t("avatar.clothe_color." + option) }}
				</option>
			</select>
		</div>
		<div v-if="'GraphicShirt' === clothe_type" class="form-group">
			<Label for="graphic_type" text="graphic_type" required />
			<select id="graphic_type" class="form-control" required v-model="graphic_type">
				<option v-for="option in avataaarsHelper.options.graphic_type" :key="option" :value="option">
					{{ $t("avatar.graphic_type." + option) }}
				</option>
			</select>
		</div>
		<div class="form-group">
			<Label for="skin_color" text="skin_color" required />
			<select id="skin_color" class="form-control" required v-model="skin_color">
				<option v-for="option in avataaarsHelper.options.skin_color" :key="option" :value="option">
					{{ $t("avatar.skin_color." + option) }}
				</option>
			</select>
		</div>
		<div class="form-group">
			<Label for="eyebrow_type" text="eyebrow_type" required />
			<select id="eyebrow_type" class="form-control" required v-model="eyebrow_type">
				<option v-for="option in avataaarsHelper.options.eyebrow_type" :key="option" :value="option">
					{{ $t("avatar.eyebrow_type." + option) }}
				</option>
			</select>
		</div>
		<div class="form-group">
			<Label for="eye_type" text="eye_type" required />
			<select id="eye_type" class="form-control" required v-model="eye_type">
				<option v-for="option in avataaarsHelper.options.eye_type" :key="option" :value="option">
					{{ $t("avatar.eye_type." + option) }}
				</option>
			</select>
		</div>
		<div class="form-group">
			<Label for="accessories_type" text="accessories_type" required />
			<select id="accessories_type" class="form-control" required v-model="accessories_type">
				<option v-for="option in avataaarsHelper.options.accessories_type" :key="option" :value="option">
					{{ $t("avatar.accessories_type." + option) }}
				</option>
			</select>
		</div>
		<div class="form-group">
			<Label for="mouth_type" text="mouth_type" required />
			<select id="mouth_type" class="form-control" required v-model="mouth_type">
				<option v-for="option in avataaarsHelper.options.mouth_type" :key="option" :value="option">
					{{ $t("avatar.mouth_type." + option) }}
				</option>
			</select>
		</div>
		<div class="form-group">
			<Label for="facial_hair_type" text="facial_hair_type" required />
			<select id="facial_hair_type" class="form-control" required v-model="facial_hair_type">
				<option v-for="option in avataaarsHelper.options.facial_hair_type" :key="option" :value="option">
					{{ $t("avatar.facial_hair_type." + option) }}
				</option>
			</select>
		</div>
		<div v-if="'Blank' !== facial_hair_type" class="form-group">
			<Label for="facial_hair_color" text="facial_hair_color" required />
			<select id="facial_hair_color" class="form-control" required v-model="facial_hair_color">
				<option v-for="option in avataaarsHelper.options.facial_hair_color" :key="option" :value="option">
					{{ $t("avatar.facial_hair_color." + option) }}
				</option>
			</select>
		</div>
		<div class="form-group">
			<Label for="top_type" text="top_type" required />
			<select id="top_type" class="form-control" required v-model="top_type">
				<option v-for="option in avataaarsHelper.options.top_type" :key="option" :value="option">
					{{ $t("avatar.top_type." + option) }}
				</option>
			</select>
		</div>
		<div v-if="!['NoHair', 'Eyepatch', 'Hat', 'Hijab', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4', 'LongHairFrida', 'LongHairShavedSides'].includes(top_type)" class="form-group">
			<Label for="hair_color" text="hair_color" required />
			<select id="hair_color" class="form-control" required v-model="hair_color">
				<option v-for="option in avataaarsHelper.options.hair_color" :key="option" :value="option">
					{{ $t("avatar.hair_color." + option) }}
				</option>
			</select>
		</div>
	</div>
</template>

<script>
import avataaarsHelper, { toLabel, toIndex, orderIndex } from "@/helpers/avataaars"
import Label from "@/components/Label"

export default {
	components: { Label },
	props: {
		value: { type: String, default: "4-4-14-2-2-5-2-0-0-8-3-0" }
	},
	data: () => ({
		avataaarsHelper
	}),
	// avataaarsHelper.order.id.map((name, index) => toIndex(name, this.avatar[name])).join("-")
	// this.$emit("input", avataaarId)
	computed: {
		accessories_type: {
			get() {
				return this.getValue("accessories_type")
			},
			set(value) {
				this.$emit("input", this.setValue("accessories_type", value))
			}
		},
		clothe_type: {
			get() {
				return this.getValue("clothe_type")
			},
			set(value) {
				this.$emit("input", this.setValue("clothe_type", value))
			}
		},
		clothe_color: {
			get() {
				return this.getValue("clothe_color")
			},
			set(value) {
				this.$emit("input", this.setValue("clothe_color", value))
			}
		},
		eyebrow_type: {
			get() {
				return this.getValue("eyebrow_type")
			},
			set(value) {
				this.$emit("input", this.setValue("eyebrow_type", value))
			}
		},
		eye_type: {
			get() {
				return this.getValue("eye_type")
			},
			set(value) {
				this.$emit("input", this.setValue("eye_type", value))
			}
		},
		facial_hair_color: {
			get() {
				return this.getValue("facial_hair_color")
			},
			set(value) {
				this.$emit("input", this.setValue("facial_hair_color", value))
			}
		},
		facial_hair_type: {
			get() {
				return this.getValue("facial_hair_type")
			},
			set(value) {
				this.$emit("input", this.setValue("facial_hair_type", value))
			}
		},
		graphic_type: {
			get() {
				return this.getValue("graphic_type")
			},
			set(value) {
				this.$emit("input", this.setValue("graphic_type", value))
			}
		},
		hair_color: {
			get() {
				return this.getValue("hair_color")
			},
			set(value) {
				this.$emit("input", this.setValue("hair_color", value))
			}
		},
		mouth_type: {
			get() {
				return this.getValue("mouth_type")
			},
			set(value) {
				this.$emit("input", this.setValue("mouth_type", value))
			}
		},
		skin_color: {
			get() {
				return this.getValue("skin_color")
			},
			set(value) {
				this.$emit("input", this.setValue("skin_color", value))
			}
		},
		top_type: {
			get() {
				return this.getValue("top_type")
			},
			set(value) {
				this.$emit("input", this.setValue("top_type", value))
			}
		}
	},
	methods: {
		idNullSafe() {
			return this.value || ""
		},
		getValue(option) {
			return toLabel(option, this.idNullSafe().split("-")[orderIndex(option)])
		},
		setValue(option, value) {
			const splittedId = this.idNullSafe().split("-")
			splittedId[orderIndex(option)] = toIndex(option, value)
			return splittedId.join("-")
		}
	},
	i18n: {
		messages: {
			fr: {
				avatar: {
					accessories_type: {
						Blank: "Sans accessoires",
						Kurt: "Kurt Cobain",
						Prescription01: "Lunettes",
						Prescription02: "Lunettes bis",
						Round: "Lunettes rondes",
						Sunglasses: "Lunettes de soleil",
						Wayfarers: "Wayfarers"
					},
					clothe_type: {
						BlazerShirt: "Blazer et t-shirt",
						BlazerSweater: "Blazer et pull",
						CollarSweater: "Pull et chemise",
						GraphicShirt: "T-shirt avec logo",
						Hoodie: "Sweat à capuche",
						Overall: "Salopette",
						ShirtCrewNeck: "T-shirt col rond",
						ShirtScoopNeck: "T-shirt col large",
						ShirtVNeck: "T-shirt col V"
					},
					clothe_color: {
						Black: "Noir",
						Blue01: "Bleu clair",
						Blue02: "Bleu",
						Blue03: "Bleu foncé",
						Gray01: "Gris clair",
						Gray02: "Gris foncé",
						Heather: "Bleu nuit",
						PastelBlue: "Bleu pastel",
						PastelGreen: "Vert pastes",
						PastelOrange: "Orange pastel",
						PastelRed: "Rouge pastel",
						PastelYellow: "Jaune pastel",
						Pink: "Rose",
						Red: "Rouge",
						White: "Blanc"
					},
					eyebrow_type: {
						Angry: "En colère fin",
						AngryNatural: "En colère",
						Default: "Défaut fin",
						DefaultNatural: "Défaut",
						FlatNatural: "Plat",
						RaisedExcited: "Relevés d'excitation fins",
						RaisedExcitedNatural: "Relevés d'excitation",
						SadConcerned: "Préoccupés fins",
						SadConcernedNatural: "Préoccupés",
						UnibrowNatural: "Mono sourcil",
						UpDown: "Haut-bas fins",
						UpDownNatural: "Haut-bas"
					},
					eye_type: {
						Close: "Fermés",
						Cry: "Pleurent",
						Default: "Défaut",
						Dizzy: "Vertige",
						EyeRoll: "Roulement des yeux",
						Happy: "Joyeux",
						Hearts: "Cœurs",
						Side: "Côtés",
						Squint: "Suspicieux",
						Surprised: "Surpris",
						Wink: "Clin d'œil",
						WinkWacky: "Clin d'œil farfelu"
					},
					facial_hair_color: {
						Auburn: "Auburn",
						Black: "Noir",
						Blonde: "Blond",
						BlondeGolden: "Doré",
						Brown: "Brun",
						BrownDark: "Brun foncé",
						PastelPink: "Rose",
						Platinum: "Platine",
						Red: "Rouge",
						SilverGray: "Gris"
					},
					facial_hair_type: {
						Blank: "Imberbe",
						BeardMedium: "Barbe moyenne",
						BeardLight: "Barbe légère",
						BeardMajestic: "Barbe majestueuse",
						MoustacheFancy: "Moustache fantaisie",
						MoustacheMagnum: "Moustache Magnum"
					},
					graphic_type: {
						Bat: "Chauve-souris",
						Cumbia: "Cumbia",
						Deer: "Renne",
						Diamond: "Diamand",
						Hola: "Hola",
						Pizza: "Pizza",
						Resist: "Resist",
						Selena: "Selena",
						Bear: "Ours",
						SkullOutline: "Contour de crâne",
						Skull: "Crâne"
					},
					hair_color: {
						Auburn: "Auburn",
						Black: "Noir",
						Blonde: "Blond",
						BlondeGolden: "Doré",
						Brown: "Brun",
						BrownDark: "Brun foncé",
						PastelPink: "Rose",
						Platinum: "Platine",
						Red: "Rouge",
						SilverGray: "Gris"
					},
					mouth_type: {
						Concerned: "Concernée",
						Default: "Défaut",
						Disbelief: "Incrédule",
						Eating: "Mange",
						Grimace: "Grimace",
						Sad: "Triste",
						ScreamOpen: "Crie",
						Serious: "Sérieuse",
						Smile: "Sourit bouche ouverte",
						Tongue: "Tire la langue",
						Twinkle: "Sourit",
						Vomit: "Vomit"
					},
					skin_color: {
						Tanned: "Tannée",
						Yellow: "Jaune",
						Pale: "Pâle",
						Light: "Claire",
						Brown: "Marron",
						DarkBrown: "Marron foncé",
						Black: "Noir"
					},
					top_type: {
						NoHair: "Chauve",
						Eyepatch: "Cache-œil",
						Hat: "Chapeau",
						Hijab: "Hijab",
						Turban: "Turban",
						WinterHat1: "Chapska",
						WinterHat2: "Bonnet péruvien",
						WinterHat3: "Bonnet à pompon",
						WinterHat4: "Bonnet chat",
						LongHairBigHair: "Cheveux longs et épais",
						LongHairBob: "Carré longs",
						LongHairBun: "Chignon",
						LongHairCurly: "Cheveux longs bouclés",
						LongHairCurvy: "Cheveux longs ondulés",
						LongHairDreads: "Dreadlocks",
						LongHairFrida: "Frida Kahlo",
						LongHairFro: "Afro",
						LongHairFroBand: "Afro et bandeau",
						LongHairNotTooLong: "Cheveux longs",
						LongHairShavedSides: "Cheveux longs côtés rasés",
						LongHairMiaWallace: "Mia Wallace",
						LongHairStraight: "Cheveux raides",
						LongHairStraight2: "Cheveux longs lisses",
						LongHairStraightStrand: "Cheveux longs et droits",
						ShortHairDreads01: "Dreadlocks courtes",
						ShortHairDreads02: "Dreadlocks courtes bis",
						ShortHairFrizzle: "Houppette",
						ShortHairShaggyMullet: "Mulet",
						ShortHairShortCurly: "Cheveux courts et bouclés",
						ShortHairShortFlat: "Cheveux courts plats",
						ShortHairShortRound: "Cheveux courts arrondis",
						ShortHairShortWaved: "Cheveux courts ondulés",
						ShortHairSides: "Calvitie",
						ShortHairTheCaesar: "Cheveux César",
						ShortHairTheCaesarSidePart: "Cheveux César marqués au rasoir"
					}
				}
			}
		}
	}
}
</script>

<style scoped></style>
