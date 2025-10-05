import { FaLinkedin, FaInstagram, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
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
				className="flex flex-col w-full lg:w-auto
				lg:flex-row lg:justify-center gap-4 lg:gap-16 [&>*]:w-full lg:[&>*]:w-auto"
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
            <p>22 Freetown Crescent, Asokoro, Abuja</p>
          </div>

          <div className="flex gap-4 justify-end">
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <FaLinkedin className="w-8 h-auto" size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <FaXTwitter className="w-8 h-auto" size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram className="w-8 h-auto" size={24} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <FaSquareFacebook className="w-8 h-auto" size={24} />
            </a>
          </div>
        </div>
      </div>

		<div className="block lg:hidden mt-10">
			<div className="flex gap-6 justify-center">
				<a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
					<FaLinkedin className="w-8 h-auto" size={24} />
				</a>
				<a href="#" aria-label="Twitter" className="hover:text-gray-300">
					<FaXTwitter className="w-8 h-auto" size={24} />
				</a>
				<a href="#" aria-label="Instagram" className="hover:text-gray-300">
					<FaInstagram className="w-8 h-auto" size={24} />
				</a>
				<a href="#" aria-label="Facebook" className="hover:text-gray-300">
					<FaSquareFacebook className="w-8 h-auto" size={24} />
				</a>
			</div>
		</div>

		{/* Copyright */}
		<p className="text-xs text-gray-300 text-center md:text-center lg:text-left mt-4 lg:mt-6 block lg:hidden pt-5">
			© {new Date().getFullYear()} All rights reserved.
		</p>
    </footer>
  );
}