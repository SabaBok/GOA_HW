import React from 'react'
import {Link} from 'react-router-dom'

export default function CartCard({ prod, id, updateAmount }) {
	const changeAmount = (change) => {
		const newAmount = prod.amount + change
		if (newAmount >= 0) {
			updateAmount(id, newAmount)
		}
	}

	const handleDelete = () => {
		updateAmount(id, 0)
	}

	return (
		<div className='w-full h-[150px] pb-[20px] flex gap-5 border-b-[1.5px] border-[#0000001A] last:border-b-0'>
			<Link to={`/product/${prod.id}`}><img src={`/clothes/${prod.mainImgSrc}`} alt="product photo" className='rounded-lg w-[130px] h-[120px] object-cover' /></Link>

			<div className='w-full flex flex-col justify-between h-full'>
				<div className='flex flex-col gap-1 w-full'>
					<div className='w-full flex gap-3 justify-between'>
						<h2 className='text-[20px] font-[700]'>{prod.title}</h2>
						<i className="fa-solid fa-trash-can text-red-600 cursor-pointer" onClick={handleDelete}></i>
					</div>
					<p className='text-[13px]'>Size: <span className='text-[#666666]'>{prod.size}</span></p>
					<p className='text-[13px]'>Color: <span className='text-[#666666]'>{prod.color}</span></p>
				</div>

				<div className='flex w-full justify-between'>
					<p className='text-[20px] font-[600]'>${prod.price}</p>

					<div className='flex px-3 py-1 gap-3 rounded-full items-center bg-[#F0F0F0]'>
						<i className="fa-solid fa-minus cursor-pointer" onClick={() => changeAmount(-1)}></i>
						<p>{prod.amount}</p>
						<i className="fa-solid fa-plus cursor-pointer" onClick={() => changeAmount(1)}></i>
					</div>
				</div>
			</div>
		</div>
	)
}
