import { useForm } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function RegisterForm({changeForm}) {
	const navigate = useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { email: '', password: '', } })
	const [accs, setAccs] = useState(JSON.parse(localStorage.getItem('proj-acc')) || [])

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
		<main className="flex w-full min-h-screen flex-col items-center justify-center gap-10 py-10">
			<section className="flex flex-col items-center gap-10 max-w-[600px] w-[95%] min-w-[300px] p-10 bg-blue-100 rounded-[20px]">
				<h1 className="font-bold text-[25px]">Log In</h1>

				<form onSubmit={handleSubmit(data => {
					const {email,password } = data
					checkAcc(email,password)
				})}
					className="flex flex-col gap-4 items-center w-full"
				>
					<div className="w-full">
						<input placeholder="email" className="w-full p-1 rounded-lg border border-blue-600" type="text" {...register('email', { required: 'Put in email address', minLength: { value: 11, message: 'Is not valid email' }, validate: (value) => { value.includes('@') || 'Must contain @ symbol' } })} />
						<label htmlFor="" className="text-red-500">{errors?.email?.message}</label>
					</div>

					<div className="w-full">
						<input placeholder="password" className="w-full p-1 rounded-lg border border-blue-600" type="text" {...register('password', { required: 'Put in a password', minLength: { value: 8, message: "Put in a valid password" } })} />
						<label htmlFor="" className="text-red-500">{errors?.password?.message}</label>
					</div>

					<button type='submit' className="mt-2.5 px-10 py-4 bg-cyan-700 rounded-lg text-white cursor-pointer">Click me</button>
				</form>
			</section>
		</main>
	)
}
