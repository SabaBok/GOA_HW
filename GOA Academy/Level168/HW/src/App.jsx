import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FullPage from './FullPage'
import Main from './Main/Main'
import Product from './Product/Product'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<FullPage></FullPage>}>
					<Route index path='/' element={<Main></Main>}></Route>
					<Route path='/ee' element={<Product></Product>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
