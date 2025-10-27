"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { ImSpinner2 } from "react-icons/im";
import { IoDownload } from "react-icons/io5";
import { formatDate } from "@/app/components/utilities";

export default function ResourcesPage() {
	const [resources, setResources] = useState<SanityDocument[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchSanityResources = async () => {
			setLoading(true);
			try {
				const query = `*[_type == "resource"] | order(date desc) {
					_id,
					title,
					description,
					date,
					"pdfUrl": pdf.asset->url,
					"pdfFileName": pdf.asset->originalFilename
				}`;

				const res = await client.fetch<SanityDocument[]>(query, {});
				console.log(res);
				setResources(res);
			}
			catch {
				setResources([]); // fallback
				console.log("An error occurred while fetching resources.")
			}
			finally {
				setLoading(false);
			}
		}
		fetchSanityResources();
	}, []);

	if (loading) {
		return (
			<main className="min-h-screen font-montserrat bg-white">
				<Navbar />

				<div className="min-h-screen flex flex-col mx-auto justify-center items-center">
					<ImSpinner2 className="w-12 h-auto text-[#044D28] animate-spin" />
					<p className="text-lg text-gray-700 py-5">Fetching resources...</p>
				</div>

				<Footer />
			</main>
		)
	}

	return (
		<div className="min-h-screen bg-white">
			<Navbar />

			<section
				className="flex min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] from-28% via-[#078042] via-86% to-[#099A4F] to-100% items-center text-white px-5 sm:px-10 md:px-16 lg:px-20"
			>
				<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">Resources</h2>
			</section>

			{loading ? (
				<div className="min-h-screen flex flex-col mx-auto justify-center items-center">
					<ImSpinner2 className="w-12 h-auto text-[#044D28] animate-spin" />
					<p className="text-lg text-gray-700 py-5">Fetching resources...</p>
				</div>
			) : (
				<section className="py-16 px-6 md:px-16 bg-gray-50 flex-1">
					<div className="max-w-5xl mx-auto space-y-8">
						{resources && resources.length > 0 ?
							(resources.map(resource => (
								<div key={resource._id}
									className="bg-white rounded-sm p-4 md:p-4 border border-gray-200"
								>
									<h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
										{resource.title}
									</h2>
									<p className="text-gray-700 leading-relaxed mb-1 text-md md:text-lg">
										{resource.description}
									</p>
									<p className="text-gray-700 mb-2 text-md md:text-lg">
										{formatDate(resource.date)}
									</p>
									<div className="flex justify-end w-full"> 
										<a href={resource.pdfUrl}
											download={resource.pdfFileName || resource.title}
											className="inline-flex items-center gap-2 px-4 py-3 bg-transparent md:bg-[#044D28] text-white text-md md:text-lg font-medium rounded-lg hover:bg-[#078042] transition-colors"
										>
											<IoDownload className="w-8 md:w-5 h-auto text-[#044D28] md:text-white" />
											<p className="hidden md:block">Download PDF</p>
										</a>
									</div>
								</div>))
							) : (
								<div className="min-h-[50vh] flex justify-center text-center w-full">
									<p className="text-gray-500 m-auto text-lg md:text-xl">No resources available at the moment.</p>
								</div>
							)}
					</div>
				</section>
			)}

			<Footer />
		</div>
	);
}
