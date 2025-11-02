import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
import AnimateToTop from "@/components/animationComponents/AnimateToTop";
import Mission_vision_component from "@/components/custom_ui/common/mission_vision_component";
import { Goal, ScanEye } from "lucide-react";

const Mission_cores_section = () => {
  return (
    <div className="bg-slate-50 px-4 py-5 overflow-y-hidden">
      <AnimateToTop>
        {" "}
        <div className="bg-background rounded-lg shadow-xl p-4 grid gap-4 divide-y-2 divide-accent md:grid-cols-2 md:divide-y-0 md:divide-x-2 md:items-stretch xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] overflow-x-hidden">
          <AnimateToRight>
            <Mission_vision_component
              title={"Our Vision"}
              titleIcon={ScanEye}
              description={`To be the globally recognized, award-winning leader in creative
            brand transformation, consistently inspiring businesses across all
            continents to connect meaningfully with their audiences. We strive
            to help every client build an unforgettable, positive legacy,
            ensuring they leave an enduring and prosperous mark on the
            competitive global marketplace.`}
            />
          </AnimateToRight>
          <AnimateToLeft>
            {" "}
            <Mission_vision_component
              title={"Our Mission"}
              titleIcon={Goal}
              description={`We are committed to empowering businesses to achieve profound and
            lasting market impact by collaboratively crafting unique, authentic,
            and innovative brand identities. Through compelling storytelling and
            a dedicated focus on building genuine trust, we relentlessly
            transform client ideas into powerful, successful brands that
            captivate global audiences and drive sustained commercial success.`}
            />
          </AnimateToLeft>
        </div>
      </AnimateToTop>
    </div>
  );
};

export default Mission_cores_section;
