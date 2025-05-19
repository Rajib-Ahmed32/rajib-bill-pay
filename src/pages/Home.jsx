import OrganizationCards from "../components/OrganizationCards";
import BannerSlider from "../components/BannerSlider";
import React from "react";
import TeamSection from "../components/TeamSection";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <OrganizationCards />
      <TeamSection />
    </div>
  );
};

export default Home;
