import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FoodItems } from '../FullPage'
import AlertModal from '../Components/AlertModal'

export default function NewFood() {
	const [showModal, setShowModal] = useState(false)
	const [categOpen, setCategOpen] = useState(false)
	const [newCat, setNewCat] = useState('meat')
	const { setFood } = useContext(FoodItems)
	const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { name: '', price: 0, category: '', ingredients: '', imageURL: '' } })

	const [alertText, setAlertText] = useState('')


	const AddNewFood = item => {
		setFood(prev => [...prev, { name: item.name, price: item.price, category: newCat, description: item.ingredients, imageURL: item.imageURL }])

		setShowModal(false)
		setAlertText('Item added successfully!')
	}

	return (
		<div className='w-full flex justify-start m-3'>
			<AlertModal message={alertText} duration={4000} onClose={() => setAlertText('')} />
			<div className='cursor-pointer duration-200 flex items-center gap-2 px-2 py-1 rounded-lg bg-green-700 hover:bg-green-800 text-white' onClick={() => setShowModal(true)}><i className="fa-solid fa-plus"></i> Add Menu Item</div>

			<div id="blur" className={`${showModal ? 'fixed' : 'hidden'} duration-200 top-0 left-0 z-4 w-screen h-screen backdrop-blur-[1px] bg-[#0000005a]`} onClick={() => setShowModal(false)}></div>
			<div id="modal" className={`flex flex-col gap-4 ${showModal ? 'fixed scale-[1]' : 'hidden scale-[0.8]'} w-[90%] max-w-[400px] min-h-[200px] p-4 rounded-lg bg-[#1e1e1e] top-1/2 left-1/2 -translate-1/2 z-5 border border-[#4a4a4a]`}>
				<div className='w-full flex justify-between text-white'>
					<p>Add new menu item</p>
					<i className="fa-solid fa-xmark cursor-pointer duration-200 hover:text-red-600" onClick={() => setShowModal(false)}></i>
				</div>

				<form onSubmit={handleSubmit(AddNewFood)} className='flex flex-col gap-2 text-[#d1d1d1]'>
					<div>
						<label>Name</label>
						<div className={`${errors?.name?.message ? 'border border-red-500' : ''} duration-200  flex flex-col w-full rounded-lg p-1 bg-[#3a3a3a]`}>
							<input type="text" className='outline-0 w-full text-[#e0e0e0]' {...register('name', { required: 'Enter in the name' })} />
						</div>
						<p className={`${errors?.name?.message ? 'opacity-100' : 'opacity-0'} text-red-500 text-[13px]`}>{errors?.name?.message}</p>
					</div>

					<div>
						<label>Price</label>
						<div className={`${errors?.price?.message ? 'border border-red-500' : ''} duration-200  flex flex-col w-full rounded-lg p-1 bg-[#3a3a3a]`}>
							<input type="number" className='outline-0 w-full text-[#e0e0e0]' {...register('price', { required: 'Enter in the price' })} />
						</div>
						<p className={`${errors?.price?.message ? 'opacity-100' : 'opacity-0'} text-red-500 text-[13px]`}>{errors?.price?.message}</p>
					</div>

					<div>
						<label>Category</label>
						<div className='relative flex flex-col w-full rounded-lg p-1 bg-[#3a3a3a] cursor-pointer' onClick={() => setCategOpen(prev => !prev)}>
							<p className='capitalize text-[#e0e0e0]'>{newCat}</p>
							<div className={`${categOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-200 absolute top-full w-full z-3 bg-[#2a2a2a] rounded-lg p-1 flex flex-col gap-1 shadow-md border border-[#4a4a4a]`}>
								{['khachapuri', 'lobiani', 'dessert', 'pizza', 'soup', 'meat', 'drinks'].map(el => (
									<option key={el} className={`${el == newCat ? 'bg-[#4a4a4a]' : ''} rounded-lg duration-200 hover:bg-[#4a4a4a] p-1 capitalize text-[#e0e0e0]`} onClick={() => setNewCat(el)} {...register('category')}>{el}</option>
								))}
							</div>
						</div>
					</div>

					<div>
						<label>ingredients</label>
						<div className={`${errors?.ingredients?.message ? 'border border-red-500' : ''} duration-200  flex flex-col w-full rounded-lg p-1 bg-[#3a3a3a]`}>
							<input type="text" className='outline-0 w-full text-[#e0e0e0]' {...register('ingredients', { required: 'Enter in all the ingredients' })} />
						</div>
						<p className={`${errors?.ingredients?.message ? 'opacity-100' : 'opacity-0'} text-red-500 text-[13px]`}>{errors?.ingredients?.message}</p>
					</div>

					<div>
						<label>Image URL</label>
						<div className={`${errors?.imageURL?.message ? 'border border-red-500' : ''} duration-200  flex flex-col w-full rounded-lg p-1 bg-[#3a3a3a]`}>
							<input type="text" className='outline-0 w-full text-[#e0e0e0]' {...register('imageURL', { required: 'Enter in the image of the product' })} />
						</div>
						<p className={`${errors?.imageURL?.message ? 'opacity-100' : 'opacity-0'} text-red-500 text-[13px]`}>{errors?.imageURL?.message}</p>
					</div>

					<button className='rounded-lg w-full bg-green-700 text-white py-1 duration-200 hover:bg-green-800 cursor-pointer' type='submit'>Submit</button>
				</form>
			</div>
		</div>
	)
}
//{
//	name: 'Beef Burger',
//	price: '7.99',
//	category: 'meat',
//	description: 'Grilled beef patty, lettuce, tomato, pickles, cheddar cheese, and house sauce on a soft bun'
//}