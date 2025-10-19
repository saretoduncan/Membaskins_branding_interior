import FeatureSection from "./homeFeatures/featureSection";
import HomeHeroSection from "./heroSection";
import OurClients from "./ourClients";

const HomePage = () => {
  return (
    <div className="">
      <HomeHeroSection />

      <FeatureSection />
      <OurClients />
    </div>
  );
};

export default HomePage;
