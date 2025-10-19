import zebraBrand from "@/assets/zebra_signage.webp"
import CoreServicesCard from "@/components/custom_ui/common/coreServicesCard";
import { Button } from "@/components/ui/button";
import marpetSignage from "@/assets/marpet_signage.webp";
import interiorDesign_1 from "@/assets/interior3.webp";
import TitleComponent from "@/components/custom_ui/common/titleComponent"
import clothBranding from "@/assets/cloth_branding.webp"
const FeaturedServices = () => {
  return (
    <div className="grid gap-4 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
      <TitleComponent title={"Core Services"} />

      <section className="grid gap-4  md:grid-cols-2 lg:md:grid-cols-4">
        <CoreServicesCard
          serviceImg={zebraBrand}
          title={"Comprehensive Branding Solutions"}
          description={
            "From logo design to brand strategy and stationery, we create complete brand identities that connect and inspire."
          }
        />
        <CoreServicesCard
          serviceImg={interiorDesign_1}
          title={"Interior & Space Design"}
          description={
            "Transforming offices, shops, and homes through creative interior finishes like wallpapers, gypsum, lighting, and turf."
          }
        />
        <CoreServicesCard
          serviceImg={marpetSignage}
          title={"Professional Signage & 3D Designs"}
          description={
            "Custom indoor and outdoor signage, light boxes, billboards, and 3D letters that elevate visibility."
          }
        />
        <CoreServicesCard
          serviceImg={clothBranding}
          title={"Corporate & Casual cloth Branding"}
          description={
            "Branded uniforms, jackets, hoodies, and sportswear for cohesive, professional representation."
          }
        />
      </section>
      <section className="flex justify-center">
        <Button>View all Services</Button>
      </section>
    </div>
  );
};

export default FeaturedServices;
