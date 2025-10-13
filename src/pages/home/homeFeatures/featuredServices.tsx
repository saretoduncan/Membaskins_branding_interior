import carSignage from "@/assets/car_wrapper_design.webp";
import CoreServicesCard from "@/components/custom_ui/common/coreServicesCard";
import { Button } from "@/components/ui/button";
const FeaturedServices = () => {
  return (
    <div className="grid gap-4 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
      <section className="space-y-2">
        <h4 className="text-center font-bold text-2xl">Core Services</h4>
        <div className="flex gap-1 justify-center">
          <hr className="h-1 w-5 bg-primary" />
          <hr className="h-1 w-7 bg-primary" />
          <hr className="h-1 w-12 bg-primary" />
        </div>
      </section>

      <section className="grid gap-4  md:grid-cols-2 lg:md:grid-cols-4">
        <CoreServicesCard
          serviceImg={carSignage}
          title={"Comprehensive Branding Solutions"}
          description={
            "From logo design to brand strategy and stationery, we create complete brand identities that connect and inspire."
          }
        />
        <CoreServicesCard
          serviceImg={carSignage}
          title={"Interior & Space Design"}
          description={
            "Transforming offices, shops, and homes through creative interior finishes like wallpapers, gypsum, lighting, and turf."
          }
        />
        <CoreServicesCard
          serviceImg={carSignage}
          title={"Professional Signage & 3D Designs"}
          description={
            "Custom indoor and outdoor signage, light boxes, billboards, and 3D letters that elevate visibility."
          }
        />
        <CoreServicesCard
          serviceImg={carSignage}
          title={"Corporate & Casual Branding Wear"}
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
