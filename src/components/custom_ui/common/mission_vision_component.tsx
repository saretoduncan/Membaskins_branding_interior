import type { LucideIcon } from "lucide-react";

interface IMissionProps {
  title: string;
  titleIcon: LucideIcon;
  description: string;
}

const Mission_vision_component: React.FC<IMissionProps> = ({
  title,
  titleIcon: TitleIcon,
  description,
}) => {
  return (
    <div className="grid gap-4 py-4 md:py-0 px-4 ">
      <h3 className="text-primary inline-flex items-center gap-2">
        <span>
          <TitleIcon className="size-[32px] lg:size-[40px]" />
        </span>
        <span className="font-bold  text-lg lg:text-2xl">{title}</span>
      </h3>
      <article>{description}</article>
    </div>
  );
};

export default Mission_vision_component;
