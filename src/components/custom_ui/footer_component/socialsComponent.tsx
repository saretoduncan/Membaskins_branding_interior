import type { LucideIcon } from "lucide-react";
import React from "react";

interface ISocialProps {
  title: string;
  icon: LucideIcon;
  url: string;
}
const SocialsComponent: React.FC<ISocialProps> = ({
  title,
  icon: Icon,
  url,
}) => {
  return (
    <a href={url} target="_blank" className="inline-flex gap-1 font-bold ">
      <span>
        <Icon className="text-primary" />
      </span>
      <span className="self-end lg:self-center">{title}</span>
    </a>
  );
};

export default SocialsComponent;
