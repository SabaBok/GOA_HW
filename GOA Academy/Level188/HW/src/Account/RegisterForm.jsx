import { useForm } from "react-hook-form"
import { useState } from "react"

export default function RegisterForm({ changeForm }) {
	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			rePassword: ''
		}
	})
	const [accs, setAccs] = useState(JSON.parse(localStorage.getItem('proj-acc')) || [])

	const password = watch("password")
	const [showPass1,setShowPass1] = useState(false)
	const [showPass2,setShowPass2] = useState(false)

	function saveAccount(name, email, pass) {
		let exists = accs.some(el => el.email == email)

		if (exists) {
			alert('an account with that email exists alredy')
			return
		}

		const newAcc = { name, email, pass, logged: false, orders: [],cart:[], money: 100,title:'user' }
		const updated = [...accs, newAcc]
		setAccs(updated)
		localStorage.setItem('proj-acc', JSON.stringify(updated))
		alert("Account created successfully")
		changeForm(1)
	}

	return (
		<div className="flex flex-col items-center gap-3">
			<form onSubmit={handleSubmit(data => {
				const { fullName, email, password } = data
				saveAccount(fullName, email, password)
			})}
				className="flex flex-col gap-4 items-center w-full"
			>

				<div className="w-full">
					<label htmlFor="">Full Name</label>
					<input placeholder="fullname" className="w-full rounded-lg bg-[#ececf0] border-0 outline-0 p-2" type="text" {...register("fullName", { required: 'Needs to be filled' })} />
					<label htmlFor="" className="text-red-500">{errors?.fullName?.message}</label>
				</div>

				<div className="w-full">
					<label htmlFor="">Email</label>
					<input placeholder="email" className="w-full rounded-lg bg-[#ececf0] border-0 outline-0 p-2" type="text" {...register('email', { required: 'Put in email address', minLength: { value: 11, message: 'Is not valid email' }, validate: (value) => { value.includes('@') || 'Must contain @ symbol' } })} />
					<label htmlFor="" className="text-red-500">{errors?.email?.message}</label>
				</div>

				<div className="w-full">
					<label htmlFor="">Password</label>
					<div className="flex justify-between items-center w-full rounded-lg bg-[#ececf0] pr-3">
						<input placeholder="password" className="w-full border-0 outline-0 p-2" type={`${showPass1?'text':'password'}`} {...register('password', { required: 'Put in a password', minLength: { value: 8, message: "Put in a valid password" } })} />
						<i className={`fa-solid ${showPass1? 'fa-eye-slash' :'fa-eye'} cursor-pointer`} onClick={()=> setShowPass1(prev=>!prev)}></i>
					</div>
					<label htmlFor="" className="text-red-500">{errors?.password?.message}</label>
				</div>

				<div className="w-full">
					<label htmlFor="Repeat password">Repeat Password</label>
					<div className="flex justify-between items-center w-full rounded-lg bg-[#ececf0] pr-3">
						<input placeholder="repeat password" className="w-full rounded-lg bg-[#ececf0] border-0 outline-0 p-2" type={`${showPass2?'text':'password'}`} {...register('rePassword', { required: 'Put in a password', validate: value => value !== password ? 'Put in correct password' : true, minLength: { value: 8, message: "Put in a valid password" } })} />
						<i className={`fa-solid ${showPass2? 'fa-eye-slash' :'fa-eye'} cursor-pointer`} onClick={()=> setShowPass2(prev=>!prev)}></i>
					</div>
					<label htmlFor="" className="text-red-500">{errors?.rePassword?.message}</label>
				</div>

				<button type='submit' className="mt-2.5 px-8 py-1 w-full bg-black rounded-lg text-white cursor-pointer text-[20px] duration-200 hover:bg-[#363636]">Create Account</button>
			</form>
		</div>
	)
}
