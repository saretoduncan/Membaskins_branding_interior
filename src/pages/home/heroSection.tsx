import { Button } from "@/components/ui/button";
import vertoSignate from "@/assets/verto_2.webp";
import zebraSinage from "@/assets/zebra_signage.webp";
import safaricomSinage from "@/assets/safaricom_signage.webp";
import safaricomCarWrap from "@/assets/safaricom_car_wrap.webp";
const HomeHeroSection = () => {
  return (
    <div className=" relative bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:40px_40px]">
      <div className=" bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(255,255,255,0.8)_70%)]">
        <div className=" grid  xl:w-[1040px] 2xl:w-[1280px] mx-auto  ">
          <div className="py-4 px-4 grid md:grid-cols-2 ">
            <section className="grid gap-2 self-center xl:max-w-lg 2xl:max-w-xl ">
              <section className="grid gap-2 text-center md:text-start">
                <h1 className="font-bold text-lg lg:text-2xl xl:text-4xl">
                  <span className="text-primary capitalize">Best and reliable creative branding agency</span> in Kenya
                  transforming ideas.
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
            <section className="lg:justify-self-center">
              <div className="grid gap-2 p-4 sm:grid-cols-2  auto-rows-[50px] lg:auto-rows-[60px] ">
                <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
                  <img
                    src={vertoSignate}
                    alt=""
                    className="h-full w-full object-cover "
                  />
                </div>
                <div className="col-span-1 row-span-2 overflow-hidden rounded-xl">
                  <img
                    src={safaricomCarWrap}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="col-span-1 row-span-2 overflow-hidden rounded-xl">
                  <img
                    src={zebraSinage}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className=" relative col-span-2 row-span-2 overflow-hidden rounded-xl">
                  <img
                    src={safaricomSinage}
                    alt=""
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-500"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
