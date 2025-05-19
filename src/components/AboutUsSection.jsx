import React from "react";
import FeatureCard from "../components/FeatureCard";

export default function AboutUsSection() {
  return (
    <section className="py-14 relative">
      <div className="w-full px-4 lg:px-0 max-w-6xl mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Text Content */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex order-2 lg:order-1">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-700 text-base font-normal leading-relaxed">
                  About Us
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-[#ca970b] text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Revolutionizing Mobile Banking in Bangladesh
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    We are empowering millions of Bangladeshis with secure,
                    fast, and easy-to-use mobile banking services. From cities
                    to remote villages, our platform is bridging financial
                    gaps—making banking accessible for all.
                  </p>
                </div>
              </div>

              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <FeatureCard
                    stat="24/7 Access"
                    desc="Bank anytime, anywhere with our always-on service."
                  />
                  <FeatureCard
                    stat="50+ Districts"
                    desc="Serving people in every corner of Bangladesh."
                  />
                </div>
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <FeatureCard
                    stat="5M+ Users"
                    desc="Trusted by millions for reliable mobile banking."
                  />
                  <FeatureCard
                    stat="99% Uptime"
                    desc="Ensuring your financial access is never interrupted."
                  />
                </div>
              </div>
            </div>

            <button className="rounded-md w-[200px] bg-[#ca970b] px-4 py-2 text-sm font-medium text-white hover:bg-[#d4a825] transition">
              learn more
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:justify-start justify-center items-start flex order-1 lg:order-2">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="/images/mobile-banking.webp"
                alt="Mobile Banking in Bangladesh"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
