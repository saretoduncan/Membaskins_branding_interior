import type { LucideIcon } from "lucide-react";
import React from "react";

interface IReachOutProps {
  icon: LucideIcon;
  title: string;
}
const ReachOutListComponent: React.FC<IReachOutProps> = ({
  icon: Icon,
  title,
}) => {
  return (
    <div className="inline-flex gap-1  lg:items-center">
      <span>
        <Icon className="text-primary" />
      </span>
      <span className="font-bold self-end lg:self-center ">{title}</span>
    </div>
  );
};

export default ReachOutListComponent;
