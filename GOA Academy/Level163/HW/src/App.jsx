import Home from "./pages/Home"
import NavBar from "./Components/NavBar"
import FullPage from "./pages/FullPage"
import Favourites from "./pages/Favorites"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<FullPage></FullPage>}>
						<Route index element={<Home></Home>}></Route>
						<Route path="/favourites" element={<Favourites />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
