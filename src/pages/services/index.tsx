import CtaComponent from "@/components/custom_ui/common/ctaComponent";
import ServicesFeatures from "./servicesFeatures";
import ServicesHeroSection from "./servicesHeroSection";

const ServicesPage = () => {
  return (
    <div>
      <ServicesHeroSection />
      <ServicesFeatures/>
      <CtaComponent/>
    </div>
  );
};

export default ServicesPage;
