import { useEffect, useState } from "react"

export default function AlertModal({ message, duration = 2000, onClose }) {
	const [visible, setVisible] = useState(false)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		if (!message) return

		setVisible(true)
		setProgress(0)

		const startTime = Date.now()

		const frame = () => {
			const elapsed = Date.now() - startTime
			const percentage = Math.min((elapsed / duration) * 100, 100)
			setProgress(percentage)

			if (elapsed < duration) {
				requestAnimationFrame(frame)
			}
		}

		requestAnimationFrame(frame)

		const hideTimer = setTimeout(() => setVisible(false), duration - 50)
		const removeTimer = setTimeout(() => onClose?.(), duration)

		return () => {
			clearTimeout(hideTimer)
			clearTimeout(removeTimer)
		}
	}, [message, duration, onClose])

	if (!message) return null

	return (
		<div className={`fixed min-w-[300px] w-[95%] max-w-[350px] min-h-[100px] top-2.5 right-4 flex flex-col justify-center z-50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
			<div className="bg-white px-6 py-4 rounded-2xl w-full shadow-xl border border-gray-200 relative overflow-hidden">
				<p className="text-gray-800">{message}</p>
				<div className="absolute bottom-0 left-0 h-1 bg-blue-500" style={{ width: `${progress}%` }} />
			</div>
		</div>
	)
}
