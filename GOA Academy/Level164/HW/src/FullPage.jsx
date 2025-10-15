import {Outlet} from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
export default function FullPage() {
	return (
		<section>
			<Header></Header>
			
			<Outlet></Outlet>

			<Footer></Footer>
		</section>
	)
}
