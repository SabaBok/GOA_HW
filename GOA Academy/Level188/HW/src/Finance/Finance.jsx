import Transfers from './Transfers'
import Filtering from './Filtering'
import Header from '../Components/Header'

export default function Finance() {
	return (
		<section className='bg-[#121212]'>
			<Header />
			<main className='mt-30 flex flex-col items-center gap-10 max-sm:px-3 px-20 pb-5'>
				<Transfers />
				<Filtering />
			</main>
		</section>
	)
}
