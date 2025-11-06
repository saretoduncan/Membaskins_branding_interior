import AnimateToRight from "@/components/animationComponents/AnimateToRight";
import LinkButtons from "@/components/custom_ui/common/LinkButtons";
import { NavlinkData } from "@/lib/navLinkData";
import Zebra_signage from "@/assets/zebra_signage_2.webp";
import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";

const PortfolioHeroSection = () => {
  return (
    <div className="">
      <div className="p-4 py-8 relative  grid  gap-6 md:grid-cols-2 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] overflow-x-hidden ">
        <section className="flex items-center">
          <AnimateToRight>
            <div className="text-center grid gap-2 md:flex md:flex-col md:justify-center  md:text-start ">
              <h1 className=" text-base font-serif ">Porfolio</h1>
              <h2 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-4xl">
                <span className="text-primary">
                  Showcasing Creativity Through
                </span>{" "}
                Design and Innovation
              </h2>
              <article>
               Explore a collection of our finest branding, print, and digital design projects each crafted to bring ideas to life and make brands unforgettable.
              </article>
              <section className="inline-flex gap-2 justify-center md:justify-start">
                <LinkButtons
                  url={NavlinkData.SERVICE_PAGE.url}
                  title={"View services"}
                />
                <LinkButtons
                  url={NavlinkData.CONTACT_PAGE.url}
                  title={"Get a quote"}
                  variant="secondary"
                />
              </section>
            </div>
          </AnimateToRight>
        </section>

        <section className="relative my-4 md:flex md:items-center ">
          <AnimateToLeft>
            <figure className=" w-3/4 mx-auto ">
              <img
                src={Zebra_signage}
                alt="nostro signage"
                className="rounded-lg border shadow border-primary"
              />
            </figure>
            <div
              className="size-30 absolute -bottom-6 -left-2 -z-1"
              style={{
                backgroundImage: `
      radial-gradient(circle, #fe7e0195 5px, transparent 1px)
    `,
                backgroundSize: "20px 20px", // spacing between dots
              }}
            ></div>
            <div
              className="size-30 absolute -top-6 -right-2 -z-1"
              style={{
                backgroundImage: `
      radial-gradient(circle, #fe7e0195 5px, transparent 1px)
    `,
                backgroundSize: "20px 20px", // spacing between dots
              }}
            ></div>
          </AnimateToLeft>
        </section>
      </div>
    </div>
  );
};

export default PortfolioHeroSection;
