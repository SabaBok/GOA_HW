import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
	const [time, setTime] = useState('5')
	const [timeOpen, setTimeOpen] = useState(false)
	const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { name: '', email: '', phone: '', date: '', time, guests: 1, request: '' } })
	const users = JSON.parse(localStorage.getItem('proj-acc'))
	let admin = users.find(el => el.title == 'admin')

	function saveReservation(data) {
		let updated = { ...data, hour: time }
		admin.reservation.push(updated)
		localStorage.setItem('proj-acc', JSON.stringify(users))
	}

	return (
		<footer id='contact' className='py-10 px-5 lg:px-25 bg-[#1e1e1e] flex flex-col items-center gap-14 pb-50'>
			<div className='flex flex-col text-center items-center gap-2'>
				<h2 className='font-bold text-[25px] text-white'>Contact & Reservation</h2>
				<p className='opacity-60 text-[#d1d1d1]'>Ready to dine with us? Make a reservation or get in touch with any questions.</p>
			</div>

			<div className='flex max-lg:flex-col lg:justify-center gap-5 flex-wrap w-full h-full'>
				<div className='flex-1 bg-[#2a2a2a] p-10 rounded-lg shadow-md flex flex-col gap-4 justify-between border border-[#4a4a4a]'>
					<p className='text-[18px] text-white'>Visit us</p>

					<div className='flex gap-2'>
						<i className="mt-[7px] fa-solid fa-location-dot text-[#e53e3e]"></i>
						<p className='flex flex-col text-[#d1d1d1]'>Address<span className='opacity-60'>123 Italian Street Downtown, NY 10001</span></p>
					</div>

					<div className='flex gap-2'>
						<i className="mt-[7px] fa-solid fa-phone text-[#e53e3e]"></i>
						<p className='flex flex-col text-[#d1d1d1]'>Phone<span className='opacity-60'>+1 (212) 123-4567</span></p>
					</div>

					<div className='flex gap-2'>
						<i className="mt-[7px] fa-solid fa-envelope text-[#e53e3e]"></i>
						<p className='flex flex-col text-[#d1d1d1]'>Email<span className='opacity-60'>info@goatona.com</span></p>
					</div>

					<div className='flex gap-2'>
						<i className="mt-[7px] fa-solid fa-clock text-[#e53e3e]"></i>
						<p className='flex flex-col text-[#d1d1d1]'>Opening Hours<span className='opacity-60'>Mon-Sat: 11AM - 10PM<br />Sun: 12PM - 9PM</span></p>
					</div>
				</div>

				<div className='flex-1 bg-[#2a2a2a] p-10 rounded-lg shadow-md flex flex-col gap-4 border border-[#4a4a4a]'>
					<form onSubmit={handleSubmit(saveReservation)} className='flex flex-col gap-4'>
						<h2 className='font-bold text-[25px] text-white'>Make a Reservation</h2>

						<div className='w-full'>
							<label className='text-[#d1d1d1]'>Name</label>
							<div className={`${errors?.name?.message ? 'border border-red-500' : ''} duration-200 w-full rounded-lg bg-[#3a3a3a] px-2 py-1`}><input type="text" className='w-full outline-0 text-[#e0e0e0]' placeholder='Your Name' {...register('name', { required: 'Enter your name' })} /></div>
							<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.name?.message}</p>
						</div>

						<div className='flex gap-4'>
							<div className='flex-1 h-20'>
								<label className='text-[#d1d1d1]'>Email</label>
								<div className={`${errors?.email?.message ? 'border border-red-500' : ''} duration-200 w-full rounded-lg bg-[#3a3a3a] px-2 py-1`}><input type="email" className='w-full outline-0 text-[#e0e0e0]' placeholder='Your Email' {...register('email', { required: 'Enter your email', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} /></div>
								<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.email?.message}</p>
							</div>

							<div className='flex-1 h-20'>
								<label className='text-[#d1d1d1]'>Phone</label>
								<div className={`${errors?.phone?.message ? 'border border-red-500' : ''} duration-200 w-full rounded-lg bg-[#3a3a3a] px-2 py-1`}><input type="tel" className='w-full outline-0 text-[#e0e0e0]' placeholder='Your Phone' {...register('phone', { required: 'Enter your phone number' })} /></div>
								<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.phone?.message}</p>
							</div>
						</div>

						<div className='flex gap-4'>
							<div className='flex-1 h-20'>
								<label className='text-[#d1d1d1]'>Date</label>
								<div className={`${errors?.date?.message ? 'border border-red-500' : ''} duration-200 w-full rounded-lg bg-[#3a3a3a] px-2 py-1`}><input type="date" className='w-full outline-0 text-[#e0e0e0]' {...register('date', { required: 'Enter a date' })} /></div>
								<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.date?.message}</p>
							</div>

							<div className='flex-1 h-20 relative'>
								<label className='text-[#d1d1d1]'>Time</label>
								<div className={`${errors?.time?.message ? 'border border-red-500' : ''} duration-200 w-full rounded-lg bg-[#3a3a3a] px-2 py-1`} onClick={() => setTimeOpen(prev => !prev)}><p className='cursor-pointer text-[#e0e0e0]'>{time} PM</p></div>
								<div className={`${timeOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-200 absolute top-full w-full z-3 bg-[#2a2a2a] rounded-lg p-1 flex flex-col gap-1 shadow-md border border-[#4a4a4a]`}>
									{
										['5', '6', '7', '8', '9'].map((el, i) => (
											<option key={i} value={el} className={`${el == time ? 'bg-[#4a4a4a]' : ''} rounded-lg duration-200 hover:bg-[#4a4a4a] p-1 text-[#e0e0e0]`} onClick={() => setTime(el)} {...register('time', { required: 'Must enter in a time' })}>{el} PM</option>
										))
									}
								</div>
								<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.time?.message}</p>
							</div>

							<div className='flex-1 h-20'>
								<label className='text-[#d1d1d1]'>Guests</label>
								<div className={`${errors?.guests?.message ? 'border border-red-500' : ''} duration-200 w-full rounded-lg bg-[#3a3a3a] px-2 py-1`}><input type="number" className='w-full outline-0 text-[#e0e0e0]' placeholder='# of guests' {...register('guests', { required: 'Enter the guest ammount', min: { value: 1, message: 'Minimum 1 guest' }, max: { value: 10, message: 'Maximum 10 guests' } })} /></div>
								<p className='text-red-500 text-sm mt-1 text-[12px]'>{errors?.guests?.message}</p>
							</div>
						</div>

						<div className='w-full'>
							<label className='text-[#d1d1d1]'>Special Requests</label>
							<div className='w-full rounded-lg bg-[#3a3a3a] px-2 py-1'><textarea className='w-full text-[13px] outline-0 text-[#e0e0e0]' placeholder='Any dietary restrictions, special occasions, or other requests...' {...register('request')}></textarea></div>
						</div>

						<button className='bg-[#e53e3e] text-white rounded-lg py-1 cursor-pointer duration-200 hover:bg-[#c53030]' type='submit'>Submit Reservation Request</button>
					</form>
				</div>
			</div>
		</footer>
	)
}
