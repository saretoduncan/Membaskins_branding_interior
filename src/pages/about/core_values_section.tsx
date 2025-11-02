import AnimateToBottom from "@/components/animationComponents/AnimateToBottom";
import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
import AnimateToTop from "@/components/animationComponents/AnimateToTop";
import TitleComponent from "@/components/custom_ui/common/titleComponent";
import WhyChooseUsCard from "@/components/custom_ui/common/whyChooseUsCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ClockFading,
  HandHelping,
  Handshake,
  Lightbulb,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import React from "react";

const Core_values_section = () => {
  return (
    <div className="bg-slate-50 px-4 py-5">
      <div className="grid gap-4 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] overflow-hidden">
        <AnimateToTop>
          {" "}
          <TitleComponent title={"Our Core Values"} />
        </AnimateToTop>

        <div className="grid gap-4 md:grid-cols-3">
          <AnimateToRight>
            {" "}
            <WhyChooseUsCard
              title={"Creativity & Innovation"}
              description={`We bring ideas to life through original, impactful designs and cutting-edge branding solutions.`}
              icon={Lightbulb}
            />
          </AnimateToRight>
          <AnimateToTop>
            <WhyChooseUsCard
              title={"Quality Excellence"}
              description={`We are committed to producing high-quality products and services that exceed customer expectations.`}
              icon={Sparkles}
            />
          </AnimateToTop>
          <AnimateToLeft>
            <WhyChooseUsCard
              title={"Customer Focus"}
              description={`Our clients are at the heart of everything we do; their satisfaction drives our success.`}
              icon={UserRoundCheck}
            />
          </AnimateToLeft>
          <AnimateToRight>
            <WhyChooseUsCard
              title={"Integrity & Reliability"}
              description={`We uphold honesty, transparency, and professionalism in every project.`}
              icon={Handshake}
            />
          </AnimateToRight>
          <AnimateToTop>
            <WhyChooseUsCard
              title={"Timeliness"}
              description={` We deliver projects efficiently and on schedule without compromising quality.`}
              icon={ClockFading}
            />
          </AnimateToTop>
          <AnimateToLeft>
            <WhyChooseUsCard
              title={"Sustainability"}
              description={` We value eco-friendly practices and long-lasting design solutions.`}
              icon={HandHelping}
            />
          </AnimateToLeft>
        </div>
      </div>
    </div>
  );
};

export default Core_values_section;
