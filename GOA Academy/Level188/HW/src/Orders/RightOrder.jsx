import { useContext, memo } from 'react'
import { FoodItems } from '../FullPage'
import AlertModal from '../Components/AlertModal'
import { useState } from 'react'

export default function RightOrder() {
	const { loggedUser, food, accs, setAccs, admin, setAdmin } = useContext(FoodItems)
	const [alertText, setAlertText] = useState('')

	let finishedOrders = [...loggedUser?.finishedOrders || []]

	const FinishedBlock = memo(({ el }) => {
		const foodObject = food.find(item => item.name === el.name)

		return (
			<div className='flex flex-col justify-between rounded-lg border border-[#4a4a4a] h-[370px] w-[200px] bg-[#2a2a2a] text-white'>
				<img src={foodObject?.imageURL || `/images/Foods/${el.name}.jpg`} alt="Finished Image" className='rounded-t-lg h-1/2 min-w-[200px] object-cover' />
				<div className='flex flex-col h-1/2 rounded-b-lg justify-between items-start p-3 gap-2'>
					<p className='font-bold'>{el.name}</p>
					<p>${el.price}</p>
					<p className='capitalize'>{el.category}</p>
					<p>{el.date}</p>
					<button className='px-3 py-1 rounded-lg bg-green-500 cursor-pointer duration-200 hover:bg-green-600 w-full' onClick={() => takeOrder(el)}>Take Order</button>
				</div>
			</div>
		)
	})

	function takeOrder(item) {
		const userFinished = [...loggedUser.finishedOrders]
		const userIndex = userFinished.findIndex(order => order.name === item.name && order.date === item.date)
		if (userIndex !== -1) {
			userFinished.splice(userIndex, 1)
		}

		const updatedUser = {
			...loggedUser,
			finishedOrders: userFinished
		}

		const adminFinished = [...admin.finishedOrders]
		const adminIndex = adminFinished.findIndex(order => order.name === item.name && order.date === item.date && order.customer.email === loggedUser.email)
		if (adminIndex !== -1) {
			adminFinished.splice(adminIndex, 1)
		}

		const updatedAdmin = {
			...admin,
			finishedOrders: adminFinished
		}

		const updatedAccs = accs.map(acc => {
			if (acc.email === loggedUser.email) return updatedUser
			if (acc.title === 'admin') return updatedAdmin
			return acc
		})

		setAccs(updatedAccs)
		setAdmin(updatedAdmin)
		setAlertText('Order taken and removed from finished')
	}

	return (
		<div className='flex-1 flex flex-col items-center gap-8 p-5'>
			<AlertModal message={alertText} duration={4000} onClose={() => setAlertText('')} />
			<h1 className='text-[35px] font-bold text-white'>Finished Orders</h1>
			<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center items-center px-5 gap-5 max-h-[600px] overflow-y-scroll'>
				{
					finishedOrders.map((el, ind) => (
						<FinishedBlock key={ind} el={el} />
					))
				}
			</div>
		</div>
	)
}