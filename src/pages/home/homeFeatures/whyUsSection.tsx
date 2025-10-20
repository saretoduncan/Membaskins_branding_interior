import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
import AnimateToTop from "@/components/animationComponents/AnimateToTop";
import LinkButtons from "@/components/custom_ui/common/LinkButtons";
import TitleComponent from "@/components/custom_ui/common/titleComponent";
import WhyChooseUsCard from "@/components/custom_ui/common/whyChooseUsCard";
import { HandCoins, ShieldCheck, UserStar, Zap } from "lucide-react";

const WhyUsSection = () => {
  return (
    <div className="grid gap-6 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] overflow-hidden">
      <AnimateToRight>
        {" "}
        <TitleComponent title={"Why Business Choose Us"} />
      </AnimateToRight>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 overflow-x-hidden">
        <AnimateToRight>
          <WhyChooseUsCard
            title={"Fast & Reliable Delivery"}
            description={
              "Enjoy quick turnaround times without sacrificing quality, we know how important timely printing and branding services are for your business."
            }
            icon={Zap}
          />
        </AnimateToRight>
        <AnimateToRight>
          <WhyChooseUsCard
            title={"Premium Quality Materials"}
            description={
              "We use high-grade, durable materials for every product to ensure lasting quality, professional finish, and exceptional visual appeal."
            }
            icon={ShieldCheck}
          />
        </AnimateToRight>
        <AnimateToLeft>
          {" "}
          <WhyChooseUsCard
            title={"Affordable, Competitive Pricing"}
            description={
              "Get premium printing and branding solutions at cost-effective rates, delivering the best value for your investment every time."
            }
            icon={HandCoins}
          />
        </AnimateToLeft>
        <AnimateToLeft>
          <WhyChooseUsCard
            title={"Experienced Printing Experts"}
            description={
              "Our experienced team delivers expert printing, design, and branding services with precision, consistency, and creative excellence."
            }
            icon={UserStar}
          />
        </AnimateToLeft>
      </section>

      <section className="flex justify-center">
        <AnimateToRight>
           <LinkButtons url="" title={"Learn More"} />
        </AnimateToRight>
       
      </section>
    </div>
  );
};

export default WhyUsSection;
