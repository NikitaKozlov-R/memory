export default function Button(props) {
	const color = props.color || 'black'
	const bgColor = props.bgColor ? `var(${props.bgColor})` : `var(--m-primary-background)`
	const text = props.value || 'Enter Button Text'

	return (
		<button
			className="m-menu__button click-effect"
			style={{color: color, backgroundColor: bgColor}}
			onClick={props.onClick}
		>
			{text}
		</button>
	)
}
