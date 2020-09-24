const options = {
	clothe_type: ["BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt", "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"],
	clothe_color: ["Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White"],
	graphic_type: ["Bat", "Cumbia", "Deer", "Diamond", "Hola", "Pizza", "Resist", "Selena", "Bear", "SkullOutline", "Skull"],
	skin_color: ["Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black"],
	eyebrow_type: ["Angry", "AngryNatural", "Default", "DefaultNatural", "FlatNatural", "RaisedExcited", "RaisedExcitedNatural", "SadConcerned", "SadConcernedNatural", "UnibrowNatural", "UpDown", "UpDownNatural"],
	eye_type: ["Close", "Cry", "Default", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side", "Squint", "Surprised", "Wink", "WinkWacky"],
	accessories_type: ["Blank", "Kurt", "Prescription01", "Prescription02", "Round", "Sunglasses", "Wayfarers"],
	mouth_type: ["Concerned", "Default", "Disbelief", "Eating", "Grimace", "Sad", "ScreamOpen", "Serious", "Smile", "Tongue", "Twinkle", "Vomit"],
	facial_hair_type: ["Blank", "BeardMedium", "BeardLight", "BeardMajestic", "MoustacheFancy", "MoustacheMagnum"],
	facial_hair_color: ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "PastelPink", "Platinum", "Red", "SilverGray"],
	top_type: ["NoHair", "Eyepatch", "Hat", "Hijab", "Turban", "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4", "LongHairBigHair", "LongHairBob", "LongHairBun", "LongHairCurly", "LongHairCurvy", "LongHairDreads", "LongHairFrida", "LongHairFro", "LongHairFroBand", "LongHairNotTooLong", "LongHairShavedSides", "LongHairMiaWallace", "LongHairStraight", "LongHairStraight2", "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"],
	hair_color: ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "PastelPink", "Platinum", "Red", "SilverGray"]
}

export function random() {
	return Object.values(options)
		.map(value => Math.floor(Math.random() * value.length))
		.join("-")
}

export function toLabel(option, index) {
	return options[option][index]
 }

export function toIndex(option, label) {
	return options[option].indexOf(label)
}

export default { options }
