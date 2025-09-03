import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";
import Services from "../../components/Services/Services.jsx";
import Statues from "../../components/Status/Status.jsx";
import VideoSection from "../../components/VideoSection/VideoSection.jsx";
import GalleryBlog from "../../components/GalleryBlog/GalleryBlog.jsx";
import UpdatesCampaigns from "../../components/UpdatesCampaigns/UpdatesCampaigns.jsx";
import Team from "../../components/Team/Team.jsx";

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Statues />
      <Services />
      <VideoSection />
      <UpdatesCampaigns />
      <Team />
      <GalleryBlog />
    </>
  );
}

export default Home;
