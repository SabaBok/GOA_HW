import { useForm } from "react-hook-form"
import { useState } from "react"
import { useContext } from 'react'
import { FoodItems } from "../FullPage"
import AlertModal from "../Components/AlertModal"

export default function RegisterForm({ changeForm }) {
	const { accs, setAccs } = useContext(FoodItems)

	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			rePassword: ''
		}
	})

	const [alertText, setAlertText] = useState('')

	const password = watch("password")
	const [showPass1, setShowPass1] = useState(false)
	const [showPass2, setShowPass2] = useState(false)

	function saveAccount(name, email, pass) {
		if (accs.some(el => el.email === email)) {
			alert('An account with that email already exists')
			return
		}

		const newAcc = {
			name,
			email,
			pass,
			logged: false,
			orders: [],
			finishedOrders: [],
			cart: [],
			money: 100,
			title: 'user'
		}

		const updated = [...accs, newAcc]
		setAccs(updated)

		changeForm(1)
		setAlertText('Account has been created')
	}

	return (
		<div className="flex flex-col items-center gap-3">
			<AlertModal message={alertText} duration={4000} onClose={() => setAlertText('')} />

			<form onSubmit={handleSubmit(data => {
				const { fullName, email, password } = data
				saveAccount(fullName, email, password)
			})}
				className="flex flex-col gap-4 items-center w-full"
			>

				<div className="w-full">
					<label className='text-[#d1d1d1]' htmlFor="Full Name">Full Name</label>
					<input placeholder="full name" className="w-full rounded-lg bg-[#3a3a3a] border-0 outline-0 p-2 text-[#e0e0e0]" type="text" {...register('fullName', { required: 'Put in full name' })} />
					<label htmlFor="" className="text-red-500">{errors?.fullName?.message}</label>
				</div>

				<div className="w-full">
					<label className='text-[#d1d1d1]' htmlFor="Email">Email</label>
					<input placeholder="email" className="w-full rounded-lg bg-[#3a3a3a] border-0 outline-0 p-2 text-[#e0e0e0]" type="text" {...register('email', { required: 'Put in email address', minLength: { value: 11, message: 'Is not valid email' }, validate: (value) => value.includes('@') || 'Must contain @ symbol' })} />
					<label htmlFor="" className="text-red-500">{errors?.email?.message}</label>
				</div>

				<div className="w-full">
					<label className='text-[#d1d1d1]' htmlFor="Password">Password</label>
					<div className="flex justify-between items-center w-full rounded-lg bg-[#3a3a3a] pr-3">
						<input placeholder="password" className="w-full border-0 outline-0 p-2 text-[#e0e0e0]" type={`${showPass1 ? 'text' : 'password'}`} {...register('password', { required: 'Put in a password', minLength: { value: 8, message: "Put in a valid password" } })} />
						<i className={`fa-solid ${showPass1 ? 'fa-eye-slash' : 'fa-eye'} cursor-pointer text-[#d1d1d1]`} onClick={() => setShowPass1(prev => !prev)}></i>
					</div>
					<label htmlFor="" className="text-red-500">{errors?.password?.message}</label>
				</div>

				<div className="w-full">
					<label className='text-[#d1d1d1]' htmlFor="Repeat password">Repeat Password</label>
					<div className="flex justify-between items-center w-full rounded-lg bg-[#3a3a3a] pr-3">
						<input placeholder="repeat password" className="w-full rounded-lg bg-[#3a3a3a] border-0 outline-0 p-2 text-[#e0e0e0]" type={`${showPass2 ? 'text' : 'password'}`} {...register('rePassword', { required: 'Put in a password', validate: value => value !== password ? 'Put in correct password' : true, minLength: { value: 8, message: "Put in a valid password" } })} />
						<i className={`fa-solid ${showPass2 ? 'fa-eye-slash' : 'fa-eye'} cursor-pointer text-[#d1d1d1]`} onClick={() => setShowPass2(prev => !prev)}></i>
					</div>
					<label htmlFor="" className="text-red-500">{errors?.rePassword?.message}</label>
				</div>

				<button type='submit' className="mt-2.5 px-8 py-1 w-full bg-[#3a3a3a] rounded-lg text-white cursor-pointer text-[20px] duration-200 hover:bg-[#4a4a4a]">Create Account</button>
			</form>
		</div>
	)
}