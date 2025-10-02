// components/Footer.tsx
import { FaLinkedin, FaInstagram, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";

const relevant_sites = [
	{
		label: "Rural Electrification Agency",
		url: "https://rea.gov.ng/"
	},
	{
		label: "United for Efficiency initiative",
		url: "https://united4efficiency.org/"
	},
	{
		label: "United Nations Environment Programme",
		url: "https://www.unep.org/"
	}
];

const about_u4e = [
	{
		label: "About U4E Nigeria",
		url: "/about"
	},
	{
		label: "In the news",
		url: "/news"
	},
	{
		label: "Impact stories",
		url: "/stories"
	}
]

export default function Footer() {
	const router = useRouter();
	return (
		<footer className="bg-[#044D28] text-white gap-30 py-15 min-h-64 px-6 md:px-20 flex flex-row">
			<div className="">
				{/* Logo + Contact */}
				<div className="w-full h-full space-y-10">
					<Image
						src="/u4e_logo.png"
						alt="U4E Logo"
						className="mb-4 object-cover"
						width={258}
						height={200}
					/>
					<p className="col-start-4 text-xs text-gray-300 text-start mt-5">
						© All rights reserved
					</p>
				</div>
			</div>

			<div className="flex flex-col justify-between w-full flex-1">
				<div className="grid grid-cols-1 md:grid-cols-4">
					{/* Relevant Sites */}
					<div>
						<h4 className="font-semibold mb-3">RELEVANT SITES</h4>
						<ul className="space-y-1 font-normal text-sm">
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
					<div>
						<h4 className="font-semibold mb-3">ABOUT U4E</h4>
						<ul className="space-y-1 font-normal text-sm">
							{about_u4e.map((site, idx) => (
								<li key={idx}>
									<a onClick={() => router.push(site.url)} className="hover:underline cursor-pointer">
										{site.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h4 className="font-semibold mb-3">RESOURCES</h4>
						<ul className="space-y-1 text-sm">
							<li><a href="/resources" className="hover:underline">Downloads</a></li>
							<li><a href="#" className="hover:underline">FAQ</a></li>
						</ul>
					</div>

					<div className="w-full h-full space-y-6">
						<p className="text-sm tracking-tight font-light w-full">
							Rural Electrification Agency <br />
							22 Freetown Crescent, Asokoro, Abuja <br />
							<a href="tel:+2349070790171" className="hover:underline">
							+2349070790171
							</a>
							,{" "}
							<a href="tel:+2349035073791" className="hover:underline">
							+2349035073791
							</a>
						</p>

						<div className="flex justify-between w-full mb-4 md:mb-0">
							<a href="#" className="text-white hover:text-gray-300" aria-label="LinkedIn">
								<FaLinkedin size={32} className="w-auto h-auto" />
							</a>
							<a href="#" className="text-white hover:text-gray-300" aria-label="X (Twitter)">
								<FaXTwitter size={32} />
							</a>
							<a href="#" className="text-white hover:text-gray-300" aria-label="Instagram">
								<FaInstagram size={32} />
							</a>
							<a href="#" className="text-white hover:text-gray-300" aria-label="Facebook">
								<FaSquareFacebook size={32} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
