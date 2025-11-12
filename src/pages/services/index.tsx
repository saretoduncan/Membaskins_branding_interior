import CtaComponent from "@/components/custom_ui/common/ctaComponent";
import ServicesFeatures from "./servicesFeatures";
import ServicesHeroSection from "./servicesHeroSection";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services</title>
        <meta
          name="description"
          content="Transforming Brands Through Creative Design & Quality Craftsmanship"
        />
      </Helmet>
      <ServicesHeroSection />
      <ServicesFeatures />
      <CtaComponent />
    </div>
  );
};

export default ServicesPage;
