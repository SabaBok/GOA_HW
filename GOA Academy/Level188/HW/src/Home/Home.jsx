import Header from '../Components/Header'
import Hero from './Hero'
import Menu from './Menu'
import Order from './Order'
import Receive from './Receive'

export default function Home() {
	return (
		<section className='w-full min-h-screen bg-[#12372A] text-white'>
			<Header/>

			<main className='px-10 flex flex-col gap-20 py-25'>
				<Hero />
				<Order/>
				<Receive/>
			</main>

			<footer></footer>
		</section>
	)
}
