export default function shuffleCards(cards) {
	let shuffledCards = []
	cards.forEach(card => shuffledCards.push(card, card))

	let currentIndex = shuffledCards.length
	let randomIndex

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		;[shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
			shuffledCards[randomIndex],
			shuffledCards[currentIndex],
		]
	}

	return shuffledCards
}
