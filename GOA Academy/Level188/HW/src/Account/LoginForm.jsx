import { useForm } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function RegisterForm({ changeForm }) {
	const navigate = useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { email: '', password: '', } })
	const [accs, setAccs] = useState(JSON.parse(localStorage.getItem('proj-acc')) || [])
	const [showPass1,setShowPass1] = useState(false)

	function checkAcc(email, pass) {
		let userAcc = accs.find(el => el.email == email && el.pass == pass)

		if (!userAcc) {
			alert('Wrong email or password')
			return
		}

		let updated = accs.map(el => {
			if (el.email == email && el.pass == pass) return { ...el, logged: true }

			return el
		})

		setAccs(updated)
		localStorage.setItem('proj-acc', JSON.stringify(updated))

		navigate('/home')
		changeForm(0)
	}

	return (
		<div className="flex flex-col items-center gap-3">
			<form onSubmit={handleSubmit(data => {
				const { email, password } = data
				checkAcc(email, password)
			})}
				className="flex flex-col gap-6 items-center w-full justify-between h-full"
			>
				<div className="w-full">
					<label htmlFor="">Email</label>
					<input placeholder="email" className="w-full p-2 rounded-lg bg-[#ececf0] border-0 outline-0" type="text" {...register('email', { required: 'Put in email address', minLength: { value: 11, message: 'Is not valid email' }, validate: (value) => { value.includes('@') || 'Must contain @ symbol' } })} />
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

				<button type='submit' className="mt-2.5 px-8 py-1 w-full bg-black rounded-lg text-white cursor-pointer text-[20px] duration-200 hover:bg-[#363636]">Sign In</button>
			</form>
		</div>
	)
}
