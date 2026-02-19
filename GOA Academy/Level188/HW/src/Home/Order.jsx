import { useState, memo, useEffect } from 'react'
import AlertModal from '../Components/AlertModal'
import { useContext } from 'react'
import { FoodItems } from '../FullPage'

export default function Order() {
	const { accs, setAccs, loggedUser, admin, setAdmin } = useContext(FoodItems)
	const [showModal, setShowModal] = useState(false)
	const [alertText, setAlertText] = useState('')

	let cart = loggedUser?.cart || []
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const sum = cart.reduce((acc, el) => acc + (el.price * el.ammount), 0)
		setTotal(sum)
	}, [cart])

	const OrderItem = memo(({ el }) => {

		function updateAmount(newAmount) {
			const updated = accs.map(acc => {
				if (acc.email === loggedUser.email) {
					const updatedCart = acc.cart.map(item =>
						item.name === el.name
							? { ...item, ammount: newAmount }
							: item
					)
					return { ...acc, cart: updatedCart }
				}
				return acc
			})

			setAccs(updated)
		}

		function removeItem() {
			const updated = accs.map(acc => {
				if (acc.email === loggedUser.email) {
					return {
						...acc,
						cart: acc.cart.filter(item => item.name !== el.name)
					}
				}
				return acc
			})
			setAccs(updated)
		}

		return (
			<div className='flex justify-between'>
				<div>
					<p className='font-bold'>{el.name}</p>
					<p>{el.price}₾ x {el.ammount}</p>
				</div>

				<div className='flex gap-3 pr-3 items-center'>
					<p>{el.ammount}</p>
					<button onClick={() => updateAmount(Math.max(1, el.ammount - 1))} className='duration-250 hover:bg-gray-500 rounded-lg px-1.5 py-1 cursor-pointer'>Remove</button>
					<button onClick={removeItem} className='duration-250 hover:bg-[#ff333375] rounded-lg px-1.5 py-1 cursor-pointer'>Delete</button>
					<button onClick={() => updateAmount(el.ammount + 1)} className='duration-250 hover:bg-gray-500 rounded-lg px-1.5 py-1 cursor-pointer'>Add</button>
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

	function clearCart() {
		const updated = accs.map(acc => {
			if (acc.email === loggedUser.email) {
				return { ...acc, cart: [] }
			}
			return acc
		})
		setAccs(updated)
		setAlertText('Cart cleared')
	}

	function orderFood() {
		if (total > loggedUser.money) {
			setAlertText('Insufficient funds')
			return
		}

		const date = generateTimeNow()
		const orderedItems = cart.map(item => ({
			...item,
			date,
			type: 'income',
			category: 'Order',
			customer: { email: loggedUser.email }
		}))

		const updatedUser = {
			...loggedUser,
			orders: [...loggedUser.orders, ...orderedItems],
			cart: [],
			money: Number((loggedUser.money - total).toFixed(2))
		}

		const updatedAdmin = {
			...admin,
			orders: [...admin.orders, ...orderedItems],
			finances: {
				...admin.finances,
				income: [...admin.finances.income, ...orderedItems],
				money: Number((admin.finances.money + total).toFixed(2))
			}
		}

		const updatedAccs = accs.map(acc => {
			if (acc.email === loggedUser.email) return updatedUser
			if (acc.title === 'admin') return updatedAdmin
			return acc
		})

		setAccs(updatedAccs)
		setAdmin(updatedAdmin)
		setShowModal(false)
		setAlertText('Order placed!')
	}

	return (
		<div className='w-full flex justify-start m-3'>
			<AlertModal message={alertText} onClose={() => setAlertText('')} />
			<div className='cursor-pointer duration-200 flex items-center gap-2 px-2 py-1 rounded-lg bg-[#e53e3e] hover:bg-[#c53030] text-white' onClick={() => setShowModal(true)}>
				<i className="fa-solid fa-shopping-cart"></i> Cart ({cart.length})
			</div>

			<div className={`${showModal ? 'fixed' : 'hidden'} top-0 left-0 w-screen h-screen backdrop-blur bg-[#0000005a] z-40`} onClick={() => setShowModal(false)}></div>
			<div className={`${showModal ? 'fixed' : 'hidden'} flex flex-col justify-between w-[95%] max-w-[500px] min-h-[300px] p-4 rounded-lg bg-[#1e1e1e] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 border border-[#4a4a4a]`}>
				<div className='flex justify-between text-white mb-4'>
					<p className='font-bold text-lg'>Shopping Cart</p>
					<i className="fa-solid fa-xmark cursor-pointer hover:text-red-500" onClick={() => setShowModal(false)}></i>
				</div>

				<div className='flex flex-col gap-3 max-h-[400px] overflow-y-auto'>
					{cart.map((el, ind) => <OrderItem key={ind} el={el} />)}
				</div>

				<hr className='my-4 border-[#4a4a4a]' />

				<div className='flex flex-col gap-2 text-white'>
					<p className='flex justify-between'>Total: <span>{total.toFixed(2)}₾</span></p>
					<div className='flex gap-3'>
						<button onClick={clearCart} className='flex-1 rounded-lg border border-[#4a4a4a] py-2 hover:bg-[#3a3a3a]'>Clear Cart</button>
						<button onClick={orderFood} className='flex-1 bg-[#e53e3e] rounded-lg py-2 hover:bg-[#c53030]'>Place Order</button>
					</div>
				</div>
			</div>
		</div>
	)
}