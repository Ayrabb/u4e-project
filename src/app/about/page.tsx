/* eslint-disable react/no-unescaped-entities */
"use client"

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import VideoCard from "../components/VideoCard"

const AboutREA = () => (
    <section className="container mx-auto">
        <div className="max-w-6xl">
            <h3 className="text-3xl md:text-3xl text-[#044D28] font-medium mb-6">
                About Rural Electrification Agency (REA)
            </h3>
            <div className="space-y-4 text-gray-700 text-md leading-relaxed mb-6">
                <p>
                    The Nigerian Rural Electrification Agency (REA) is the Implementing Agency of the Federal 
                    Government of Nigeria (FGN) under the Federal Ministry of Power tasked with the 
                    electrification of unserved and underserved communities to catalyse economic growth and 
                    improve quality of life for Nigerians.
                </p>
            </div>

            {/* Our Mandate Section */}
            <div className="grid md:grid-cols-2 gap-2 items-center mb-8">
                <div className="">
                    <h4 className="text-xl md:text-xl text-[#044D28] font-normal mb-4">
                        Our mandate
                    </h4>
                    <div className="space-y-4 text-gray-700 text-md leading-relaxed">
                        <p>The Mandate of the REA is structured around three dimensions:</p>
                        <ul className="space-y-3 ml-4">
                            <li className="flex gap-3">
                                <span className="text-[#044D28] font-bold min-w-[1.5rem]">1.</span>
                                <span>Promoting Rural Electrification in the country</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#044D28] font-bold min-w-[1.5rem]">2.</span>
                                <span>Coordinating the Rural Electrification Programmes in the country</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#044D28] font-bold min-w-[1.5rem]">3.</span>
                                <span>Administering the Rural Electrification Fund (REF) to promote, support and provide rural electrification through Public and Private Sector Participation</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-1 justify-center">
                    <Image 
                        src="/rea-image.jpeg" 
                        alt="Rural Electrification Agency"
                        className="w-full h-auto rounded-xs shadow object-cover max-h-[400px]"
                        width={200}
                        height={200}
                    />
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
    <section className="container mx-auto">
        <div className="max-w-6xl">
            <h3 className="text-3xl md:text-3xl text-[#044D28] font-medium mb-6">
                About United Nations Environment Programme (UNEP)
            </h3>
            <div className="space-y-4 text-gray-700 text-md leading-relaxed">
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
            <div className="mt-4 space-y-4">
                <p className="text-gray-700 text-md leading-relaxed">
                    The U4E programme in Nigeria will contribute to the following UN Sustainable Development Goals:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center">
                        <Image 
                            src="/sdg-logos/7.png" 
                            alt="SDG 7 - Affordable and Clean Energy"
                            className="w-full max-w-[200px] h-auto"
                            width={150}
                            height={150}
                        />
                        <p className="text-center text-sm mt-3 text-gray-700">Affordable and Clean Energy</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image 
                            src="/sdg-logos/11.png" 
                            alt="SDG 11 - Sustainable Cities and Communities"
                            className="w-full max-w-[200px] h-auto"
                            width={150}
                            height={150}
                        />
                        <p className="text-center text-sm mt-3 text-gray-700">Sustainable Cities and Communities</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image 
                            src="/sdg-logos/12.png" 
                            alt="SDG 12 - Responsible Consumption and Production"
                            className="w-full max-w-[200px] h-auto"
                            width={150}
                            height={150}
                        />
                        <p className="text-center text-sm mt-3 text-gray-700">Responsible Consumption and Production</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image 
                            src="/sdg-logos/13.png" 
                            alt="SDG 13 - Climate Action"
                            className="w-full max-w-[200px] h-auto"
                            width={150}
                            height={150}
                        />
                        <p className="text-center text-sm mt-3 text-gray-700">Climate Action</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const AboutProject = () => (
    <section className="container mx-auto">
        <div className="max-w-6xl">
            <h3 className="text-3xl md:text-3xl text-[#044D28] font-medium mb-6">
                About Offgrid Refrigeration Guidelines Pilot Implementation Program
            </h3>
            <p className="text-gray-700 text-md leading-relaxed mb-4">
                The Offgrid Refrigeration Guidelines Pilot Implementation Program is an initiative 
                implemented by the Rural Electrification Agency (REA) in partnership with the 
                United Nations Environment Programme (UNEP) aimed at catalyzing the widespread 
                adoption and deployment of energy-efficient off-grid refrigeration solutions in 
                rural and underserved areas of Nigeria.
            </p>
            <p className="text-gray-700 text-md leading-relaxed mb-12">
                Given the critical role of refrigeration in enhancing food security, healthcare 
                services, and economic productivity, this initiative seeks to bridge the energy 
                access gap by introducing sustainable and scalable refrigeration technologies 
                tailored to the unique socio-economic and environmental contexts of rural communities.
            </p>

            {/* Program components */}
            <h4 className="text-2xl md:text-xl text-[#044D28] font-medium mb-8 mt-12">
                Program Components
            </h4>

            {/* Component 1: Market Assessment */}
            <div className="mb-10 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                    <span className="text-lg font-bold text-[#044D28] min-w-[2rem]">1</span>
                    <div className="flex-1">
                        <h5 className="text-lg font-semibold text-[#044D28] mb-2">
                            Market Assessment for Off-grid Refrigeration
                        </h5>
                        <p className="text-gray-700 mb-4">
                            <span className="font-medium">Objective:</span> A targeted market assessment will be conducted to identify the key barriers hindering the widespread adoption of off-grid refrigeration technologies in rural Nigeria.
                        </p>
                        <div className="bg-white p-4 rounded">
                            <p className="font-medium text-[#044D28] mb-3">Market Assessment Report: comprehensive technical report documenting results of market analysis including:</p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Profiles of 3-5 potential pilot communities with off-grid energy access and refrigeration demand</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Segmentation of end-users by type, cooling needs, and daily usage profiles</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Comparative assessment of available off-grid refrigeration technologies in the Nigerian market</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Identification of supply chain gaps and after-sales support availability</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Financial modeling and business cases for different end-user types</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Detailed pilot design framework (target users, deployment plan, M&E system)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Component 2: Awareness Campaign */}
            <div className="mb-10 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                    <span className="text-lg font-bold text-[#044D28] min-w-[2rem]">2</span>
                    <div className="flex-1">
                        <h5 className="text-lg font-semibold text-[#044D28] mb-2">
                            Awareness Creation for Off-Grid Refrigeration Deployment in Rural Areas
                        </h5>
                        <p className="text-gray-700 mb-4">
                            <span className="font-medium">Objective:</span> Implement targeted awareness activities to ensure successful uptake of the pilot program including, stakeholder workshops and community engagement programs.
                        </p>
                        <div className="bg-white p-4 rounded">
                            <p className="font-medium text-[#044D28] mb-3">Awareness Campaign Report: A narrative and visual report including:</p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Documentation of the stakeholder workshop: agenda, materials used, discussion summaries, participant list (disaggregated by gender and affiliation), and feedback received</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Reports from community engagement sessions: locations, session format, participation statistics, user</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Summary of media activities, including press coverage, perceptions, and behaviour insights social media engagement, and communication materials produced</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Component 3: Demonstration and Pilot */}
            <div className="mb-10 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                    <span className="text-lg font-bold text-[#044D28] min-w-[2rem]">3</span>
                    <div className="flex-1">
                        <h5 className="text-lg font-semibold text-[#044D28] mb-2">
                            Demonstration and Pilot Scheme in Selected Communities
                        </h5>
                        <p className="text-gray-700 mb-4">
                            <span className="font-medium">Objective:</span> To validate the technical feasibility, economic viability, and user acceptability of off-grid refrigeration systems, a pilot project will be implemented in carefully selected rural communities.
                        </p>
                        <div className="bg-white p-4 rounded">
                            <p className="font-medium text-[#044D28] mb-3">Pilot Demonstration Report: A results-focused report presenting the implementation and evaluation of the pilot including:</p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Documentation of community selection process and justification</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>List of deployed refrigeration units by community and user type</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Technical specifications and deployment model used (eg. Pay as you go, outright purchase)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>User training reports with attendance logs, training content, and photos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Performance data (e.g., energy use, temperature stability, uptime)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Economic and social outcomes (e.g., income generation, food/medicine preservation, user satisfaction)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-[#044D28] mt-1">•</span>
                                    <span>Lessons learned and recommendations for scale-up</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
                className="flex min-h-42 mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] from-28% via-[#078042] via-86% to-[#099A4F] to-100% items-center text-white"
            >
                <h2 className="text-5xl mx-20 font-medium">About us</h2>
            </section>

            <main className="py-20 px-4 md:px-8 lg:px-60 space-y-20">
                <AboutREA />

                <AboutUNEP />

                <AboutProject />
            </main>

            <section>
                <Footer />
            </section>
        </main>
    );
}