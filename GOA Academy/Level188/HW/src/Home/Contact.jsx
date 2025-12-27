import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
	const [time,setTime] = useState('5')
	const [timeOpen,setTimeOpen] = useState(false)
	const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { name:'',email: '', phone: '', date:'',time,guests:1,request:''} })
	const users = JSON.parse(localStorage.getItem('proj-acc'))
	let admin = users.find(el=>el.title=='admin')

	function saveReservation(data){
		let updated = {...data,hour:time}
		admin.reservation.push(updated)
		localStorage.setItem('proj-acc',JSON.stringify(users))
	}

	return (
		<footer id='contact' className='py-10 px-5 lg:px-25 bg-[#f5f5f7] flex flex-col items-center gap-14 pb-50'>
			<div className='flex flex-col text-center items-center gap-2'>
				<h2 className='font-bold text-[25px]'>Contact & Reservation</h2>
				<p className='opacity-60'>Ready to dine with us? Make a reservation or get in touch with any questions.</p>
			</div>

			<div className='flex max-lg:flex-col lg:justify-center gap-5 flex-wrap w-full h-full'>
				<div className='flex-1 bg-white p-10 rounded-lg shadow-md flex flex-col gap-4 justify-between'>
					<p className='text-[18px]'>Visit us</p>

					<div className='flex gap-2'>
						<i className="mt-[7px] fa-solid fa-location-dot text-[#f54900]"></i>
						<p className='flex flex-col'>Address<span className='opacity-60'>123 Italian Street Downtown, NY 10001</span></p>
					</div>

					<div className='flex gap-2'>
						<i className="mt-[7px] fa-solid fa-phone text-[#f54900]"></i>
						<p className='flex flex-col'>Phone <span className='opacity-60'>(555) 123-4567</span></p>
					</div>

					<div className='flex gap-2'>
						<i className="mt-[7px] fa-regular fa-envelope text-[#f54900]"></i>
						<p className='flex flex-col'>Email <span className='opacity-60'>hello@bellavista.com</span></p>
					</div>

					<div className='flex gap-2'>
						<i className="mt-[7px] fa-regular fa-clock text-[#f54900]"></i>
						<p className='flex flex-col'>Hours
							<span className='opacity-60'>
								Monday - Thursday: 5:00 PM - 10:00 PM <br />
								Friday - Saturday: 5:00 PM - 11:00 PM <br />
								Sunday: 4:00 PM - 9:00 PM <br />
							</span>
						</p>
					</div>
				</div>

				<div className='flex-1 flex flex-col gap-3 bg-white p-3 sm:p-10 rounded-lg shadow-md'>
					<p className='text-[18px]'>Make a Reservation</p>

					<form className='flex flex-col w-full gap-1' onSubmit={handleSubmit(data=> saveReservation(data))}>
						<div className='flex gap-5 items-center w-full'>
							<div className='flex-1 h-20'>
								<label>Name</label>
								<div className={`${errors?.name?.message?'border border-red-500':''} duration-200 w-full rounded-lg bg-[#f3f3f5] px-2 py-1`}><input type="text" className='w-full outline-0' {...register('name',{required:'Put in your name',validate:(value)=> {
									for(let i of value){if(!isNaN(i) && i !== ' ')return 'The name must not contain numbers'}
								}})}/></div>
								<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.name?.message}</p>
							</div>

							<div className='flex-1 h-20'>
								<label>Email</label>
								<div className={`${errors?.email?.message?'border border-red-500':''} duration-200 w-full rounded-lg bg-[#f3f3f5] px-2 py-1`}><input type="email" className='w-full outline-0' {...register('email', { required: 'Put in email address', minLength: { value: 11, message: 'Is not a valid email' }, validate: (value) => { value.includes('@') || 'Must contain @ symbol' } })}/></div>
								<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.email?.message}</p>
							</div>
						</div>

						<div className='w-full flex-1 min-h-20'>
							<label>Phone</label>
							<div className={`${errors?.phone?.message?'border border-red-500':''} duration-200 w-full rounded-lg bg-[#f3f3f5] px-2 py-1`}><input type="text" className='w-full outline-0' {...register('phone',{required:'Put your phone number',minLength:{value:9,message:'Enter in a valid phone number'}, validate:value=>{
								if(value.length !=9) return 'Enter in a valid phone number'
								for(let i of value) if(isNaN(i)) return 'Enter in a valid phone number'
							}})}/></div>
							<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.phone?.message}</p>
						</div>

						<div className='flex gap-2 items-center w-full'>
							<div className='flex-1 h-20'>
								<label>Date</label>
								<div className={`${errors?.date?.message?'border border-red-500':''} duration-200 w-full rounded-lg bg-[#f3f3f5] px-2 py-1`}><input type="date" className='w-full cursor-pointer outline-0' {...register('date', { required: 'Please select a date' })}/></div>
								<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.date?.message}</p>
							</div>

							<div className='flex-1 h-20'>
								<label>Time</label>

								<div className={`${errors?.time?.message?'border border-red-500':''} duration-200 w-full rounded-lg bg-[#f3f3f5] px-2 py-1 relative cursor-pointer`} onClick={()=>setTimeOpen(prev=>!prev)}>{time} PM

									<div className={`${timeOpen ? 'scale-y-100 opacity-100' : 'opacity-0 scale-y-0'} rounded-lg origin-top duration-200 w-full h-max p-2 flex flex-col gap-2 absolute top-[35px] left-1/2 -translate-x-1/2 bg-white shadow-md border border-[#33333342]`}>
										{
											['5','5:30','6','6:30','7','7:30','8','8:30','9'].map((el,i)=>(
												<option key={i} value={el} className={`${el == time ? 'bg-[#d2d2d2]' : ''} rounded-lg duration-200 hover:bg-[#d2d2d2] p-1`} onClick={()=> setTime(el)} {...register('time',{required:'Must enter in a time'})}>{el} PM</option>
											))
										}
									</div>
								</div>
								<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.time?.message}</p>
							</div>

							<div className='flex-1 h-20'>
								<label>Guests</label>
								<div className={`${errors?.guests?.message?'border border-red-500':''} duration-200 w-full rounded-lg bg-[#f3f3f5] px-2 py-1`}><input type="number" className='w-full outline-0' placeholder='# of guests' {...register('guests',{required:'Enter the guest ammount',min: { value: 1, message: 'Minimum 1 guest' },max: { value: 10, message: 'Maximum 10 guests' }})}/></div>
								<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.guests?.message}</p>
							</div>
						</div>

						<div className='w-full'>
							<label>Special Requests</label>
							<div className='w-full rounded-lg bg-[#f3f3f5] px-2 py-1'><textarea className='w-full text-[13px] outline-0' placeholder='Any dietary restrictions, special occasions, or other requests...' {...register('request')}></textarea></div>
						</div>

						<button className='bg-[#f54900] text-white rounded-lg py-1 cursor-pointer duration-200 hover:bg-[#db4200]' type='submit'>Submit Reservation Request</button>
					</form>
				</div>
			</div>
		</footer>
	)
}
