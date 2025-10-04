// components/Footer.tsx
import { FaLinkedin, FaInstagram, FaFacebook, FaTimes, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#004225] text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Contact */}
        <div>
          <img src="/u4e_logo.png" alt="U4E Logo" className="h-16 mb-4" />
          <p className="text-sm leading-relaxed">
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
        </div>

        {/* Relevant Sites */}
        <div>
          <h4 className="font-semibold mb-3">RELEVANT SITES</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="https://rea.gov.ng" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Rural Electrification Agency
              </a>
            </li>
            <li>
              <a href="https://www.undp.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                United Nations Development Programme
              </a>
            </li>
            <li>
              <a href="https://www.thegef.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                The Global Environment Facility
              </a>
            </li>
            <li>
              <a href="https://rmi.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                RMI
              </a>
            </li>
            <li>
              <a href="https://energyalliance.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Energy Alliance
              </a>
            </li>
          </ul>
        </div>

        {/* About U4E */}
        <div>
          <h4 className="font-semibold mb-3">ABOUT U4E</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Who We Are</a></li>
            <li><a href="#" className="hover:underline">What We Do</a></li>
            <li><a href="#" className="hover:underline">Our Partners</a></li>
            <li><a href="#" className="hover:underline">Our Impact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">RESOURCES</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Publications</a></li>
            <li><a href="#" className="hover:underline">Reports</a></li>
            <li><a href="#" className="hover:underline">Policy Documents</a></li>
            <li><a href="#" className="hover:underline">Guidelines</a></li>
          </ul>
        </div>

        {/* News and Media */}
        <div>
          <h4 className="font-semibold mb-3">NEWS AND MEDIA</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Press Releases</a></li>
            <li><a href="#" className="hover:underline">Media Gallery</a></li>
          </ul>
        </div>
      </div>

      
      <div className="mt-8 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://www.linkedin.com/company/rural-electrification-agency-of-nigeria/" className="text-white hover:text-gray-300" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/TheREANigeria" className="text-white hover:text-gray-300" aria-label="X (Twitter)">
            <FaTimes size={20} />
          </a>
          <a href="https://www.instagram.com/realREANigeria/" className="text-white hover:text-gray-300" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com/REANigeria" className="text-white hover:text-gray-300" aria-label="Facebook">
            <FaFacebook size={20} />
          </a>
          <a href="https://youtube.com/@ruralelectrificationagency5481?si=ZY2FmRYa8QJ3Pboy" className="text-white hover:text-gray-300" aria-label="YouTube" target="_blank" rel="noopener noreferrer"
>
  <FaYoutube size={20} />
</a>
          
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
