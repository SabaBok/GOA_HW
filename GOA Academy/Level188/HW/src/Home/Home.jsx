import Header from '../Components/Header'
import Hero from './Hero'
import Menu from './Menu'
import Contact from './Contact'

export default function Home() {
	//let idk = [
	//	{ name: "saba", email: "saba@gmail.com", pass: "bokuchava123", logged: true, orders: [], cart: [], money: 100, title: "user" },
	//	{ email: 'admin@gmail.com', pass: 'admin123', logged: false, name: 'The admin', title: 'admin', reservations: [], orders: [],  finances: {income:[],expense:[],money:0 },}
	//]
	//localStorage.setItem('proj-acc', JSON.stringify(idk))

	return (
		<section className='w-full min-h-screen bg-white text-black'>
			<Header />

			<main className='flex flex-col gap-20 py-25'>
				<Hero />
				<Menu />
			</main>

			<Contact />
		</section>
	)
}
