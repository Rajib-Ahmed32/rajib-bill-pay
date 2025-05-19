import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  const handleNavigation = (section) => {
    console.log(`Navigate to ${section}`);
  };

  return (
    <footer className="bg-[#1f2937] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[#ca970b] mb-2">
            RajibBillPay
          </h2>
          <p className="text-sm text-gray-300">
            Empowering Bangladesh with secure and accessible mobile banking for
            everyone.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <button
                onClick={() => handleNavigation("home")}
                className="hover:underline"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("features")}
                className="hover:underline"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("team")}
                className="hover:underline"
              >
                Team
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("testimonials")}
                className="hover:underline"
              >
                Testimonials
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <button
                onClick={() => handleNavigation("help")}
                className="hover:underline"
              >
                Help Center
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("contact")}
                className="hover:underline"
              >
                Contact Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("terms")}
                className="hover:underline"
              >
                Terms & Conditions
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("privacy")}
                className="hover:underline"
              >
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <FaFacebookF />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <FaTwitter />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-sm text-gray-300 mb-2">Subscribe for updates</p>
          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 rounded-l bg-white text-black text-sm w-full"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#ca970b] text-white rounded-r text-sm hover:bg-[#d4a825] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} RajibBillPay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
