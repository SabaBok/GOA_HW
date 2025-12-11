import { useForm } from "react-hook-form"

export default function RegisterForm() {
	const {register,handleSubmit,watch,formState: { errors }} = useForm({
		defaultValues:{
			fullName:'bondo givia',
			email:'',
			age:'0',
			password:'',
			rePassword:''
		}
	})
	return (
		<section className="flex flex-col items-center gap-10 py-10">
			<form onSubmit={handleSubmit(data=>{
				console.log(data)
			})} className="flex flex-col gap-2 items-center">
				<input placeholder="fullname" className="border border-red-400" type="text" {...register("fullName",{required:'Needs to be filled'})}/>
				<input placeholder="email" className="border border-red-400" type="text" {...register('email',{required:'Put in email address',minLength:{value:11, message:'Is not valid email'}, validate:(value)=>{value.includes('@') || 'Must contain @ symbol'}})}/>
				<input placeholder="age" className="border border-red-400" type="number" {...register('age',{required:'Put in your age',validate:value=> value.includes('-')?'enter valid number':""} )}/>
				<input placeholder="password" className="border border-red-400" type="text" {...register('password', {required:'Put in a password' ,minLength:{value:8,message:"wadi imushave"}})} />
				<input placeholder="re password" className="border border-red-400" type="text" />
				<button type='submit' className="mt-2.5 px-7 py-2 bg-[#444] rounded-lg text-white">Click me</button>
			</form>
			
			<p className="text-red-400">{errors?.password?.message}</p>
		</section>
	)
}
