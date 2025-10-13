import WhyChooseUsCard from "@/components/custom_ui/common/whyChooseUsCard";
import { HandCoins, ShieldCheck, UserStar, Zap } from "lucide-react";

const WhyUsSection = () => {
  return (
    <div className="grid gap-6 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
      <div>
        <h3 className="text-center text-2xl trackin-wide font-bold ">
          Why Business <span className="text-primary">Choose Us</span>
        </h3>
      </div>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <WhyChooseUsCard
          title={"Fast & Reliable Delivery"}
          description={
            "Enjoy quick turnaround times without sacrificing quality, we know how important timely printing and branding services are for your business."
          }
          icon={Zap}
        />
        <WhyChooseUsCard
          title={"Premium Quality Materials"}
          description={
            "We use high-grade, durable materials for every product to ensure lasting quality, professional finish, and exceptional visual appeal."
          }
          icon={ShieldCheck}
        />
        <WhyChooseUsCard
          title={"Affordable, Competitive Pricing"}
          description={
            "Get premium printing and branding solutions at cost-effective rates, delivering the best value for your investment every time."
          }
          icon={HandCoins}
        />
        <WhyChooseUsCard
          title={"Experienced Printing Experts"}
          description={
            "Our experienced team delivers expert printing, design, and branding services with precision, consistency, and creative excellence."
          }
          icon={UserStar}
        />
      </section>
    </div>
  );
};

export default WhyUsSection;
