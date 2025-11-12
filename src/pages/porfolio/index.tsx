import { Helmet } from "react-helmet";
import PortfolioHeroSection from "./portfolioHeroSection";
import PortforlioGallery from "./portforlioGallery";

const PortfolioPage = () => {
  return (
    <>
    <Helmet>
        <title>Our Porforlio</title>
        <meta
          name="description"
          content="Showcasing Creativity Through Design and Innovation."
        />
      </Helmet>
      <PortfolioHeroSection />
      <PortforlioGallery/>
    </>
  );
};

export default PortfolioPage;
