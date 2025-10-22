import LinkButtons from "@/components/custom_ui/common/LinkButtons";
import { NavlinkData } from "@/lib/navLinkData";
import nostroImg from "@/assets/nostro_sinage.webp";
import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
const AboutHeroSection = () => {
  return (
    <div className="">
      <div className="p-4 py-8 relative  grid  gap-6 md:grid-cols-2 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] overflow-x-hidden ">
        <section className="flex items-center">
          <AnimateToRight>
            <div className="text-center grid gap-2 md:flex md:flex-col md:justify-center  md:text-start ">
              <h1 className=" text-base font-serif ">About Us</h1>
              <h2 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-4xl">
                <span className="text-primary">
                  Helping Businesses Build Trust
                </span>{" "}
                Through Design
              </h2>
              <article>
                We are a creative branding agency dedicated to transforming
                ideas into powerful brand identities. With a passion for
                storyteling and a focus on innovation, we help businesses
                connect with their audiences, build trust, and stand out in
                competitive markets. Our team of experts works colaboratively to
                craft unique, authentic, and memorable brands that leave a
                lasting impact.
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
                src={nostroImg}
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

export default AboutHeroSection;
