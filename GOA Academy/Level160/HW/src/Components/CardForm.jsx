export default function CardForm({ cardData, setCardData, onSubmit }) {
	const update = (field, value) => {
		setCardData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			cardData.name.trim() &&
			cardData.number.replace(/\s/g, "").length === 16 &&
			cardData.month.length === 2 &&
			cardData.year.length === 2 &&
			cardData.cvc.length === 3
		) {
			onSubmit();
		}
	};

	const formatNumber = (value) =>
		value
			.replace(/\D/g, "")
			.slice(0, 16)
			.replace(/(.{4})/g, "$1 ")
			.trim();

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-5 w-full max-w-md text-gray-800"
		>
			<div>
				<label className="block text-sm tracking-wider text-gray-900 mb-2">
					CARDHOLDER NAME
				</label>
				<input
					type="text"
					placeholder="e.g. Jane Appleseed"
					maxLength={21}
					value={cardData.name}
					onChange={(e) => update("name", e.target.value.toUpperCase())}
					className="w-full border border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
				/>
			</div>

			<div>
				<label className="block text-sm tracking-wider text-gray-900 mb-2">
					CARD NUMBER
				</label>
				<input
					type="text"
					placeholder="e.g. 1234 5678 9123 0000"
					maxLength={19}
					value={cardData.number}
					onChange={(e) => update("number", formatNumber(e.target.value))}
					className="w-full border border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
				/>
			</div>

			<div className="grid grid-cols-3 gap-3">
				<div>
					<label className="block text-sm tracking-wider text-gray-900 mb-2">
						EXP. DATE (MM/YY)
					</label>
					<div className="flex gap-2">
						<input
							type="text"
							placeholder="MM"
							maxLength={2}
							value={cardData.month}
							onChange={(e) => update("month", e.target.value.replace(/\D/g, ""))}
							className="w-1/2 border border-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
						/>
						<input
							type="text"
							placeholder="YY"
							maxLength={2}
							value={cardData.year}
							onChange={(e) => update("year", e.target.value.replace(/\D/g, ""))}
							className="w-1/2 border border-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
						/>
					</div>
				</div>

				<div className="col-span-1">
					<label className="block text-sm tracking-wider text-gray-900 mb-2">
						CVC
					</label>
					<input
						type="text"
						placeholder="e.g. 123"
						maxLength={3}
						value={cardData.cvc}
						onChange={(e) => update("cvc", e.target.value.replace(/\D/g, ""))}
						className="w-full border border-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-purple-500"
					/>
				</div>
			</div>

			<button
				type="submit"
				className="bg-purple-900 text-white p-3 rounded-lg mt-4 hover:bg-purple-800 transition"
			>
				Confirm
			</button>
		</form>
	);
}
