import React from 'react'
import { use, useEffect, useState } from 'react'

export default function Info({product}) {
	const [activeImg, setActiveImg] = useState(0)
	const [currSize, setCurrSize] = useState(null)
	const [prodAmount, setProdAmount] = useState(0)

	useEffect(() => {
		if (product && product.sizeList?.length > 0) {
			setCurrSize(product.sizeList[0])
		}
	}, [product])
	function getStars() {
		const fullStars = Math.floor(product.rate)
		const hasHalfStar = product.rate % 1 >= 0.5
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

		const stars = []

		for (let i = 0; i < fullStars; i++) {
			stars.push(<i key={`full-${i}`} className="fa-solid fa-star text-yellow-400"></i>)
		}

		if (hasHalfStar) {
			stars.push(<i key="half" className="fa-solid fa-star-half-stroke text-yellow-400"></i>)
		}

		for (let i = 0; i < emptyStars; i++) {
			stars.push(<i key={`empty-${i}`} className="fa-regular fa-star text-yellow-400"></i>)
		}

		return <div className="flex items-center gap-1">{stars}</div>
	}

	return (
		<section className='flex flex-col gap-10 max-sm:items-center'>
			<div className='flex gap-[15px] items-center font-400'>
				<p className='text-[#00000099]'>Home</p>
				<i className="text-[#00000099] fa-solid fa-chevron-right text-[13px]"></i>
				<p className='text-[#00000099]'>Shop</p>
				<i className="text-[#00000099] fa-solid fa-chevron-right text-[13px]"></i>
				<p>{product.clothesType}</p>
			</div>
			{/* product info */}
			<div className='flex justify-between gap-10 max-lg:flex-col'>
				<div className='flex gap-8 min-h-[530px] flex-1 max-sm:flex-col-reverse items-center'>
					<div className='flex sm:flex-col justify-start gap-4'>
						{
							product.imgList.map((el, id) => (
								<img
									key={id}
									src={`/clothes/${el}`}
									alt='product image'
									className={`duration-200 w-[150px] h-[160px] cursor-pointer object-cover rounded-[20px] ${activeImg === id ? 'border-1 border-black' : 'border border-transparent'}`}
									onClick={() => setActiveImg(id)}
								/>
							))
						}
					</div>

					<img src={`/clothes/${product.imgList[activeImg]}`} alt="product image" className='max-w-[430px] w-[90%] min-w-[300px] h-[530px] object-cover rounded-[20px]' />
				</div>

				<div className='flex-1 flex flex-col gap-6'>
					<h2 className='font-[800] uppercase text-[35px]'>{product.title}</h2>

					<div className='flex gap-2 items-center'>
						{getStars()}
						<p>{product.rate} / 5</p>
					</div>

					<div>
						{
							product.discount ?
								<p className='text-[20px] flex gap-3 items-center font-[600]'>${product.price}
									<span className='text-gray-400 line-through text-[20px]'>${product.discount}</span>
									<span className='flex items-center justify-center text-red-500 text-[16px] font-[500] h-[30px] px-3 bg-red-100 rounded-full'>-{100 - Math.round(product.price / product.discount * 100)}%</span>
								</p>
								: <p className='text-[20px] font-[600]'>${product.price}</p>
						}
					</div>
					<p>{product.desc}</p>

					<hr />

					<div className='flex flex-col gap-2'>
						<p>Choose Size</p>

						<div className='flex gap-4'>
							{
								product.sizeList.map((el, id) => (
									<p key={id} className={`capitalize duration-150 cursor-pointer ${currSize == el ? 'bg-black text-white' : 'bg-[#F0F0F0] text-[#00000099]'} rounded-full px-5 py-1 `} onClick={() => setCurrSize(el)}>{el}</p>
								))
							}
						</div>
					</div>

					<hr />

					<div className='flex gap-4'>
						<div className='flex rounded-full px-5 py-2 gap-5 items-center justify-between bg-[#F0F0F0] flex-1'>
							<i className="fa-solid fa-minus cursor-pointer" onClick={() => prodAmount > 0 ? setProdAmount(prodAmount - 1) : null}></i>
							<p>{prodAmount}</p>
							<i className="fa-solid fa-plus cursor-pointer" onClick={() => setProdAmount(prodAmount + 1)}></i>
						</div>
						<button className='flex-4 rounded-full bg-black text-white py-3 cursor-pointer'>Add to Cart</button>
					</div>
				</div>
			</div>
		</section>
)}
