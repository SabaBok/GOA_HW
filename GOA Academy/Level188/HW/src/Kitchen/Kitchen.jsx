import Header from '../Components/Header'
import KitchenLeft from './KitchenLeft'
import KitchenRight from './KitchenRight'

export default function Kitchen() {
	return (
		<section className='bg-[#121212] text-white min-h-screen'>
			<Header />

			<main className='mt-[100px] flex max-md:flex-col justify-between gap-5 p-5'>
				<KitchenLeft />

				<KitchenRight />
			</main>
		</section>
	)
}