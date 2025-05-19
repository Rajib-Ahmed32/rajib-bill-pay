import OrganizationCards from "../components/OrganizationCards";
import BannerSlider from "../components/BannerSlider";
import React from "react";
import MeetOurTeam from "../components/TeamSection";
import AboutUsSection from "../components/AboutUsSection";
import TestimonialSlider from "../components/TestimonialSlider";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <OrganizationCards />
      <AboutUsSection />
      <MeetOurTeam />
      <TestimonialSlider />
      <HowItWorks />
    </div>
  );
};

export default Home;
