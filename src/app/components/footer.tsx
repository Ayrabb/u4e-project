import { FaLinkedin, FaInstagram, FaSquareFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";

const relevant_sites = [
	{ label: "Rural Electrification Agency", url: "https://rea.gov.ng/" },
	{ label: "United Nations Environment Programme", url: "https://www.unep.org/" },
	{ label: "United for Efficiency initiative", url: "https://united4efficiency.org/" },
	{ label: "Clean Cooling Collaborative", url: "https://cleancoolingcollaborative.org/" },
];

const about_u4e = [
	{ label: "About us", url: "/about" },
	{ label: "In the news", url: "/news" },
	{ label: "Impact stories", url: "/stories" }
];

const news = [
	{ label: "All news", url: "/news?tab=news" },
	{ label: "Gallery", url: "/news?tab=gallery" },
	{ label: "Videos", url: "/news?tab=videos" }
];

const social_media = [
	{ name: "LinkedIn", url: "https://www.linkedin.com/company/rural-electrification-agency-of-nigeria/", logo: <FaLinkedin className="w-8 h-auto" size={24} /> },
	{ name: "Twitter", url: "https://x.com/TheREANigeria", logo: <FaXTwitter className="w-8 h-auto" size={24} /> },
	{ name: "Instagram", url: "https://www.instagram.com/realREANigeria/", logo: <FaInstagram className="w-8 h-auto" size={24} /> },
	{ name: "Facebook", url: "https://www.facebook.com/REANigeria", logo: <FaSquareFacebook className="w-8 h-auto" size={24} /> },
	{ name: "YouTube", url: "https://www.youtube.com/channel/UCCv3yD12TzC952rXppM8KGg/", logo: <FaYoutube className="w-9 h-auto" size={24} /> },
];

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-[#044D28] text-white py-12 px-6 sm:px-12 lg:px-10 border-t border-[#0a6a3c]/40">
		<div
			className=" mx-auto flex flex-col md:flex-col lg:flex-row
			items-start text-start lg:items-start lg:text-left gap-6 md:gap-12 lg:gap-16 max-w-9xl"
		>
			<div className="w-full lg:w-auto flex flex-col items-center lg:items-center">
				<Image
					src="/rea-white.png"
					alt="REA Logo"
					width={220}
					height={140}
					className="object-contain"
				/>
				{/* Copyright */}
				<p className="text-xs text-gray-300 text-center md:text-center lg:text-left mt-4 lg:mt-6 hidden lg:block">
					© {new Date().getFullYear()} All rights reserved.
				</p>
			</div>
		
			<div
				className="flex flex-col w-full lg:w-auto flex-1 
				lg:flex-row lg:justify-between gap-4 lg:gap-16 [&>*]:w-full lg:[&>*]:w-auto"
			>
				{/* Relevant Sites */}
				<div
					className="py-6 px-0 border-t border-[#0a6a3c]/40 first:border-t-0 md:border-t md:first:border-t-0 lg:border-none lg:py-0"
				>
					<h4 className="font-semibold text-sm tracking-wide mb-3 uppercase">Relevant Sites</h4>
					<ul className="space-y-1 text-sm">
					{relevant_sites.map((site, idx) => (
						<li key={idx}>
							<a onClick={() => router.push(site.url)} className="hover:underline cursor-pointer">
								{site.label}
							</a>
						</li>
					))}
					</ul>
				</div>

				{/* About U4E */}
				<div
					className="
					py-6 px-0
					border-t border-[#0a6a3c]/40
					md:border-t
					lg:border-none lg:py-0
					"
				>
					<h4 className="font-semibold text-sm tracking-wide mb-3 uppercase">Learn more</h4>
					<ul className="space-y-1 text-sm">
					{about_u4e.map((item, idx) => (
						<li key={idx}>
						<a onClick={() => router.push(item.url)} className="hover:underline cursor-pointer">
							{item.label}
						</a>
						</li>
					))}
					</ul>
				</div>

				{/* News and Media */}
				<div
					className="
					py-6 px-0
					border-t border-[#0a6a3c]/40
					md:border-t
					lg:border-none lg:py-0
					"
				>
					<h4 className="font-semibold text-sm tracking-wide mb-3 uppercase">News & Media</h4>
					<ul className="space-y-1 text-sm">
					{news.map((item, idx) => (
						<li key={idx}>
						<a onClick={() => router.push(item.url)} className="hover:underline cursor-pointer">
							{item.label}
						</a>
						</li>
					))}
					</ul>
				</div>
			</div>

			<div className="hidden lg:flex flex-col items-end space-y-4 min-w-[240px]">
				<div className="text-sm text-end leading-relaxed">
					<a href="mailto:info@rea.gov.ng" className="hover:underline block">
						info@rea.gov.ng
					</a>
					<a href="tel:+2348036645113" className="hover:underline block">
						+234 803 664 5113
					</a>
					<p>Rural Electrification Agency</p>
					<p>22 Freetown Street, Wuse II, Abuja</p>
				</div>

				<div className="flex gap-4 justify-end items-center">
					{social_media.map((element, idx) => (
						<a key={idx}
							href={element.url || "#"} aria-label={element.name} className="hover:text-gray-300">
							{element.logo}
						</a>
					))}
				</div>
			</div>
		</div>
		
		{/* On smaller screens */}
		<div className="block lg:hidden mt-10">
			<div className="flex gap-6 justify-center items-center">
				{social_media.map((element, idx) => (
					<a key={idx}
						href={element.url || "#"} aria-label={element.name} className="hover:text-gray-300">
						{element.logo}
					</a>
				))}
			</div>
		</div>

		{/* Copyright */}
		<p className="text-xs text-gray-300 text-center md:text-center lg:text-left mt-4 lg:mt-6 block lg:hidden pt-5">
			© {new Date().getFullYear()} All rights reserved.
		</p>
    </footer>
  );
}