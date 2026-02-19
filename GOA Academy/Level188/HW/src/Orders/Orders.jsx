import Header from '../Components/Header'
import LeftOrder from './LeftOrder'
import RightOrder from './RightOrder'

export default function Orders() {
	return (
		<section className='bg-[#121212] text-white min-h-screen'>
			<Header />

			<main className='mt-[100px] flex max-md:flex-col justify-between gap-5 p-5'>
				<LeftOrder />

				<RightOrder />
			</main>
		</section>
	)
}