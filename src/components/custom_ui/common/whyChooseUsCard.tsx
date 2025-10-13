import type { LucideIcon } from "lucide-react";
import React from "react";

interface IWhyChooseProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const WhyChooseUsCard: React.FC<IWhyChooseProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className=" grid">
      <section className="space-y-2 ">
        <div className="bg-primary w-fit p-4 text-primary-foreground rounded-full justify-self-center ">
          <Icon />
        </div>
        <h4 className="text-center font-bold  ">{title}</h4>
      </section>
      <section>
        <p className="text-center text-secondary-foreground/70 ">
          {description}
        </p>
      </section>
    </div>
  );
};

export default WhyChooseUsCard;
