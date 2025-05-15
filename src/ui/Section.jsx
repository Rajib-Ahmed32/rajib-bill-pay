import React from "react";

const Section = ({ children, className = "" }) => {
  return (
    <section className={`py-10 px-4 md:px-8 lg:px-16 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
