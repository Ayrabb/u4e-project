'use client';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />


   <section
  className="min-h-42 mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] via-[#1e5d2e] to-[#3ea05a] flex items-center"
>
  <div className="flex flex-col text-white mx-20">
    <h1 className="text-5xl font-medium">Resources</h1>

    <div className="flex space-x-8 text-yellow-400 font-medium text-lg mt-4">
      <a href="#" className="border-b-2 border-yellow-400 pb-1">
        Downloads
      </a>
      <a href="#" className="hover:text-yellow-500">
         FAQ&apos;s
      </a>
    </div>
  </div>
</section>







      <section className="py-16 px-6 md:px-16 bg-gray-50 flex-1">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Brochure: The Offgrid Refrigeration Guidelines Pilot Implementation
            </h2>
    
            <p className="text-gray-700 leading-relaxed mb-6">
              The Program is an initiative implemented by the Rural Electrification Agency (REA)
              in partnership with the United Nations Environment Programme (UNEP) aimed at
              catalyzing the widespread adoption and deployment of energy-efficient off-grid
              refrigeration solutions in rural and under-served areas of Nigeria.
              <br /><br />
            </p>
            <a
              href="/docs/offgrid-refrigeration-brochure.pdf"
              download
              className="text-yellow-500 font-semibold hover:text-yellow-600"
            >
              Download
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
