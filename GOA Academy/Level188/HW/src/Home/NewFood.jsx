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
			<AlertModal message={alertText} duration={4000} onClose={()=>setAlertText('')}/>
			<div className='cursor-pointer duration-200 flex items-center gap-2 px-2 py-1 rounded-lg bg-[#00a63e] hover:bg-[#018c34] text-white' onClick={() => setShowModal(true)}><i className="fa-solid fa-plus"></i> Add Menu Item</div>

			<div id="blur" className={`${showModal ? 'fixed' : 'hidden'} duration-200 top-0 left-0 z-4 w-screen h-screen backdrop-blur-[1px] bg-[#0000005a]`} onClick={() => setShowModal(false)}></div>
			<div id="modal" className={`flex flex-col gap-4 ${showModal ? 'fixed scale-[1]' : 'hidden scale-[0.8]'} w-[90%] max-w-[400px] min-h-[200px] py-6 p-4 rounded-lg bg-white top-1/2 left-1/2 -translate-1/2 z-5`}>
				<div className='flex w-full justify-between items-center'>
					<h3 className='font-semibold text-[18px]'>Add New Item</h3>
					<i className="fa-solid fa-xmark cursor-pointer" onClick={() => setShowModal(false)}></i>
				</div>

				<form className='w-full h-full flex flex-col gap-3' onSubmit={handleSubmit(data => AddNewFood(data))}>
					<div>
						<label>Name</label>
						<div className={`${errors?.name?.message ? 'border border-red-500' : ''} duration-200 flex flex-col w-full rounded-lg p-1 bg-[#f3f3f5]`}>
							<input type="text" className='outline-0 w-full' {...register('name', { required: "put in the name of the product", minLength: { value: 1, message: 'Fill in the field' } })} />
						</div>
						<p className={`${errors?.name?.message ? 'opacity-100' : 'opacity-0'} text-red-500 text-[13px]`}>{errors?.name?.message}</p>
					</div>

					<div>
						<label>price</label>
						<div className={`${errors?.price?.message ? 'border border-red-500' : ''} duration-200  flex flex-col w-full rounded-lg p-1 bg-[#f3f3f5]`}>
							<input type="numb" className='outline-0 w-full' {...register('price', { required: 'enter in the price', min: { value: 1, message: 'must have a valid price' } })} />
						</div>
						<p className={`${errors?.price?.message ? 'opacity-100' : 'opacity-0'} text-red-500 text-[13px]`}>{errors?.price?.message}</p>
					</div>

					<div className='flex-1 h-20'>
						<label>Category</label>

						<div className={` duration-200 w-full rounded-lg bg-[#f3f3f5] px-2 py-1 relative cursor-pointer capitalize`} onClick={() => setCategOpen(prev => !prev)}>{newCat}
							<div className={`${categOpen ? 'scale-y-100 opacity-100' : 'opacity-0 scale-y-0'} rounded-lg origin-top duration-200 w-full h-max p-2 flex flex-col gap-2 absolute top-[35px] left-1/2 -translate-x-1/2 bg-white shadow-md border border-[#33333342]`}>
								{['khachapuri', 'lobiani', 'dessert', 'pizza', 'soup', 'meat', 'drinks'].map((el, i) => (
									<option key={i} value={el} className={`${el == newCat ? 'bg-[#d2d2d2]' : ''} rounded-lg duration-200 hover:bg-[#d2d2d2] p-1 capitalize`} onClick={() => setNewCat(el)} {...register('category')}>{el}</option>
								))}
							</div>
						</div>
					</div>

					<div>
						<label>ingredients</label>
						<div className={`${errors?.ingredients?.message ? 'border border-red-500' : ''} duration-200  flex flex-col w-full rounded-lg p-1 bg-[#f3f3f5]`}>
							<input type="text" className='outline-0 w-full' {...register('ingredients', { required: 'Enter in all the ingredients' })} />
						</div>
						<p className={`${errors?.ingredients?.message ? 'opacity-100' : 'opacity-0'} text-red-500 text-[13px]`}>{errors?.ingredients?.message}</p>
					</div>

					<div>
						<label>Image URL</label>
						<div className={`${errors?.imageURL?.message ? 'border border-red-500' : ''} duration-200  flex flex-col w-full rounded-lg p-1 bg-[#f3f3f5]`}>
							<input type="text" className='outline-0 w-full' {...register('imageURL', { required: 'Enter in the image of the product' })} />
						</div>
						<p className={`${errors?.imageURL?.message ? 'opacity-100' : 'opacity-0'} text-red-500 text-[13px]`}>{errors?.imageURL?.message}</p>
					</div>

					<button className='rounded-lg w-full bg-green-600 text-white py-1 duration-200 hover:bg-green-700 cursor-pointer' type='submit'>Submit</button>
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