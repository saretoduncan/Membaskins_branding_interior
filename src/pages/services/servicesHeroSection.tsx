import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
import LinkButtons from "@/components/custom_ui/common/LinkButtons";
import { NavlinkData } from "@/lib/navLinkData";
import mural_design1 from "@/assets/mural_design.webp";
import neon_sign1 from "@/assets/neon_sign.webp";
import eka_petrol from "@/assets/eka_petrol_station.webp"
const ServicesHeroSection = () => {
  return (
    <div className="">
      <div className="p-4 py-8 relative  grid  gap-6 md:grid-cols-2 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] overflow-x-hidden ">
        <section className="flex items-center">
          <AnimateToRight>
            <div className="text-center grid gap-2 md:flex md:flex-col md:justify-center  md:text-start ">
              <h1 className=" text-base font-serif ">Our Services</h1>
              <h2 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-4xl">
                <span className="text-primary">
                  Transforming Brands Through
                </span>{" "}
                Creative Design & Quality Craftsmanship
              </h2>
              <article>
                From eye-catching signage to premium uniforms and print
                solutions, we bring your brand to life with precision and
                passion.
              </article>
              <section className="inline-flex gap-2 justify-center md:justify-start">
                <LinkButtons
                  url={NavlinkData.CONTACT_PAGE.url}
                  title={"Get a quote"}
                  variant="secondary"
                />
              </section>
            </div>
          </AnimateToRight>
        </section>

        <section className="relative my-4 md:flex md:justify-center ">
          <AnimateToLeft>
            <div className="grid grid-cols-2 gap-2 h-full md:h-[300px] ">
              <div className="h-full flex  items-center">
                <img
                  src={mural_design1}
                  alt=""
                  className="object-cover rounded-lg w-full   h-[280px] md:object-contain"
                />
              </div>

              <div className="grid grid-rows-2 gap-2  h-full ">
                <img
                  src={neon_sign1}
                  alt="neon signage"
                  className="object-cover rounded-2xl w-full   h-[160px] "
                />
                <img
                  src={eka_petrol}
                  alt="petrol station signage"
                  className="object-cover rounded-2xl w-full   h-[160px]"
                />
              </div>
            </div>
          </AnimateToLeft>
        </section>
      </div>
    </div>
  );
};

export default ServicesHeroSection;
