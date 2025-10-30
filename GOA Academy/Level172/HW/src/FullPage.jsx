import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function FullPage() {
	return (
		<section className='flex flex-col justify-between min-h-screen h-full gap-10'>
			<Header></Header>

			<Outlet></Outlet>

			<Footer></Footer>
		</section>
	)
}
