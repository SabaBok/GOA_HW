import { useState } from "react";
import CardPreview from "./components/CardPreview";
import CardForm from "./components/CardForm";
import ThankYou from "./components/ThankYou";

export default function App() {
	const [cardData, setCardData] = useState({
		name: "JANE APPLESEED",
		number: "0000 0000 0000 0000",
		month: "00",
		year: "00",
		cvc: "000",
	})

	const [submitted, setSubmitted] = useState(false)

	return (
		<main className="flex flex-col md:grid md:grid-cols-[1fr_2fr] min-h-screen font-['Space_Grotesk'] text-[18px] tracking-[1px]">
			{/* left side */}
			<div
				className="relative bg-cover bg-no-repeat md:w-1/3 w-full h-[300px] md:h-screen"
				style={{backgroundImage: `url('./assets/bg-main-desktop.png')`,}}>
				<CardPreview cardData={cardData} />
			</div>

			{/* rigth side */}
			<div className="flex flex-col justify-center items-center p-8 w-full">
				{!submitted ? (
					<CardForm cardData={cardData} setCardData={setCardData} onSubmit={() => setSubmitted(true)} />
				) : (
					<ThankYou onContinue={() => setSubmitted(false)} />
				)}
			</div>
		</main>
	);
}
