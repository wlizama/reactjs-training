export const randonChoose = choices => {
	const index = Math.floor(Math.random() * choices.length)
	return choices[index]
}

export const randonAvatar = ()  => {
	const rdGen = randonChoose(['men', 'women'])
	const rdIdx = parseInt(Math.random()*100)
	return `https://randomuser.me/api/portraits/thumb/${rdGen}/${rdIdx}.jpg`
}