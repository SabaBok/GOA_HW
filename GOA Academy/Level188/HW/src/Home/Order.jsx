import { useState, memo, useEffect } from 'react'
import AlertModal from '../Components/AlertModal'

export default function Order({ accs, setAccs }) {
	const [showModal, setShowModal] = useState(false)
	const [alertText,setAlertText] = useState('')

	let loggedAcc = [...accs].find(el => el.logged && el.title == 'user')
	const adminglogged = [...accs].find(el => el.title == 'admin' && el.logged == true)
	if (adminglogged) return <p>Admin Cant Order</p>
	let cart = loggedAcc?.cart
	const [total, setTotal] = useState(0)

	//let admin1 = accs.find(el => el.title == 'admin')
	//admin1.orders = []
	//admin1.finances={
	//	income:[],
	//	expense:[],
	//	money:0
	//}
	//admin1.money = 100

	//let idk = accs.find(el => el.logged && el.title == 'user')
	//idk.cart = []
	//idk.money = 1000
	//idk.orders = []
	//localStorage.setItem('proj-acc', JSON.stringify(accs))

	const OrderItem = memo(({ el }) => {
		const [count, setCount] = useState(el.ammount)

		return (
			<div onClick={() => removeItem(el)} className='mx-2 p-1 border border-gray-300 rounded-lg flex justify-between items-center duration-300 hover:border-[#ff0000] hover:scale-[1.01] cursor-pointer'>
				<div>
					<p>{el.name}</p>
					<p>{el.price}₾</p>
				</div>

				<div className='flex gap-2 pr-3'>
					<p>Amount:{count}</p>
				</div>
			</div>
		)
	})

	function generateTimeNow() {
		const today = new Date()
		const year = today.getFullYear()
		const mm = String(today.getMonth() + 1).padStart(2, '0')
		const dd = String(today.getDate()).padStart(2, '0')

		return `${year}-${mm}-${dd}`
	}
	function orderFood(items) {
		if (!items || !items.length) return

		const loggedUserIndex = accs.findIndex(acc => acc.logged && acc.title === 'user')
		if (loggedUserIndex === -1) return

		const adminIndex = accs.findIndex(acc => acc.title === 'admin')
		if (adminIndex === -1) return

		const expandedItems = []
		items.forEach(item => {
			const count = item.ammount || 1
			for (let i = 0; i < count; i++) {
				expandedItems.push({
					name: item.name,
					price: Number(item.price),
					customer: {
						name: accs[loggedUserIndex].name,
						email: accs[loggedUserIndex].email
					},
					date: generateTimeNow(),
					type: 'income',
					category: 'food sale'
				})
			}
		})

		const totalPrice = expandedItems.reduce((sum, i) => sum + Number(i.price), 0)

		const updatedAccounts = accs.map((acc, idx) => {
			if (idx === loggedUserIndex) {
				return {
					...acc,
					money: (acc.money ?? 0) - totalPrice,
					cart: [],
					orders: [...(acc.orders || []), ...expandedItems]
				}
			}

			if (idx === adminIndex) {
				return {
					...acc,
					orders: [...(acc.orders || []), ...expandedItems],
					finances: {
						...acc.finances,
						money: (acc.finances?.money ?? 0) + totalPrice * 0.8,
						income: [...(acc.finances?.income || []), ...expandedItems]
					}
				}
			}

			return acc
		})

		setAccs(updatedAccounts)
		localStorage.setItem('proj-acc', JSON.stringify(updatedAccounts))
		setShowModal(false)
		setAlertText('You have ordered')
	}


	function clearCart() {
		const updated = [...accs].map(el => {
			if (el.logged && el.title == 'user') return { ...el, cart: [] }
			return el
		})
		setAccs(updated)
		localStorage.setItem('proj-acc', JSON.stringify(updated))
	}

	function removeItem(item) {
		const updatedAccounts = accs.map(acc => {
			if (acc.logged && acc.title === 'user') return { ...acc, cart: acc.cart.filter(el => el !== item) }
			return acc
		})

		setAccs(updatedAccounts)
		localStorage.setItem('proj-acc', JSON.stringify(updatedAccounts))
	}

	function calcTotal() {
		let tot = 0
		cart?.forEach(el => tot += Number((Number(el.price) * el.ammount).toFixed(2)))
		setTotal(tot.toFixed(2))
	}
	useEffect(() => calcTotal(), [cart])
	useEffect(()=>{loggedAcc = [...accs].find(el => el.logged && el.title == 'user'); cart = loggedAcc?.cart},[])

	return (
		<div className='w-full flex justify-start'>
			<AlertModal message={alertText} onClose={()=>setAlertText('')}/>
			
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

				<div className='flex flex-col gap-3 max-h-[400px] overflow-y-scroll'>
					{
						!adminglogged?  cart?.map((el, ind) => (
							<OrderItem el={el} key={ind}></OrderItem>
						)): <p>Admin Cant Order</p>
					}
				</div>

				<hr className='border-t-gray-300' />

				<div className='flex flex-col gap-2'>
					<p className='flex items-center w-full justify-between px-1'>Total: <span>{total}₾</span></p>

					<div className='flex gap-3'>
						<button className='rounded-lg w-full border border-[#85858576] py-1 cursor-pointer' onClick={() => clearCart()}>Clear Cart</button>
						<button className='bg-[#f54900] rounded-lg w-full py-1 text-white cursor-pointer' onClick={() => orderFood(cart)}>Place Order</button>
					</div>
				</div>
			</div>
		</div>
	)
}
