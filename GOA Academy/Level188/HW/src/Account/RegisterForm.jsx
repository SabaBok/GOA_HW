import { useForm } from "react-hook-form"
import { useState } from "react"

export default function RegisterForm({changeForm}) {
	const { register, handleSubmit,watch, formState: { errors } } = useForm({
		defaultValues: {
			fullName: 'bondo givia',
			email: '',
			age: '0',
			password: '',
			rePassword: ''
		}
	})
	const [accs,setAccs] = useState(JSON.parse(localStorage.getItem('proj-acc')) || [])

	const password = watch("password")

	function saveAccount(name,email,age,pass){
		let exists = accs.some(el=> el.email == email)
		
		if(exists){
			alert('an account with that email exists alredy')
			return
		}

		const newAcc = {name,email,age,pass,logged:false}
		const updated = [...accs,newAcc]
		setAccs(updated)
		localStorage.setItem('proj-acc',JSON.stringify(updated))
		alert("Account created successfully")
		changeForm(1)
	}

	return (
		<main className="flex w-full min-h-screen flex-col items-center justify-center gap-10 py-10">
			<section className="flex flex-col items-center gap-10 max-w-[600px] w-[95%] min-w-[300px] p-10 bg-blue-100 rounded-[20px]">
				<h1 className="font-bold text-[25px]">Register</h1>
				<form onSubmit={handleSubmit(data => {
					const {fullname,email,age,password} = data
					saveAccount(fullname,email,age,password)
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
						<input placeholder="age" className="w-full p-1 rounded-lg border border-blue-600" type="number" {...register('age', { required: 'Put in your age', validate: value => Number(value) < 0 ? 'enter valid number' : true })} />
						<label htmlFor="" className="text-red-500">{errors?.age?.message}</label>
					</div>

					<div className="w-full">
						<input placeholder="password" className="w-full p-1 rounded-lg border border-blue-600" type="text" {...register('password', { required: 'Put in a password', minLength: { value: 8, message: "Put in a valid password" } })} />
						<label htmlFor="" className="text-red-500">{errors?.password?.message}</label>
					</div>

					<div className="w-full">
						<input placeholder="re password" className="w-full p-1 rounded-lg border border-blue-600" type="text" {...register('rePassword', { required: 'Put in a password', validate:value=>value !== password?'Put in correct password':true, minLength: { value: 8, message: "Put in a valid password" } })} />
						<label htmlFor="" className="text-red-500">{errors?.rePassword?.message}</label>
					</div>

					<button type='submit' className="mt-2.5 px-8 py-3 bg-cyan-700 rounded-lg text-white cursor-pointer text-[22px] duration-400 hover:bg-cyan-600">Click me</button>
				</form>
				<p className="text-gray-500">Alredy Registered? <span className=" text-black cursor-pointer font-semibold underline" onClick={()=> changeForm(1)}>Log In</span></p>
			</section>
		</main>
	)
}
