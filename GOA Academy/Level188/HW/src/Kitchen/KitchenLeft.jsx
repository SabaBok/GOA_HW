import { useState, useContext, memo } from 'react'
import { FoodItems } from '../FullPage'
import AlertModal from '../Components/AlertModal'

export default function KitchenLeft() {
	const { admin, food, accs, setAccs, setAdmin } = useContext(FoodItems)
	let adminOrders = [...admin.orders]

	const [alertText, setAlertText] = useState('')

	const OrderBlock = memo(({ el }) => {
		let foodObject = [...food].find(item => item.img && el.name == item.name) || `/images/Foods/${el.name}`

		return (
			<div className='flex flex-col justify-between rounded-lg border border-gray-600 h-[370px] w-[200px]'>
				<img src={foodObject.img || `/images/Foods/${el.name}.jpg`} alt="Order Image" className='rounded-t-lg h-1/2 min-w-[200px]' />
				<div className='flex flex-col h-1/2 rounded-b-lg justify-between items-start p-1'>
					<p>{el.name}</p>
					<p>{el.price}</p>
					<p>{el.category}</p>
					<p>{el.type}</p>
					<p>{el.date}</p>
					<button className='px-3 py-1 rounded-lg bg-orange-500 cursor-pointer duration-250 hover:bg-orange-700' onClick={() => StartOrder(el)}>Make Order</button>
				</div>
			</div>
		)
	})

	function StartOrder(item) {
		let user = accs.find(el => el.email == item.customer.email)
		
		let userOrderObj = [...user.orders].find(el => el.name == item.name)
		let updatedUser = {
			...user,
			finishedOrders: [...user.finishedOrders, item],
			orders: user.orders.splice(user.orders.indexOf(userOrderObj))
		}
		let updatedAccs = [...accs].map(el => {
			if (el.email != user.email) return el
			else return updatedUser
		})
		setAccs(updatedAccs)

		let adminOrderObj = [...admin.orders].find(el => el.name == item.name)
		let updatedAdmin = {
			...admin,
			finishedOrders: [...admin.finishedOrders, item],
			orders: admin.orders.splice(admin.orders.indexOf(adminOrderObj)),
			finances: {
				expense: [...admin.finances.expense, item],
				income: [...admin.finances.income],
				money: Number((admin.finances.money - item.price).toFixed(2))
			}
		}
		setAdmin(updatedAdmin)
		localStorage.setItem('proj-acc', JSON.stringify([accs,admin]))
		setAlertText('Order Has Been Made')
	}

	return (
		<div className='flex-1 flex flex-col items-center gap-8'>
			<h1 className='text-[35px] font-bold'>Orders</h1>
			<AlertModal message={alertText} onClose={() => setAlertText('')} />
			<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center items-center px-5 gap-3 max-h-[600px] overflow-y-scroll'>
				{
					[...adminOrders].map((el, ind) => (
						<OrderBlock key={ind} el={el} />
					))
				}
			</div>
		</div>
	)
}
