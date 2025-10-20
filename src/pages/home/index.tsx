import FeatureSection from "./homeFeatures/featureSection";
import HomeHeroSection from "./heroSection";
import OurClients from "./ourClients";
import CtaComponent from "@/components/custom_ui/common/ctaComponent";

const HomePage = () => {
  return (
    <div className="">
      <HomeHeroSection />

      <FeatureSection />
      <OurClients />
      
      <CtaComponent/>
    </div>
  );
};

export default HomePage;
