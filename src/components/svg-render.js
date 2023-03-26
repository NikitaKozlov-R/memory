export default function Image(props) {
	const sourse = props.sourse || ''
	const width = props.width ? props.width + 'rem' : '1.5rem'
	const height = props.height ? props.height + 'rem' : '1.5rem'
	const color = props.color || 'black'

	return <img className="m-image--svg" src={sourse} color={color} />
}
