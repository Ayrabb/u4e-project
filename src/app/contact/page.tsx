"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting contact:", form);
  };

  return (
    <main className="min-h-screen font-montserrat flex flex-col">
      <Navbar />

      <section 
        className="min-h-42 mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] from-28% via-[#078042] via-86% to-[#099A4F] to-100% flex items-center"
      >
        <div className="flex flex-col text-white mx-10 lg:mx-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">Contact us</h2>
          <p className="text-gray-300 text-sm md:text-xl text-base leading-relaxed max-w-3xl">
            Get in touch with us by completing the form below or calling us directly.
          </p>
				</div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-12 px-4 md:px-12 flex-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-#004225 shadow-md rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600 text-sm">
                  22 Freetown Street, Wuse II, Abuja
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <a href="tel:+234 8036645113"className="text-gray-600 text-sm">+234 8036645113</a>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 sm:col-span-2">
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <a href="mailto:info@rea.gov.ng" className="text-gray-600 text-sm">info@rea.gov.ng </a>
              </div>
            </div>

            
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={5}
                  className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="bg-[#004225] text-white px-6 py-3 rounded-lg hover:bg-[#036a34] transition w-full md:w-auto"
                >
                  Send a request
                </button>
              </form>
            </div>
          </div>

          
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.877649196392!2d7.484356874153079!3d9.074909588270428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a53e2d5445d%3A0xab1042fa2f34666c!2sFreetown%20St%2C%20Wuse%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1759531916891!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "600px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
