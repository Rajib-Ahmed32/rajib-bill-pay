import React from "react";
import icons from "../data/icons.js";
import organizationData from "../data/billsData.json";

export default function OrganizationCards() {
  return (
    <section className="py-10 px-4 bg-[#eaeaea]">
      <h2 className="text-3xl font-bold mb-8 text-center">Organizations</h2>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
        {organizationData.map(({ id, organization }) => {
          const iconSrc = icons[organization];

          return (
            <div
              key={id}
              className="w-full p-7 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700  flex flex-col items-center"
            >
              {iconSrc ? (
                <img
                  className="w-20 h-20 mb-3 rounded-full shadow-lg object-contain bg-white p-2"
                  src={iconSrc}
                  alt={`${organization} logo`}
                />
              ) : (
                <div className="w-20 h-20 mb-3 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                  No Icon
                </div>
              )}
              <h5 className="text-lg font-medium text-gray-900 dark:text-white text-center">
                {organization}
              </h5>
            </div>
          );
        })}
      </div>
    </section>
  );
}
