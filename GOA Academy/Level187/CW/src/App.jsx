import { useForm } from "react-hook-form"
import { useRef } from "react"
import RegisterForm from "./RegisterForm"

function App() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		defaultValues: {
			firstName: 'John',
			lastName: 'Doey'
		}
	})
	const p = useRef()
	return (
		//<div className="bg-gray-300 p-10 gap-2">
		//	<form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit((data) => {
		//		errors? p.current.textContent = 'Good' : p.current.textContent = 'Bad'
		//	})}>
		//		<input className="border border-red-400" {...register('firstName', { required: 'This is required',minLength: { value: 2, message: "has to be more than 2" } })} type="text" />
		//		<input className="border border-red-400" {...register('lastName', { required: "This is required", minLength: { value: 2, message: "has to be more than 2" } })} type="text" />
		//		<button className="px-5 py-2 bg-[#444] rounded-lg text-white">Submit</button>
		//	</form>

		//	<p className="text-red-500">{errors?.lastName?.message}</p>
		//	<p ref={p}></p>
		//	<div>
		//		<p>{watch("firstName")}</p>
		//		<p>{watch('lastName')}</p>
		//	</div>
		//</div>
		<RegisterForm/>
	)
}

export default App
