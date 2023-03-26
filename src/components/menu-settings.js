import Sourse from '../assets/settings-icon.svg'

export default function Settings() {
	function openSettings() {
		console.log('Open Settings!')
	}

	return (
		<button className="m-settings click-effect" onClick={openSettings}>
			<img src={Sourse} style={{width: '2rem', height: '2rem'}} />
		</button>
	)
}
