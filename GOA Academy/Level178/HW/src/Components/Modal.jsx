// components/Modal.jsx
import { useEffect, useState } from "react"

export default function Modal({ message, duration = 2000, onClose }) {
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		// Start fade-out before duration ends
		const timer = setTimeout(() => setVisible(false), duration - 300)
		// Call onClose when duration ends
		const removeTimer = setTimeout(() => onClose?.(), duration)

		return () => {
			clearTimeout(timer)
			clearTimeout(removeTimer)
		}
	}, [duration, onClose])

	return (
		<div className={`fixed min-w-[300px] w-[95%] max-w-[350px] min-h-[100px] top-[10px] right-[20px] flex items-center justify-center z-50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
			<div className="bg-white px-6 py-4 rounded-2xl w-full h-full shadow-xl border border-gray-200">
				<p className="text-gray-800">{message}</p>
			</div>
		</div>
	)
}
