import { useState } from 'react'


export default function Order() {
	const [accs, setAccs] = useState(JSON.parse(localStorage.getItem('proj-acc')) || [])
	const loggedAcc = accs.find(el => el.logged)
	const [cart, setCart] = useState(loggedAcc?.cart || [])
	const [showModal, setShowModal] = useState(false)
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

	const [count, setCount] = useState(1)

	function removeItem(item){
		
	}

	return (
		<div className='w-full flex justify-start'>
			<div className='flex items-center gap-4 border border-black rounded-lg px-3 py-1 mb-5 duration-200 hover:bg-[#cfcfcf] cursor-default' onClick={() => setShowModal(true)}>
				<i className="fa-solid fa-cart-shopping text-[13px] mt-[5px]"></i>
				<p>Cart</p>
			</div>

			<div id="blur" className={`${showModal ? 'fixed' : 'hidden'} duration-200 top-0 left-0 z-4 w-screen h-screen backdrop-blur-[1px] bg-[#0000005a]`} onClick={() => setShowModal(false)}></div>
			<div id="modal" className={`flex flex-col gap-2 ${showModal ? 'fixed scale-[1]' : 'hidden scale-[0.8]'} w-[90%] max-w-[400px] min-h-[200px] p-4 rounded-lg bg-white top-1/2 left-1/2 -translate-1/2 z-5`}>
				<div className='w-full flex justify-between'>
					<p>Shopping Cart</p>
					<i className="fa-solid fa-xmark cursor-pointer duration-200 hover:text-red-600" onClick={() => setShowModal(false)}></i>
				</div>

				<div>
					{
						cart.map((el, ind) => (
							<div className='p-1 border border-gray-300 rounded-lg flex justify-between items-center' key={ind}>
								<div>
									<p>{el.name}</p>
									<p>{el.price}₾</p>
								</div>

								<div className='flex gap-2'>
									<button className='px-3 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer' onClick={() => setCount(prev => prev - 1 > 0 ? prev - 1 : prev-1==0?removeItem(el):prev)}><span>-</span></button>
									<p>{count}</p>
									<button className='px-3 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer' onClick={() => setCount(prev => prev + 1)}><span>+</span></button>
								</div>
							</div>
						))
					}
				</div>

				<hr className='border-t-gray-300' />

				<div className='flex flex-col gap-2'>
					<p>Total: <span></span></p>

					<div className='flex gap-3'>
						<button className='rounded-lg w-full border border-[#85858576] py-1'>Clear Cart</button>
						<button className='bg-[#f54900] rounded-lg w-full py-1 text-white'>Place Order</button>
					</div>
				</div>
			</div>
		</div>
	)
}
