// app/components/GlanceSection.tsx
import Image from "next/image";

type Card = {
	title: string;
	text: string;
	imgSrc: string;
	imgAlt: string;
};

const cards: Card[] = [
	{
		title: "Clean Cooling",
		text: "Scaling up efficient, climate-friendly fans and air conditioners to cut energy use and emissions.",
		imgSrc: "/rural-fan.jpg",
		imgAlt: "Product Registration",
	},
	{
		title: "Off-Grid Refrigeration",
		text: "Piloting solar-powered cooling in rural communities to preserve food and medicine.",
		imgSrc: "/woman-fridge.jpg",
		imgAlt: "Product Registration",
	},
	{
		title: "Policy & Standards",
		text: "Nigerian experts and U4E partners shaping standards and labels together.",
		imgSrc: "/men-talking.jpg",
		imgAlt: "Product Registration",
	},
	{
		title: "Climate & Cost Savings",
		text: "Reducing electricity demand, lowering bills, and helping Nigeria meet its climate targets.",
		imgSrc: "/naira.jpg",
		imgAlt: "Product Registration",
	},
];

export default function GlanceSection() {
	return (
		<section className="bg-white py-16 px-8 md:px-20">
			<h2 className="text-2xl md:text-3xl font-medium text-center text-[#BFAB25] mb-10">
				U4E in Nigeria
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{cards.map((card, idx) => (
					<div key={idx} className="relative h-76 overflow-hidden shadow-lg">
						<Image
							src={card.imgSrc}
							alt={card.imgAlt}
							fill
							className="object-cover"
						/>

						<div className="absolute inset-0 bg-black/50"></div>

						<div className="absolute bottom-0 py-4 left-4 right-4 text-white flex flex-col h-full justify-between">
							<h3 className="text-xl font-medium">{card.title}</h3>
							<p className="text-lg mt-2">{card.text}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
