import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {FullPage} from './FullPage'
import Main from './Main/Main'
import Product from './Product/Product'
import ScrollToTop from './ScrollToTop'
import Cart from './Cart/Cart'

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<FullPage></FullPage>}>
					<Route index element={<Main></Main>}></Route>
					<Route path='product' element={<Product></Product>}></Route>
					{/*<Route path='/filtering' element={<Product></Product>}></Route>*/}
					<Route path='/cart' element={<Cart/>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
