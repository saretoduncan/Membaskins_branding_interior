import FeatureSection from "./homeFeatures/featureSection";
import HomeHeroSection from "./heroSection";
import OurClients from "./ourClients";
import CtaComponent from "@/components/custom_ui/common/ctaComponent";
import { Helmet } from "react-helmet";
const HomePage = () => {
  return (
    <div className="">
      <Helmet>
        <title>Membaskins Branding & Interior</title>
        <meta
          name="description"
          content="Best and reliable creative branding agency in Kenya transforming ideas into reality."
        />
      </Helmet>
      <HomeHeroSection />
      ty
      <FeatureSection />
      <OurClients />
      <CtaComponent />
    </div>
  );
};

export default HomePage;
