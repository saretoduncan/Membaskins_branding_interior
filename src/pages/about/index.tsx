import CtaComponent from "@/components/custom_ui/common/ctaComponent";
import AboutHeroSection from "./aboutHeroSection";
import Core_values_section from "./core_values_section";
import Mission_cores_section from "./mission_cores_section";
import Who_are_we_about from "./who_are_we_about";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Helping Businesses Build Trust Through Design."
        />
      </Helmet>
      <AboutHeroSection />
      <Who_are_we_about />
      <Mission_cores_section />
      <Core_values_section />
      <CtaComponent />
    </>
  );
};

export default AboutPage;
