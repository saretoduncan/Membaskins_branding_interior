import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero_img.webp";
const HomeHeroSection = () => {
  return (
    <div className=" relative bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:40px_40px]">
      <div className=" bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(255,255,255,0.8)_70%)]">
        <div className=" grid  xl:w-[1040px] 2xl:w-[1280px] mx-auto  ">
          <div className="py-4 px-4 grid md:grid-cols-2 ">
            <section className="grid gap-2 self-center xl:max-w-lg 2xl:max-w-xl ">
              <section className="grid gap-2 text-center md:text-start">
                <h1 className="font-bold text-lg lg:text-2xl xl:text-4xl">
                  <span className="text-primary capitalize">
                    Best and reliable creative branding agency
                  </span>{" "}
                  in Kenya transforming ideas into reality.
                </h1>
                <article className="xl:text-lg capitalize">
                  Membaskins Branding & Interior crafts impactful, authentic
                  brand identities that help businesses stand out, build trust,
                  and connect through creativity and innovation.
                </article>
              </section>
              <section className="inline-flex gap-2 justify-center md:justify-start">
                <Button>Learn More</Button>
                <Button variant={"outline"}>Contact Us</Button>
              </section>
            </section>
            <section className="">
              <img src={heroImg} alt="" className="w-3/4 mx-auto" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
