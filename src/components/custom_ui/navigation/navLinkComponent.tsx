import useHoverHook from "@/hooks/useHoverHook";
import { NavlinkData } from "@/lib/navLinkData";
import React from "react";
import { Link, useLocation } from "react-router";

interface INavLinkComponent {
  url: string;
  title: string;
  className?: string;
}
const NavLinkComponent: React.FC<INavLinkComponent> = ({
  url,
  title,
  className,
}) => {
  const currentLocation = useLocation().pathname;
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverHook(false);
  return (
    <div className="relative">
      <Link
        className={`font-bold hover:bg-primary ${className}} `}
        to={url}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </Link>
      <hr
        className={`bg-primary h-1 rounded transition-all ease-in-out duration-500  ${
          isHovered || currentLocation === url ? "w-full" : "w-0"
        } `}
      />
    </div>
  );
};

export default NavLinkComponent;
