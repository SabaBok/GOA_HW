//import icon from "../assets/icon-complete.svg";

export default function ThankYou({ onContinue }) {
	return (
		<div className="flex flex-col items-center justify-center text-center animate-fadeIn">
			{/*<img src={icon} alt="" className="w-20 mb-6" />*/}
			<h1 className="text-3xl font-semibold mb-2">THANK YOU!</h1>
			<p className="text-gray-500 mb-8">We've added your card details</p>
			<button
				onClick={onContinue}
				className="bg-purple-900 text-white px-12 py-3 rounded-lg hover:bg-purple-800 transition"
			>
				Continue
			</button>
		</div>
	);
}
