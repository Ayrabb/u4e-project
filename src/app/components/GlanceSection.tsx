import Image from "next/image";

export default function GlanceSection() {
	return (
		<section className="bg-white py-16 px-6 md:px-20 max-w-7xl mx-auto">
			{/* Header */}
			<h2 className="text-3xl md:text-4xl font-semibold text-[#BFAB25] text-center md:text-left mb-10 leading-snug">
				Empowering Rural Communities with Sustainable Cooling Solutions
			</h2>

			{/* Content with Wrapped Image */}
			<div className="relative text-gray-700 text-base md:text-lg leading-relaxed">
				{/* Floating Image (on the right for desktop) */}
				<div className="float-none md:float-right md:ml-8 mb-6 md:mb-4 w-full md:w-[45%] relative h-64 sm:h-80 md:h-[420px] rounded-lg overflow-hidden shadow-lg">
					<Image
						src="/event.jpg"
						alt="U4E Nigeria event"
						fill
						className="object-cover object-center"
						priority
					/>
				</div>

				{/* Paragraphs wrapping around the image */}
				<p className="mb-4">
					The <span className="font-semibold">United for Efficiency (U4E)</span> initiative, led by the{" "}
					<span className="font-semibold">United Nations Environment Programme (UNEP)</span>, partners with the{" "}
					<span className="font-semibold">Rural Electrification Agency (REA)</span> to accelerate the adoption
					of energy-efficient and climate-friendly technologies in Nigeria.
				</p>

				<p className="mb-4">
					Through the{" "}
					<span className="font-semibold">Off-grid Refrigeration Guidelines Pilot Implementation Programme</span>,
					this collaboration introduces sustainable cooling systems to rural and underserved communities—improving
					food security, healthcare, and local economic development.
				</p>

				<p className="mb-4">
					The programme also strengthens Nigeria’s clean energy transition and supports key{" "}
					<span className="font-semibold">Sustainable Development Goals</span>, including{" "}
					<span className="italic">Affordable and Clean Energy</span>,{" "}
					<span className="italic">Responsible Consumption and Production</span>, and{" "}
					<span className="italic">Climate Action</span>.
				</p>

				<p>
					Together, UNEP and REA are demonstrating how innovation, forward-thinking policy, and community engagement
					can empower rural areas with modern, sustainable energy solutions that improve lives and protect the planet.
				</p>
			</div>
		</section>
	);
}
