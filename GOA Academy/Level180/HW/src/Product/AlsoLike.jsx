import React from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {DataInfo} from '../FullPage'

export default function AlsoLike() {
	const {data} = useContext(DataInfo)
	const [recomended, setRecomended] = useState([])


	useEffect(() => {
		function getData() {
			const responseData = [...data]

			let randomItems = []
			for (let i = 0; i < 4; i++) {
				let randomIndex = Math.floor(Math.random() * responseData.length)
				randomItems.push(responseData[randomIndex])
				responseData.splice(randomIndex, 1)
			}
			setRecomended(randomItems)
		}

		getData()
	}, [])
	return (
		<div className='w-full flex flex-col items-center gap-15'>
			<h1 className='text-[40px] font-[800] uppercase'>You might also like</h1>

			<div className='flex justify-between gap-25'>
				{
					recomended.map((el, id) => (
						<Link key={id} to={`/product/${el.id}`}><Card prod={el} /></Link> 
					))
				}
			</div>
		</div>
	)
}
