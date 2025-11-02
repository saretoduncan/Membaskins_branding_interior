import CtaComponent from "@/components/custom_ui/common/ctaComponent";
import AboutHeroSection from "./aboutHeroSection";
import Core_values_section from "./core_values_section";
import Mission_cores_section from "./mission_cores_section";

const AboutPage = () => {
  return (
    <>
      <AboutHeroSection />
      <Mission_cores_section/>
      <Core_values_section/>
      <CtaComponent/>
    </>
  );
};

export default AboutPage;
