import heroImg from "@/assets/hero_img.webp";
import herobg from "@/assets/hero_background.webp";
import LinkButtons from "@/components/custom_ui/common/LinkButtons";
import { NavlinkData } from "@/lib/navLinkData";
import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
const HomeHeroSection = () => {
  return (
    <div
      className=" relative 'bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:40px_40px]' bg-cover bg-no-repeat bg- w-full h-full bg-bottom"
      style={{ backgroundImage: "url(" + '"' + herobg + '"' + ")" }}
    >
      <div className=" ">
        <div className=" grid  xl:w-[1040px] 2xl:w-[1280px] mx-auto overflow-x-hidden  ">
          <div className="py-6 px-4 grid gap-3 md:grid-cols-2 ">
            <section className="grid gap-4 self-center xl:max-w-lg 2xl:max-w-xl ">
              <AnimateToRight>
                <section className="grid gap-2 text-center md:text-start">
                  <h1 className="font-bold text-lg lg:text-2xl xl:text-4xl text-shadow-primary-foreground text-shadow-lg">
                    <span className="text-primary capitalize">
                      Best and reliable creative branding agency
                    </span>{" "}
                    in Kenya transforming ideas into reality.
                  </h1>
                  <article className="xl:text-lg capitalize text-shadow-primary-foreground text-shadow-lg ">
                    Membaskins Branding & Interior crafts impactful, authentic
                    brand identities that help businesses stand out, build
                    trust, and connect through creativity and innovation.
                  </article>
                </section>
              </AnimateToRight>
              <AnimateToRight>
                <section className="flex gap-6 justify-center md:justify-start">
                  <LinkButtons
                    url={NavlinkData.SERVICE_PAGE.url}
                    title={"Learn More"}
                  />
                  <LinkButtons
                    variant="secondary"
                    url={NavlinkData.CONTACT_PAGE.url}
                    title="Contact us"
                    className="bg-background text-background-foreground"
                  />
                </section>
              </AnimateToRight>
            </section>
            <AnimateToLeft>
               <section className="">
              <img src={heroImg} alt="" className="w-3/4 mx-auto" />
            </section>
            </AnimateToLeft>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
