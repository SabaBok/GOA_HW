import { useState, useEffect } from "react"
import Card from "../Components/Card"

function Favourites() {
	const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('movie-app-liked')) || [])
	function removeFavs(movie) {
		for (let i of favs) {
			if (i['#TITLE'] === movie["#TITLE"]) {
				setFavs(favs.splice(i, 1))
				localStorage.setItem('movie-app-liked', JSON.stringify(favs))
			}
		}
	}
	return (
		<div>
			{favs.length === 0 ?
				<div className="favs-empty">
					<h2>no favourites yet</h2>
					<p>start adding movies to favourites and they will appear here</p>
				</div> :

				<div>
					{favs.map((movie, id) => (<Card movie={movie} liked={true} key={id} onFavourite={removeFavs}/>))}
				</div>
			}
		</div>
	)
}
export default Favourites