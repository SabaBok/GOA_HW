import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FullPage from './FullPage'
import Main from './Main/Main'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<FullPage></FullPage>}>
					<Route index element={<Main></Main>}></Route>
					<Route path='/sum'></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
