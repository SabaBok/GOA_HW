import {useState} from 'react'


export default function CheckOut() {
	const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('proj-orders')) || [])
	
	function orderFood(item) {
		let id = Date.now()

		const updated = accs.map(el => {
			if (el.logged) return { ...el, money: el.money - item.price, orders: [...el.orders, { ...item, id }] }
			return el
		})
		setAccs(updated)
		localStorage.setItem('proj-acc', JSON.stringify(updated))

		setOrders(prev => {
			const newOrders = [...prev, { item, id }]
			localStorage.setItem('proj-orders', JSON.stringify(newOrders))
			return newOrders
		})
	}

	return (
		<section id='checkout' className='bg-[#00250f]'>

		</section>
	)
}
