import backImg from "/bg-card-back.png";
import frontImg from "/bg-card-front.png";

export default function CardPreview({ cardData }) {
	return (
		<div className="absolute inset-0 flex flex-col justify-center items-center gap-6 md:gap-12">
			{/* Card front */}
			<div className="relative text-white">
				<img src={frontImg} alt="card front" className="w-[320px] md:w-[400px]" />
				{/*<img src={logo} alt="card logo" className="absolute top-5 left-6 w-[60px]" />*/}
				<span className="absolute bottom-16 left-6 text-lg tracking-widest">
					{cardData.number}
				</span>
				<div className="absolute bottom-6 left-6 right-6 flex justify-between text-sm text-gray-200">
					<span>{cardData.name}</span>
					<span>
						{cardData.month}/{cardData.year}
					</span>
				</div>
			</div>

			{/* Card back */}
			<div className="relative">
				<img src={backImg} alt="card back" className="w-[320px] md:w-[400px]" />
				<span className="absolute top-[4.5rem] right-[2.5rem] text-sm tracking-widest text-white">
					{cardData.cvc}
				</span>
			</div>
		</div>
	);
}
