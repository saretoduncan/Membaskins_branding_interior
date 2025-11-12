import TitleComponent from "@/components/custom_ui/common/titleComponent";
import pylon_img from "@/assets/pylotSignages.webp";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";

const Who_are_we_about = () => {
  return (
    <div className="bg-slate-50 p-4">
      <div className="overflow-x-hidden xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] grid gap-4">
        <TitleComponent title={"Who Are We"} />
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
         
          <section className="order-2 md:order-1">
            <AnimateToRight>
              <section>
                <img
                  src={pylon_img}
                  alt="large print image"
                  className="rounded-lg object-cover w-full h-full md:h-[300px]"
                />
              </section>
            </AnimateToRight>
          </section>
           <section className="my-auto">
            <AnimateToLeft>
              <div className="flex flex-col gap-1 justify-center px-4 ">
                <article>
                  Our journey began with a shared passion for design and a
                  desire to help businesses tell their unique stories. What
                  started as a small, ambitious team has now blossomed into a
                  full-service branding agency, driven by creativity,
                  innovation, and a commitment to excellence. From the very
                  beginning, we've focused on delivering tailor-made solutions
                  that connect brands with their audiences in meaningful ways.
                  Through hard work, dedication, and a customer-first approach,
                  we've grown steadily, expanding our services and expertise to
                  meet the ever-changing demands of the industry. Today, we are
                  proud of how far we've come and excited about the future,
                  continually pushing the boundaries of creativity and brand
                  development to help our clients succeed and thrive
                </article>
              </div>
            </AnimateToLeft>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Who_are_we_about;
