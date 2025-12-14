import Header from '../Components/Header'
import Hero from './Hero'
import Menu from './Menu'
import Order from './Order.jsx'

export default function Home() {
	return (
		<section className='w-full min-h-screen bg-white text-black'>
			<Header/>

			<main className='flex flex-col gap-20 py-25'>
				<Hero />
				<Menu/>
			</main>

			<footer></footer>
		</section>
	)
}
