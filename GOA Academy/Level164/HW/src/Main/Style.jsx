export default function Style() {
	return (
		<section className="mt-[100px] w-[90%] max-w-[1500px] flex flex-col items-center bg-[#F0F0F0] rounded-[20px] py-10 px-5">
			<h1 className="font-[800] text-[32px]">BROWSE BY DRESS STYLE</h1>

			<div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 max-lg:auto-rows-[300px] w-[80%] min-h-[600px] max-lg:min-h-[1000px] max-w-[1200px] px-10 py-5 gap-10">
				<div className="cursor-pointer bg-[url(/styles/casual.png)] bg-no-repeat bg-cover w-full h-full rounded-[20px]"></div>
				<div className="cursor-pointer lg:col-start-2 col-span-2 bg-[url(/styles/formal.png)] bg-no-repeat bg-cover w-full h-full rounded-[20px]"></div>
				<div className="cursor-pointer lg:col-start-1 col-span-2 bg-[url(/styles/party.png)] bg-no-repeat bg-cover w-full h-full rounded-[20px]"></div>
				<div className="cursor-pointer bg-[url(/styles/gym.png)] bg-no-repeat bg-cover w-full h-full rounded-[20px]"></div>
			</div>

		</section>
	)
}
