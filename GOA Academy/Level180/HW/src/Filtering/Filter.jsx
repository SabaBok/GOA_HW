import { useState, useContext, useEffect } from 'react'
import { DataInfo } from '../FullPage'

export default function Filter() {
	const { data, setFilteredData } = useContext(DataInfo)
	const [colorShow, setColorShow] = useState(false)

	const [filters, setFilters] = useState({
		price: [0, 100000],
		dressStyle: '',
		clothesType: '',
		colorList: [],
		size: ''
	})

	function getEveryColor() {
		const allColors = data.flatMap(item => item.colorList.map(c => c.toLowerCase()))
		return [...new Set(allColors)]
	}

	function getEverySize() {
		const allSizes = data.flatMap(item => item.sizeList)
		return [...new Set(allSizes)]
	}

	useEffect(() => {
		if (!data.length) return

		const filtered = data.filter(item => {
			if (filters.clothesType && item.clothesType !== filters.clothesType) return false

			if (filters.dressStyle && item.dressStyle !== filters.dressStyle) return false

			if (filters.colorList.length > 0) {
				const productColors = item.colorList.map(c => c.toLowerCase())
				const hasAllColors = filters.colorList.every(color => productColors.includes(color))
				if (!hasAllColors) return false
			}

			if (filters.size && !item.sizeList.includes(filters.size)) return false

			if (item.price < filters.price[0] || item.price > filters.price[1]) return false

			return true
		})

		setFilteredData(filtered)
	}, [filters, data])

	return (
		<section className='w-[238px] min-h-[1000px] border border-[#0000001A] p-5 rounded-[20px] flex flex-col gap-6'>

			<div className='flex flex-col gap-6'>
				<h2 className='text-[20px] font-[700]'>Filter</h2>
				<ul className='flex flex-col gap-[14px] font-[400]'>
					{['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((el, ind) => (
						<li
							key={ind}
							onClick={() => setFilters({ ...filters, clothesType: filters.clothesType === el ? '' : el })}
							className={`cursor-pointer duration-200 hover:text-[#000000be] ${filters.clothesType === el ? 'text-black font-[600]' : 'text-[#00000099]'}`}
						>
							{el}
						</li>
					))}
				</ul>
			</div>

			<hr className='border-[#0000001A]' />

			<div className='flex flex-col gap-3'>
				<div className='flex justify-between items-center'>
					<h2 className='font-[700]'>Colors</h2>
					<i className={`fa-solid ${!colorShow ? 'fa-angle-down' : 'fa-angle-up'} cursor-pointer`} onClick={() => setColorShow(prev => !prev)}></i>
				</div>
				<div className={`flex gap-4 flex-wrap overflow-y-hidden ${!colorShow ? 'max-h-[80px]' : 'max-h-[500px]'} duration-300`}>
					{getEveryColor().map((el, ind) => {
						const normalized = el.toLowerCase()
						const selected = filters.colorList.includes(normalized)
						return (
							<div
								key={ind}
								style={{ background: normalized }}
								className='min-w-[30px] h-[30px] rounded-full shadow cursor-pointer border border-black flex items-center justify-center'
								onClick={() => {
									if (selected) {
										setFilters({ ...filters, colorList: filters.colorList.filter(c => c !== normalized) })
									} else {
										setFilters({ ...filters, colorList: [...filters.colorList, normalized] })
									}
								}}
							>
								<i className={`fa-solid fa-check text-white ${selected ? 'opacity-100' : 'opacity-0'}`}></i>
							</div>
						)
					})}
				</div>
			</div>

			<hr className='border-[#0000001A]' />
			<div>
				<h2>Price</h2>
				<div className='flex gap-2 flex-col'>
					<input type='number' placeholder={filters.price[0]} onChange={e => setFilters({ ...filters, price: [Number(e.target.value), filters.price[1]] })} className='border p-1' />
					<input type='number' placeholder={filters.price[1]} onChange={e => setFilters({ ...filters, price: [filters.price[0], Number(e.target.value)] })} className='border p-1' />
				</div>
			</div>

			<hr className='border-[#0000001A]' />

			<div className='flex flex-col gap-4'>
				<h2 className='font-[700]'>Size</h2>
				<div className='flex flex-wrap gap-2 items-start'>
					{getEverySize().map((el, ind) => (
						<p
							key={ind}
							onClick={() => setFilters({ ...filters, size: filters.size === el ? '' : el })}
							className={`${filters.size === el ? 'bg-black text-white' : 'bg-[#F0F0F0] text-[#00000099]'} px-[15px] py-[5px] rounded-full cursor-pointer duration-300`}
						>
							{el}
						</p>
					))}
				</div>
			</div>

			<hr className='border-[#0000001A]' />

			<div className='flex flex-col gap-4'>
				<h2 className='font-[700]'>Dress Style</h2>
				<div className='flex flex-col gap-2'>
					{['Casual', 'Formal', 'Party', 'Gym'].map((el, ind) => (
						<p
							key={ind}
							onClick={() => setFilters({ ...filters, dressStyle: filters.dressStyle === el ? '' : el })}
							className={`${filters.dressStyle === el ? 'text-black' : 'text-[#00000099]'} cursor-pointer`}
						>
							{el}
						</p>
					))}
				</div>
			</div>
		</section>
	)
}
