import zebraBrand from "@/assets/zebra_signage.webp";
import CoreServicesCard from "@/components/custom_ui/common/coreServicesCard";
import marpetSignage from "@/assets/marpet_signage.webp";
import interiorDesign_1 from "@/assets/interior3.webp";
import TitleComponent from "@/components/custom_ui/common/titleComponent";
import clothBranding from "@/assets/cloth_branding.webp";
import LinkButtons from "@/components/custom_ui/common/LinkButtons";
import { NavlinkData } from "@/lib/navLinkData";
import AnimateToTop from "@/components/animationComponents/AnimateToTop";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
const FeaturedServices = () => {
  return (
    <div className="grid gap-4 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] overflow-y-hidden">
      <AnimateToTop>
        <section className="flex justify-center">
          <TitleComponent title={"Core Services"} />
        </section>
      </AnimateToTop>

      <section className="grid gap-4  md:grid-cols-2 lg:md:grid-cols-4 md:items-stretch overflow-y-hidden">
        <AnimateToTop>
          <CoreServicesCard
            serviceImg={zebraBrand}
            title={"Comprehensive Branding Solutions"}
            description={
              "From logo design to brand strategy and stationery, we create complete brand identities that connect and inspire."
            }
          />
        </AnimateToTop>
        <AnimateToTop>
          <CoreServicesCard
            serviceImg={interiorDesign_1}
            title={"Interior & Space Design"}
            description={
              "Transforming offices, shops, and homes through creative interior finishes like wallpapers, gypsum, lighting, and turf."
            }
          />
        </AnimateToTop>
        <AnimateToTop>
          <CoreServicesCard
            serviceImg={marpetSignage}
            title={"Professional Signage & 3D Designs"}
            description={
              "Custom indoor and outdoor signage, light boxes, billboards, and 3D letters that elevate visibility."
            }
          />
        </AnimateToTop>
        <AnimateToTop>
          <CoreServicesCard
            serviceImg={clothBranding}
            title={"Corporate & Casual cloth Branding"}
            description={
              "Branded uniforms, jackets, hoodies, and sportswear for cohesive, professional representation."
            }
          />
        </AnimateToTop>
      </section>
      <section className="flex justify-center">
        <AnimateToRight>
          {" "}
          <LinkButtons
            url={NavlinkData.SERVICE_PAGE.url}
            title={"View all services"}
          />
        </AnimateToRight>
      </section>
    </div>
  );
};

export default FeaturedServices;
