/* eslint-disable react/no-unescaped-entities */
"use client"

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import VideoCard from "../components/VideoCard"

const AboutREA = () => (
    <section className="w-full">
        <div className="max-w-4xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-[#044D28] font-medium mb-4 md:mb-6">
                About Rural Electrification Agency (REA)
            </h3>
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                <p>
                    The Nigerian Rural Electrification Agency (REA) is the Implementing Agency of the Federal 
                    Government of Nigeria (FGN) under the Federal Ministry of Power tasked with the 
                    electrification of unserved and underserved communities to catalyse economic growth and 
                    improve quality of life for Nigerians.
                </p>
            </div>

            {/* Our Mandate Section */}
          <div className="grid md:grid-cols-2 gap-2 items-center mb-8">
            <div>
                <h4 className="text-xl md:text-xl text-[#044D28] font-normal mb-4">
                Our mandate
                </h4>
                <div className="text-gray-700 text-md leading-relaxed">
                <p className="mb-4">The Mandate of the REA is structured around three dimensions:</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-3 ml-4">
                    <li className="flex min-w-[300px]">
                        <span className="text-[#044D28] font-bold mr-2">1.</span>
                        <span>Promoting Rural Electrification in the country</span>
                    </li>
                    <li className="flex min-w-[300px]">
                    <span className="text-[#044D28] font-bold mr-2">2.</span>
                    <span>Coordinating the Rural Electrification Programmes in the country</span>
                    </li>
                    <li className="flex min-w-[300px]">
                    <span className="text-[#044D28] font-bold mr-2">3.</span>
                    <span>
                        Administering the Rural Electrification Fund (REF) to promote, support and provide
                        rural electrification through Public and Private Sector Participation
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            </div>


            <div className="space-y-4 text-gray-700 text-md leading-relaxed mb-6">
                <p>
                    Furthermore, to promote rural electrification and coordinate programmes in the country, the 
                    Agency also creates an enabling environment by conducting feasibility assessments, energy 
                    audits, enumerations, data analysis, other technical assistance, and stakeholder 
                    engagements.
                </p>
            </div>
        </div>
    </section>
);

