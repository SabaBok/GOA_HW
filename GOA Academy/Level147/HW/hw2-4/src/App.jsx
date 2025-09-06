import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import User from './User'
import Container from './Container'
import Card from './Card'
function App() {

	return (
		<div>
			{/* users */}
			<User name="Nino" bio="Frontend Developer" age={25} />
			<User name="Giorgi" />
			<User name="Mariam" bio="Designer" />
			<User name="Lasha" age={30} />

			{/* container */}
			<Container>
				<button>container child</button>
			</Container>

			{/* card */}
			<Card>
				<h2>Card with no Margin</h2>
				<p>This card has 0px top margin.</p>
			</Card>

			<Card topMargin={true}>
				<h2>Card with Default Margin</h2>
				<p>This card has 10px top margin.</p>
			</Card>

			<Card topMargin={true} marginAmount={30}>
				<h2>Card with Custom Margin</h2>
				<p>This card has 30px top margin.</p>
			</Card>
		</div>
	)
}

export default App
