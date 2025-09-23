import AgeChecker from './AgeChecker'
import ColorPicker from './ColorPicker'
import PasswordInput from './PasswordInput'
import CharCounter from './CharCounter'
import TemperatureConverter from './TemperatureConverter'

function App() {

	return (
		<main className='flex flex-col gap-10 py-3 px-1'>
			{/* HW1 */}
			<AgeChecker></AgeChecker> 
			<hr />
			{/* HW2 */}
			<ColorPicker></ColorPicker>
			<hr />
			{/* HW3 */}
			<PasswordInput></PasswordInput>
			<hr />
			{/* HW4 */}
			<CharCounter></CharCounter>
			<hr />
			{/* HW5 */}
			<TemperatureConverter></TemperatureConverter>
		</main>
	)
}

export default App
