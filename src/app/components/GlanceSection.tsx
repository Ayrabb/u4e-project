import Image from "next/image";

export default function GlanceSection() {
	return (
		<section className="bg-white py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center gap-10">
			<div className="flex-1 text-gray-700">
				<h2 className="text-2xl md:text-3xl font-medium text-[#BFAB25] mb-6">
					The Off-grid Refrigeration Guidelines Pilot Implementation Programme is transforming how rural communities access and use energy-efficient cooling solutions.
				</h2>

				<p className="text-base md:text-lg leading-relaxed mb-4">
					The <span className="font-semibold">United for Efficiency (U4E)</span> initiative, led by the
					United Nations Environment Programme (UNEP), partners with the{" "}
					<span className="font-semibold">Rural Electrification Agency (REA)</span> to accelerate the
					adoption of energy-efficient and climate-friendly technologies in Nigeria. Through the 
					<span className="font-semibold"> Off-grid Refrigeration Guidelines Pilot Implementation Programme</span>, the initiative focuses on
					introducing sustainable cooling solutions to rural and underserved communities.
				</p>

				<p className="text-base md:text-lg leading-relaxed mb-4">
					This partnership aims to enhance food security, healthcare, and economic opportunities by
					deploying energy-efficient off-grid refrigeration systems. It also supports Nigeria’s
					commitment to cleaner energy use, lower emissions, and the Sustainable Development Goals,
					especially Affordable and Clean Energy, Responsible Consumption and Production, and Climate
					Action.
				</p>

				<p className="text-base md:text-lg leading-relaxed">
					Together, UNEP and REA are demonstrating how innovative technology, sound policy, and
					community engagement can transform livelihoods while protecting the environment.
				</p>
			</div>

			<div className="flex-1 w-full max-w-lg mx-auto">
				<div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xs overflow-hidden shadow">
					<Image
						src="/event.jpg"
						alt="U4E Nigeria event"
						fill
						className="object-cover object-center"
						priority
					/>
				</div>
			</div>
		</section>
	);
}