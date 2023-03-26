import Logo from './menu-logo'
import Button from './menu-button'
import Settings from './menu-settings'

export default function Menu() {
	function RestartHandler() {
		console.log('Reset!')
	}

	function NewGameHandler() {
		console.log('New Game!')
	}

	return (
		<div className="m-menu">
			<Logo />
			<div className="m-menu-nav">
				<Button
					value={'Restart'}
					bgColor={'--m-secondary'}
					color={'white'}
					onClick={RestartHandler}
				/>
				<Button
					value={'New Game'}
					bgColor={'--m-primary-background'}
					color={'black'}
					onClick={NewGameHandler}
				/>
				<Settings />
			</div>
		</div>
	)
}
