import { useForm } from "react-hook-form"
import { useState } from "react"

export default function RegisterForm() {
	const { register, handleSubmit,watch, formState: { errors } } = useForm({
		defaultValues: {
			fullName: 'bondo givia',
			email: '',
			age: '0',
			password: '',
			rePassword: ''
		}
	})
	const [accs,setAccs] = useState(JSON.parse(localStorage.getItem('proj-accs')) || [])

	const password = watch("password")

	function saveAccount(name,email,age,pass){
		
	}

	return (
		<main className="flex w-full min-h-screen flex-col items-center justify-center gap-10 py-10">
			<section className="flex flex-col items-center gap-10 max-w-[600px] w-[95%] min-w-[300px] p-10 bg-blue-100 rounded-[20px]">
				<h1 className="font-bold text-[25px]">Register</h1>
				<form onSubmit={handleSubmit(data => {
					console.log(data)
				})}
				className="flex flex-col gap-4 items-center w-full"
				>

					<div className="w-full">
						<input placeholder="fullname" className="w-full p-1 rounded-lg border border-blue-600" type="text" {...register("fullName", { required: 'Needs to be filled' })} />
						<label htmlFor="" className="text-red-500">{errors?.fullName?.message}</label>
					</div>

					<div className="w-full">
						<input placeholder="email" className="w-full p-1 rounded-lg border border-blue-600" type="text" {...register('email', { required: 'Put in email address', minLength: { value: 11, message: 'Is not valid email' }, validate: (value) => { value.includes('@') || 'Must contain @ symbol' } })} />
						<label htmlFor="" className="text-red-500">{errors?.email?.message}</label>
					</div>

					<div className="w-full">
						<input placeholder="age" className="w-full p-1 rounded-lg border border-blue-600" type="number" {...register('age', { required: 'Put in your age', validate: value => Number(value) < 0 ? 'enter valid number' : "" })} />
						<label htmlFor="" className="text-red-500">{errors?.age?.message}</label>
					</div>

					<div className="w-full">
						<input placeholder="password" className="w-full p-1 rounded-lg border border-blue-600" type="text" {...register('password', { required: 'Put in a password', minLength: { value: 8, message: "wadi imushave" } })} />
						<label htmlFor="" className="text-red-500">{errors?.password?.message}</label>
					</div>

					<div className="w-full">
						<input placeholder="re password" className="w-full p-1 rounded-lg border border-blue-600" type="text" {...register('rePassword', { required: 'Put in a password', validate:value=>value !== password?'Put in correct password':'', minLength: { value: 8, message: "wadi imushave" } })} />
						<label htmlFor="" className="text-red-500">{errors?.rePassword?.message}</label>
					</div>

					<button type='submit' className="mt-2.5 px-10 py-4 bg-cyan-700 rounded-lg text-white cursor-pointer">Click me</button>
				</form>
			</section>
		</main>
	)
}
