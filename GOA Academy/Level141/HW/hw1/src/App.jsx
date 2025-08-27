import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<header>
				<h1>news web</h1>
				<p>good news</p>
				<a href="#">Source</a>
			</header>
			<body>
				<section>
					<article>he died</article>
					<article>he resurected</article>
					<article>he ate</article>
					<article>i killed</article>
				</section>

				<section>
					<i>liked it?</i>
					<div>yes</div>
					<b>no</b>
				</section>
			</body>
		</>
	)
}

export default App
