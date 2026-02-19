import { memo, useContext, useEffect, useState } from 'react'
import { FoodItems } from '../FullPage'
import Order from './Order'
import NewFood from './NewFood'
import AlertModal from '../Components/AlertModal'

export default function Menu() {
	const { food, setFood, accs, setAccs, loggedUser, admin, adminLogged } = useContext(FoodItems)

	const [filter, setFilter] = useState('')
	const [filteredData, setFilteredData] = useState([])
	const [alertText, setAlertText] = useState('')

	useEffect(() => {
		if (filter === '') setFilteredData(food)
		else setFilteredData([...food].filter(el => el.category === filter))
		
	}, [filter, food])

	const FoodItem = memo(({ el }) => {
		const checkURL = () => el.imageURL ? true : false

		function addToCart() {
			if (!loggedUser) {
				setAlertText('Login required to add to cart')
				return
			}
			const updated = accs.map(acc => {
				if (acc.email === loggedUser.email) {
					return { ...acc, cart: [...acc.cart, { ...el, ammount: 1 }] }
				}
				return acc
			})
			setAccs(updated)
			setAlertText('Added to cart')
		}

		function removeItem() {
			const updatedFood = food.filter(f => f.name !== el.name)
			setFood(updatedFood)
			localStorage.setItem('proj-food', JSON.stringify(updatedFood))
			setAlertText('Item removed')
		}

		return (
			<div className='flex flex-col max-w-[350px] w-full min-w-[300px] border border-[#89898963] rounded-[13px] pb-3 bg-[#2a2a2a]'>
				<img
					src={checkURL() ? el.imageURL : `/images/Foods/${el.name}.jpg`}
					alt="food image"
					className='w-full object-cover object-center h-[170px] rounded-t-[13px]'
				/>
				<div className='w-full flex flex-col gap-6 px-3 text-white'>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col items-start gap-1'>
							<p className='font-bold'>{el.name}</p>
							<span className='text-[12px] p-1 py-px font-medium rounded-lg bg-[#3a3a3a] capitalize'>
								{el.category}
							</span>
						</div>
						<p className='text-[#f54900]'>{el.price}₾</p>
					</div>

					<div className='flex items-center gap-3'>
						{adminLogged == false && <button onClick={()=>addToCart()} className="bg-[#e53e3e] rounded-lg px-4 py-1 text-white cursor-pointer hover:bg-[#c53030]">Add to Cart</button>}
						{adminLogged == true && <button onClick={()=>removeItem()} className="bg-red-600 rounded-lg px-4 py-1 text-white cursor-pointer hover:bg-red-700 duration-200">Remove</button>}
					</div>
				</div>
			</div>
		)
	})

	return (
		<section className='flex flex-col items-center gap-10 w-full max-sm:p-3 p-15 rounded-lg min-h-[1700px] bg-[#1e1e1e]'>
			<AlertModal message={alertText} duration={4000} onClose={() => setAlertText('')} />
			<div className='flex flex-col items-center gap-4'>
				<div>
					<h2 className='font-bold text-[30px] text-center text-white'>Our Menu</h2>
					<p className='text-[#d1d1d1]'>Discover our carefully crafted dishes made with the finest ingredients</p>
				</div>

				<div className='flex gap-4 items-center flex-wrap justify-center'>
					{
						['khachapuri', 'lobiani', 'dessert', 'pizza', 'soup', 'meat', 'drinks'].map((el, ind) => (
							<div key={ind} className={`capitalize cursor-pointer p-1 rounded-lg border border-[#4a4a4a] duration-300 ${el == filter ? 'text-white bg-[#3a3a3a] hover:bg-[#4a4a4a]' : 'text-[#d1d1d1] bg-[#2a2a2a] hover:bg-[#3a3a3a]'}`} onClick={() => el == filter ? setFilter('') : setFilter(el)}>{el}</div>
						))
					}
				</div>
			</div>
			<div id='menu' className='w-full h-full flex flex-col gap-1 items-center max-md:px-5 px-[200px]'>
				{adminLogged == false && <Order accs={accs} setAccs={setAccs} />}
				{adminLogged == true && <NewFood />}
				<div className={`grid max-h-[1250px] overflow-y-scroll shadow-md rounded-[13px] p-2 w-full items-center justify-items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 gap-y-20 bg-[#2a2a2a] border border-[#4a4a4a]`}>
					{
						filteredData.map((el, key) => <FoodItem key={key} el={el} />)
					}
				</div>
			</div>
		</section>
	)
}