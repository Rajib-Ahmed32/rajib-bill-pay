import React from "react";
import { FaDownload, FaMobileAlt, FaUserShield } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-14 bg-[#eaeaea]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow">
            <FaDownload className="text-4xl text-[#ca970b] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Download the App</h4>
            <p className="text-gray-600">
              Get our app from the Play Store or visit website.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <FaMobileAlt className="text-4xl text-[#ca970b] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Register</h4>
            <p className="text-gray-600">
              Sign up in minutes using your mobile number or email.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <FaUserShield className="text-4xl text-[#ca970b] mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Start Banking</h4>
            <p className="text-gray-600">
              Send money, pay bills, and more securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