const AboutUNEP = () => (
    <section className="w-full">
        <div className="max-w-6xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-[#044D28] font-medium mb-4 md:mb-6">
                About United Nations Environment Programme (UNEP)
            </h3>
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                    The United Nations Environment (UNEP) is the leading global authority on the environment, 
                    providing guidance and support to countries in achieving sustainable development. UNEP 
                    works to strengthen environmental governance, promote clean and efficient energy systems, 
                    and advance climate resilience. Through initiatives such as the <b>United for Efficiency (U4E) </b> 
                    programme, UNEP has been at the forefront of developing and promoting minimum energy 
                    performance standards, including for cooling and refrigeration, to help countries reduce 
                    greenhouse gas emissions, lower energy costs, and improve access to sustainable 
                    technologies.
                </p>
                <p>
                    U4E is a global initiative led by UNEP, supported by leading companies and organizations with 
                    a shared interest in transforming markets for lighting, appliances and equipment, by 
                    encouraging countries to implement an integrated policy approach to energy-efficient 
                    products so as to bring about a lasting, sustainable and cost-effective market transformation. 
                    At the heart of the Offgrid Refrigeration Guidelines Pilot Implementation Program are the U4E 
                    Model Quality and Performance Guidelines for Off-Grid Refrigerating Appliances. These 
                    guidelines ensure that the appliances deployed are not only energy-efficient and affordable, 
                    but also environmentally responsible — marking a pivotal step toward bridging Nigeria's 
                    energy access gap while supporting global climate goals.
                </p>
            </div>

            {/* SDG Goals Section */}
            <div className="mt-6 md:mt-8 space-y-4">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    The U4E programme in Nigeria will contribute to the following UN Sustainable Development Goals:
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    <div className="flex flex-col items-center">
                        <Image 
                            src="/sdg-logos/7.png" 
                            alt="SDG 7 - Affordable and Clean Energy"
                            className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[200px] h-auto"
                            width={150}
                            height={150}
                        />
                        <p className="text-center text-xs sm:text-sm mt-2 sm:mt-3 text-gray-700">Affordable and Clean Energy</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image 
                            src="/sdg-logos/11.png" 
                            alt="SDG 11 - Sustainable Cities and Communities"
                            className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[200px] h-auto"
                            width={150}
                            height={150}
                        />
                        <p className="text-center text-xs sm:text-sm mt-2 sm:mt-3 text-gray-700">Sustainable Cities and Communities</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image 
                            src="/sdg-logos/12.png" 
                            alt="SDG 12 - Responsible Consumption and Production"
                            className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[200px] h-auto"
                            width={150}
                            height={150}
                        />
                        <p className="text-center text-xs sm:text-sm mt-2 sm:mt-3 text-gray-700">Responsible Consumption and Production</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image 
                            src="/sdg-logos/13.png" 
                            alt="SDG 13 - Climate Action"
                            className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[200px] h-auto"
                            width={150}
                            height={150}
                        />
                        <p className="text-center text-xs sm:text-sm mt-2 sm:mt-3 text-gray-700">Climate Action</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ProgramComponents = () => {
    const components = [
        {
            title: "Market Assessment for Off-grid Refrigeration",
            objective: "A targeted market assessment will be conducted to identify the key barriers hindering the widespread adoption of off-grid refrigeration technologies in rural Nigeria.",
            output: "Market Assessment Report: comprehensive technical report documenting results of market analysis",
            deliverables: [
            "Profiles of 3-5 potential pilot communities with off-grid energy access and refrigeration demand",
            "Segmentation of end-users by type, cooling needs, and daily usage profiles",
            "Comparative assessment of available off-grid refrigeration technologies in the Nigerian market",
            "Identification of supply chain gaps and after-sales support availability",
            "Financial modeling and business cases for different end-user types",
            "Detailed pilot design framework (target users, deployment plan, M&E system)"
            ]
        },
        {
            title: "Awareness Creation for Off-Grid Refrigeration Deployment in Rural Areas",
            objective: "Implement targeted awareness activities to ensure successful uptake of the pilot program including stakeholder workshops and community engagement programs.",
            output: "Awareness Campaign Report: A narrative and visual report including",
            deliverables: [
            "Documentation of the stakeholder workshop: agenda, materials used, discussion summaries, participant list (disaggregated by gender and affiliation), and feedback received",
            "Reports from community engagement sessions: locations, session format, participation statistics, user",
            "Summary of media activities, including press coverage, perceptions, social media engagement, and communication materials produced"
            ]
        },
        {
            title: "Demonstration and Pilot Scheme in Selected Communities",
            objective: "To validate the technical feasibility, economic viability, and user acceptability of off-grid refrigeration systems, a pilot project will be implemented in carefully selected rural communities.",
            output: "Pilot Demonstration Report: A results-focused report presenting the implementation and evaluation of the pilot including",
            deliverables: [
            "Documentation of community selection process and justification",
            "List of deployed refrigeration units by community and user type",
            "Technical specifications and deployment model used (e.g., Pay as you go, outright purchase)",
            "User training reports with attendance logs, training content, and photos",
            "Performance data (e.g., energy use, temperature stability, uptime)",
            "Economic and social outcomes (e.g., income generation, food/medicine preservation, user satisfaction)",
            "Lessons learned and recommendations for scale-up"
            ]
        }
    ];

    return (
        <div className="pb-10">
            {/* Program components */}
            <h4 className="text-lg sm:text-xl md:text-2xl text-[#044D28] font-normal mb-6 md:mb-8 mt-8 md:mt-12">
                Program components
            </h4>

            <div className="hidden md:block">
            {components.map((component, idx) => (
                <div key={idx} className="mb-8 md:mb-10 bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                        <span className="text-base sm:text-lg font-bold text-[#044D28] min-w-[1.5rem] sm:min-w-[2rem]">{idx+1}</span>
                        <div className="flex-1">
                            <h5 className="text-base sm:text-lg font-semibold text-[#044D28] mb-2">
                                {component.title}
                            </h5>
                            <p className="text-gray-700 text-sm sm:text-base mb-4">
                                <span className="font-medium">Objective:</span> {component.objective}
                            </p>
                            <div className="bg-white p-3 sm:p-4 rounded">
                                <p className="font-medium text-[#044D28] mb-3 text-[0.9rem] sm:text-base">{component.output} including:</p>
                                <ul className="space-y-2 text-gray-700 text-[0.8rem] sm:text-base">
                                    {component.deliverables.map((element, idy) => (
                                        <li key={idy} className="flex gap-2">
                                            <span className="text-[#044D28] mt-1 flex-shrink-0">•</span>
                                            <span>{element}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>

            <div className="block md:hidden w-full space-y-6">
            {components.map((component, idx) => (
                <div
                    key={idx}
                    className="p-4 sm:p-5"
                >
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-black font-bold text-xl">
                        {idx + 1}
                    </div>
                    <h5 className="text-base text-md md:text-lg font-semibold text-[#044D28] flex-1">
                        {component.title}
                    </h5>
                </div>

                <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                    <span className="font-medium">Objective:</span> {component.objective}
                </p>

                <div className="mt-3 bg-gray-50 p-3 sm:p-4 rounded border border-gray-200">
                    <p className="font-medium text-[#044D28] text-sm sm:text-base mb-2">
                        {component.output} including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1 sm:space-y-2">
                    {component.deliverables.map((item, idy) => (
                        <li key={idy}>{item}</li>
                    ))}
                    </ul>
                </div>
            </div>
            ))}
            </div>
        </div>
);}

const AboutProject = () => (
    <section className="w-full">
        <div className="max-w-6xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-[#044D28] font-medium mb-4 md:mb-6">
                About Offgrid Refrigeration Guidelines Pilot Implementation Program
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                The Offgrid Refrigeration Guidelines Pilot Implementation Program is an initiative 
                implemented by the Rural Electrification Agency (REA) in partnership with the 
                United Nations Environment Programme (UNEP) aimed at catalyzing the widespread 
                adoption and deployment of energy-efficient off-grid refrigeration solutions in 
                rural and underserved areas of Nigeria.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 md:mb-12">
                Given the critical role of refrigeration in enhancing food security, healthcare 
                services, and economic productivity, this initiative seeks to bridge the energy 
                access gap by introducing sustainable and scalable refrigeration technologies 
                tailored to the unique socio-economic and environmental contexts of rural communities.
            </p>

            <ProgramComponents />
        </div>
        
        <VideoCard
            title="UNEP & REA: Advancing Off-Grid Cooling Solutions"
            videoUrl="https://www.youtube.com/embed/CpPLRW1hD00"
        />
    </section>
);

export default function About () {
    return (
        <main className="min-h-screen font-montserrat bg-white">
            <Navbar />

            <section 
                className="flex min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] from-28% via-[#078042] via-86% to-[#099A4F] to-100% items-center text-white px-5 sm:px-10 md:px-16 lg:px-20"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">About us</h2>
            </section>

            <main className="w-full max-w-6xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16 md:space-y-20">
                <AboutREA />

                <AboutUNEP />

                <AboutProject />
            </main>

            <Footer />
        </main>
    );
}