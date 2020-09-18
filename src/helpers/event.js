const options = {
	sport: {
		RUN: {
			discipline: [],
			distance: ["10K", "21K", "42K", "OTHER", "TRAIL"]
		},
		TRI: {
			discipline: ["ANIM", "AQUA", "BIKE_RUN", "CROSS_DUA", "CROSS_TRI", "CYCLE_RUN", "DUA", "DUA_SNOW", "PARA_TRI", "RAID", "SWIM_BIKE", "SWIM_RUN", "TRI", "TRI_SNOW"],
			distance: ["KIDS1", "KIDS2", "KIDS3", "KIDS4", "XS", "S", "M", "L", "XL", "XXL", "OTHER"]
		}
	},
	format: ["SOLO", "RELAY", "TEAM", "TEAM_TT", "TT"]
}

function sport() {
	return Object.keys(options.sport)
}

function discipline(sport) {
	if (!sport) return
	return options.sport[sport].discipline
}

function distance(sport) {
	if (!sport) return
	return options.sport[sport].distance
}

function format() {
	return options.format
}

export default { sport, discipline, distance, format }
