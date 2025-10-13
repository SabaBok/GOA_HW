import frontImg from "/bg-card-front.png";

export default function CardPreview({ cardData }) {
	return (
		<div className="absolute inset-0 flex flex-col justify-center items-center gap-6 md:gap-12">
			{/* Card front */}
			<div className="relative max-xl:order-2 text-white p-10 bg-[url(/bg-card-front.png)] bg-no-repeat bg-contain w-[364px] h-[200px]">
				<div className="absolute top-[20px] left-[20px] flex items-center gap-5">
					<div className="p-[18px] bg-white rounded-[50%]"></div>
					<div className="border border-whjite rounded-[50%] p-[10px]"></div>
				</div>

				<span className="absolute bottom-16 left-6 text-lg tracking-[7px] font-[500] w-full">{cardData.number}</span>
				<div className="absolute bottom-6 left-6 right-6 flex justify-between text-sm text-gray-200">
					<span>{cardData.name}</span>
					<span>{cardData.month}/{cardData.year}</span>
				</div>
			</div>

			{/* Card back */}
			<div className={`relative max-xl:order-1 ml-[100px] bg-no-repeat bg-contain bg-[url(/bg-card-back.png)] w-[364px] h-[200px]`}>
				<span className="absolute top-[45%] right-[2.5rem] text-sm tracking-widest text-white">{cardData.cvc}</span>
			</div>
		</div>
	);
}
