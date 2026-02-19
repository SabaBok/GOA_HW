import { useState, useContext, memo } from 'react'
import { FoodItems } from '../FullPage'
import AlertModal from '../Components/AlertModal'

export default function KitchenLeft() {
	const { admin, food, accs, setAccs, setAdmin } = useContext(FoodItems)
	let adminOrders = [...admin.orders]

	const [alertText, setAlertText] = useState('')

	const OrderBlock = memo(({ el }) => {
		const foodObject = food.find(item => item.name === el.name)

		return (
			<div className='flex flex-col justify-between rounded-lg border border-[#4a4a4a] h-[370px] w-[200px] bg-[#2a2a2a] text-white'>
				<img src={foodObject?.imageURL || `/images/Foods/${el.name}.jpg`} alt="Order Image" className='rounded-t-lg h-1/2 min-w-[200px] object-cover' />
				<div className='flex flex-col h-1/2 rounded-b-lg justify-between items-start p-3 gap-2'>
					<p className='font-bold'>{el.name}</p>
					<p>${el.price}</p>
					<p className='capitalize'>{el.category}</p>
					<p>{el.date}</p>
					<button className='px-3 py-1 rounded-lg bg-orange-500 cursor-pointer duration-200 hover:bg-orange-600 w-full' onClick={() => startOrder(el)}>Cook Order</button>
				</div>
			</div>
		)
	})

	function startOrder(item) {
		const user = accs.find(el => el.email === item.customer.email)

		if (!user) {
			setAlertText('User not found')
			return
		}

		const userOrders = [...user.orders]
		const userIndex = userOrders.findIndex(order => order.name === item.name && order.date === item.date)
		if (userIndex !== -1) {
			userOrders.splice(userIndex, 1)
		}

		const updatedUser = {
			...user,
			orders: userOrders,
			finishedOrders: [...user.finishedOrders, item]
		}

		const adminOrders = [...admin.orders]
		const adminIndex = adminOrders.findIndex(order => order.name === item.name && order.date === item.date)
		if (adminIndex !== -1) {
			adminOrders.splice(adminIndex, 1)
		}

		const updatedAdmin = {
			...admin,
			orders: adminOrders,
			finishedOrders: [...admin.finishedOrders, item],
			finances: {
				...admin.finances,
				expense: [...admin.finances.expense, { ...item, type: 'expense', category: 'Cooking Cost' }],
				money: Number((admin.finances.money - (item.price * 0.6)).toFixed(2))
			}
		}

		const updatedAccs = accs.map(acc => {
			if (acc.email === user.email) return updatedUser
			if (acc.title === 'admin') return updatedAdmin
			return acc
		})

		setAccs(updatedAccs)
		setAdmin(updatedAdmin)
		setAlertText('Order has been cooked and moved to finished')
	}

	return (
		<div className='flex-1 flex flex-col items-center gap-8 p-5'>
			<h1 className='text-[35px] font-bold text-white'>Pending Orders</h1>
			<AlertModal message={alertText} duration={4000} onClose={() => setAlertText('')} />
			<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center items-center px-5 gap-5 max-h-[600px] overflow-y-scroll'>
				{
					adminOrders.map((el, ind) => (
						<OrderBlock key={ind} el={el} />
					))
				}
			</div>
		</div>
	)
}