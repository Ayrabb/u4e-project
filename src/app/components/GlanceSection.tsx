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
    title: "Product Registration Systems",
    text:
      "Enabling the capture and management of the product information that underpins energy efficiency policies or programmes.",
    imgSrc: "/cardplaceholder.jpg",
    imgAlt: "Product Registration",
  },
  {
    title: "Product Registration Systems",
    text:
      "Enabling the capture and management of the product information that underpins energy efficiency policies or programmes.",
    imgSrc: "/cardplaceholder.jpg",
    imgAlt: "Product Registration",
  },
  {
    title: "Product Registration Systems",
    text:
      "Enabling the capture and management of the product information that underpins energy efficiency policies or programmes.",
    imgSrc: "/cardplaceholder.jpg",
    imgAlt: "Product Registration",
  },
  {
    title: "Product Registration Systems",
    text:
      "Enabling the capture and management of the product information that underpins energy efficiency policies or programmes.",
    imgSrc: "/cardplaceholder.jpg",
    imgAlt: "Product Registration",
  },
];

export default function GlanceSection() {
  return (
    <section className="bg-gray-100 py-16 px-8 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#b59d2a] mb-10">
        U4E at a glance
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={card.imgSrc}
              alt={card.imgAlt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm mt-2">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
