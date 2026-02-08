import {FullPage} from "./FullPage"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Accounts from "./Account/Accounts"
import Home from "./Home/Home"
import Finance from "./Finance/Finance"
import Blogs from "./Blogs/Blogs"
import Kitchen from "./Kitchen/Kitchen"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<FullPage></FullPage>}>
					<Route index element={<Accounts></Accounts>}></Route>
					<Route path="Home" element={<Home></Home>}></Route>
					<Route path="finance" element={<Finance></Finance>}></Route>
					<Route path="blogs" element={<Blogs></Blogs>}></Route>
					<Route path="kitchen" element={<Kitchen></Kitchen>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
