import { memo, useState, useEffect } from 'react'
import Header from '../Components/Header'
import AlertModal from '../Components/AlertModal'

export default function Blogs() {
	const [alertText, setAlertText] = useState('')

	const [blog, setBlog] = useState(() => {
		const stored = localStorage.getItem('proj-blogs')
		try {
			const parsed = JSON.parse(stored)
			return Array.isArray(parsed) ? parsed : []
		} catch {
			return []
		}
	})
	const BlogItem = memo(({ el }) => {
		return (
			<div className='flex flex-col bg-white rounded-lg w-[300px] h-[350px] text-black'>
				<img src={el.img} alt="image" className='h-4/5 rounded-t-lg'/>
				<div className='h-1/5 flex flex-col justify-between items-start p-1'>
					<p>{el.text}</p>
					<button onClick={() => removeBlog(el)} className='px-2 py-1 bg-red-600 text-white rounded-lg cursor-pointer duration-250 hover:bg-red-700'>Remove</button>
				</div>
			</div>
		)
	})

	function addNewBlog(event) {
		event.preventDefault()

		let img = event.target.img.value
		let text = event.target.text.value

		if (img == " " || text == " ") {
			setAlertText('the field must be filled with text')
		}
		let newBlog = { img, text }
		setBlog(prev => {
			const updated = [...prev, newBlog]
			localStorage.setItem('proj-blogs', JSON.stringify(updated))
			return updated
		})
		setAlertText('New Blog Has Been Added')
	}

	function removeBlog(item) {
		let updated = [...blog].filter(el => el.text != item.text && el.img != item.img)
		setBlog(updated)
		localStorage.setItem('proj-blogs', JSON.stringify(updated))
		setAlertText('A Blog Has Been Deleted')
	}

	return (
		<section className='w-full h-full'>
			<Header />
			<AlertModal message={alertText} onClose={() => setAlertText('')} />

			<main className='mt-[100px] text-white flex flex-col items-center w-full h-full gap-20 px-20'>
				<div className='flex flex-col items-center text-center'>
					<h2 className='text-[30px] font-bold'>Blogs</h2>
					<p className='opacity-60'>any news that happen will be reprted here</p>
				</div>

				<form className='flex justify-between gap-3 w-full bg-[#444] px-3 py-2 rounded-lg items-center' onSubmit={(event) => addNewBlog(event)}>
					<label className='flex-1 py-2'>Post a new blog</label>
					<div className='flex-4 bg-[#666] p-2 rounded-lg flex gap-2 border'>
						<input type="text" name='img' className='border outline-0 p-1 rounded-lg' required />
						<input type="text" placeholder='Blog text' className='w-full p-1 border outline-0 rounded-lg' name='text' required />
					</div>
					<button className='flex-1 px-3 py-2 bg-gray-600 rounded-lg cursor-pointer duration-250 hover:bg-gray-500'>Post</button>
				</form>

				<div className='flex flex-wrap justify-center'>
					{
						blog.length > 0 && [...blog].map((blog, ind) => (
							<BlogItem key={ind} el={blog} />
						))
					}
				</div>
			</main>
		</section>
	)
}
