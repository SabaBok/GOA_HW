import React from 'react'
import DogComponent from './dogComponent'
import CatComponent from './catComponent'
import DragonComponent from './DragonComponent'

export default function AnimalsList() {
	return (
		<div className='list'>
			<DogComponent></DogComponent>
			<CatComponent></CatComponent>
			<DragonComponent></DragonComponent>
		</div>
	)
}
