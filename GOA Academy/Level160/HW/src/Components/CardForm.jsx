export default function CardForm() {
	return (
		<form className="flex flex-col gap-5 w-full max-w-[450px] text-gray-800">
			<div>
				<label className="block text-sm tracking-wider text-gray-900 mb-2">CARDHOLDER NAME</label>
				<input
					type="text"
					placeholder="e.g. Jane Appleseed"
					maxLength={21}
					className="w-full border border-gray-400 rounded-lg py-[6px] px-2 focus:outline-none"
				/>
			</div>

			<div>
				<label className="block text-sm tracking-wider text-gray-900 mb-2">CARD NUMBER</label>
				<input
					type="text"
					placeholder="e.g. 1234 5678 9123 0000"
					maxLength={19}
					className="w-full border border-gray-400 rounded-lg py-[6px] px-2 focus:outline-none"
				/>
			</div>

			<div className="flex gap-3">
				<div className="flex-1">
					<label className="block text-sm tracking-wider w-full text-gray-900 mb-2">EXP. DATE (MM/YY)</label>
					<div className="flex gap-2">
						<input
							type="text"
							placeholder="MM"
							maxLength={2}
							className="w-1/2 border border-gray-400 rounded-lg py-[6px] px-2"
						/>
						<input
							type="text"
							placeholder="YY"
							maxLength={2}
							className="w-1/2 border border-gray-400 rounded-lg py-[6px] px-2"
						/>
					</div>
				</div>

				<div className="col-span-1 flex-1">
					<label className="block text-sm tracking-wider text-gray-900 mb-2">CVC</label>
					<input
						type="text"
						placeholder="e.g. 123"
						maxLength={3}
						className="w-full border border-gray-400 rounded-lg py-[6px] px-2"
					/>
				</div>
			</div>

			<button type="submit" className="bg-[#220930] text-white p-3 rounded-lg mt-4 cursor-pointer transition">Confirm</button>
		</form>
	);
}
