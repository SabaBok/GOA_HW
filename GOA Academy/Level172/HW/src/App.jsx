import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import FullPage from './FullPage'
import Main from './Main/Main'
import Product from './Product/Product'
import ScrollToTop from './ScrollToTop'

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<FullPage></FullPage>}>
					<Route index element={<Main></Main>}></Route>
					<Route path='product/:id' element={<Product></Product>}></Route>
					{/*<Route path='/filtering' element={<Product></Product>}></Route>*/}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
