import { memo, useContext, useEffect, useState } from 'react'
import { FoodItems } from '../FullPage'
import Order from './Order'
import NewFood from './NewFood'
import AlertModal from '../Components/AlertModal'

export default function Menu() {
	const {food, setFood, accs, setAccs, loggedUser, adminLogged} = useContext(FoodItems)

	const [filter, setFilter] = useState('')
	const [filteredData, setFilteredData] = useState([])
	const [alertText, setAlertText] = useState('')

	// Filter logic
	useEffect(() => {
		if (filter === '') {
			setFilteredData(food)
		} else {
			setFilteredData([...food].filter(el => el.category === filter))
		}
	}, [filter, food])

	// Food Item Component
	const FoodItem = memo(({ el }) => {
		const checkURL = () => el.imageURL ? true : false

		return (
			<div className='flex flex-col max-w-[350px] w-full min-w-[300px] border border-[#89898963] rounded-[13px] pb-3'>
				<img 
					src={checkURL() ? el.imageURL : `/images/Foods/${el.name}.jpg`} 
					alt="food image" 
					className='w-full object-cover object-center h-[170px] rounded-t-[13px]' 
				/>
				<div className='w-full flex flex-col gap-6 px-3'>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col items-start gap-1'>
							<p>{el.name}</p>
							<span className='text-[12px] p-1 py-px font-medium rounded-lg bg-[#eceef2] capitalize'>
								{el.category}
							</span>
						</div>
						<p className='text-[#f54900]'>{el.price}₾</p>
					</div>

					<div className='flex flex-col gap-2'>
						<p className='opacity-70 text-[14px]'>{el.description}</p>
						
						{!adminLogged && (
							<button 
								className={`${loggedUser ? 'bg-[#f54900]' : 'bg-[#faa47f]'} 
									hover:bg-[#bc3800] duration-200 cursor-pointer text-white 
									rounded-lg w-full py-1 flex items-center gap-5 justify-center`}
								onClick={() => addToCart(el)}
							>
								<i className="fa-solid fa-cart-shopping"></i> 
								<p>{loggedUser ? 'Add to Cart' : 'Login to Order'}</p>
							</button>
						)}

						{adminLogged && (
							<button 
								onClick={() => AdminRemove(el)} 
								className='bg-[#f54900] hover:bg-[#bc3800] duration-200 cursor-pointer text-white rounded-lg w-full py-1 flex items-center gap-5 justify-center'
							>
								Remove Dish
							</button>
						)}
					</div>
				</div>
			</div>
		)
	})

	// Add to Cart
	const generateID = () => Date.now()

	function addToCart(item) {
		if (!loggedUser) return

		const loggedUserIndex = accs.findIndex(acc => acc.logged && acc.title === 'user')
		if (loggedUserIndex === -1) return

		const updatedAccounts = accs.map((acc, idx) => {
			if (idx !== loggedUserIndex) return acc

			const existingIndex = acc.cart.findIndex(el => el.name === item.name)

			if (existingIndex !== -1) {
				const newCart = [...acc.cart]
				newCart[existingIndex] = { 
					...newCart[existingIndex], 
					ammount: newCart[existingIndex].ammount + 1 
				}
				return { ...acc, cart: newCart }
			}

			return { 
				...acc, 
				cart: [...acc.cart, { ...item, ammount: 1, id: generateID() }] 
			}
		})

		setAccs(updatedAccounts)
	}

	// Admin Remove
	function AdminRemove(item) {
		setFood(prev => prev.filter(el => el.name !== item.name))
		setAlertText(`${item.name} has been removed from the menu`)
	}

	return (
		<section id='order' className='flex flex-col items-center gap-10 w-full max-sm:p-3 p-15 rounded-lg min-h-[1700px]'>
			<AlertModal message={alertText} duration={4000} onClose={() => setAlertText('')}/>

			<div className='flex flex-col items-center gap-4'>
				<div>
					<h2 className='font-bold text-[30px] text-center'>Our Menu</h2>
					<p>Discover our carefully crafted dishes made with the finest ingredients</p>
				</div>

				{/* Filter Buttons - FULL CODE, NO OMISSIONS */}
				<div className='flex gap-4 items-center flex-wrap justify-center'>
					{
						['khachapuri', 'lobiani', 'dessert', 'pizza', 'soup', 'meat', 'drinks'].map((el, ind) => (
							<div 
								key={ind} 
								className={`capitalize cursor-pointer p-1 rounded-lg border border-black duration-300 
									${el == filter ? 'text-white bg-black hover:bg-[#212121]' : 'text-black bg-white hover:bg-[#e1e1e1]'}`} 
								onClick={() => el == filter ? setFilter('') : setFilter(el)}
							>
								{el}
							</div>
						))
					}
				</div>
			</div>

			<div id='menu' className='w-full h-full flex flex-col gap-1 items-center max-md:px-5 px-[200px]'>
				{!adminLogged && <Order accs={accs} setAccs={setAccs}/>}
				{adminLogged && <NewFood />}

				<div className={`grid max-h-[1250px] overflow-y-scroll shadow-md rounded-[13px] p-2 w-full items-center justify-items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 gap-y-20 `}>
					{
						filteredData.map((el, key) => <FoodItem key={key} el={el}></FoodItem>)
					}
				</div>
			</div>
		</section>
	)
}