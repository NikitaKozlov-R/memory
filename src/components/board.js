import shuffleCards from '../utils'

import AlienImage from '../assets/alien.svg'
import AmbulanceImage from '../assets/ambulance.svg'
import AppleImage from '../assets/apple.svg'
import AtomImage from '../assets/atom.svg'
import BallImage from '../assets/ball.svg'
import BalloonImage from '../assets/balloon.svg'
import BatImage from '../assets/bat.svg'
import JoystickImage from '../assets/joystick.svg'

export default function Board() {
	const cards = ['alien', 'ambulance', 'apple', 'atom', 'ball', 'balloon', 'bat', 'joystick']
	const shuffledCards = shuffleCards(cards)
	const imagesMapper = {
		'alien': AlienImage,
		'ambulance': AmbulanceImage,
		'apple': AppleImage,
		'atom': AtomImage,
		'ball': BallImage,
		'balloon': BalloonImage,
		'bat': BatImage,
		'joystick': JoystickImage,
	}

	const cardsList = shuffledCards.map((card, index) => {
		const cardSourse = imagesMapper[card]
		return (
			<div className="m-card" name={card} key={index}>
				<img src={cardSourse} />
			</div>
		)
	})

	return <div className="m-board">{cardsList}</div>
}
