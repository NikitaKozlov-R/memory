import Menu from './components/menu'
import Board from './components/board'
import Info from './components/info'

export default function Game() {
	return (
		<div className="m-wrapper">
			<Menu />
			<Board />
			<Info />
		</div>
	)
}
