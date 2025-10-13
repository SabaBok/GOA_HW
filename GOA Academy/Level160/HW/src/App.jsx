import { useState } from "react";
import CardPreview from "./components/CardPreview";
import CardForm from "./components/CardForm";


export default function App() {
	const [cardData, setCardData] = useState({
		name: "JANE APPLESEED",
		number: "0000 0000 0000 0000",
		month: "00",
		year: "00",
		cvc: "000",
	})


	return (
		<main className="flex items-center min-h-screen font-['Space_Grotesk'] text-[18px] max-xl:flex-col">
			{/* left side */}
			<div className="relative bg-cover bg-no-repeat xl:flex-1 max-xl:w-full h-[500px] xl:h-screen bg-[url('/bg-main-desktop.png')]">
				<CardPreview cardData={cardData} />
			</div>

			{/* rigth side */}
			<div className="flex flex-col justify-center flex-3 items-center p-8 w-full">
				<CardForm cardData={cardData}/>
			</div>
		</main>
	);
}
