import useHoverHook from "@/hooks/useHoverHook";
import { Link, useLocation } from "react-router";
import { useContext } from "react";
import { NavBarContext } from "@/components/context/context";
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
  const sideNavOpen = useContext(NavBarContext);
  const currentLocation = useLocation().pathname;
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverHook(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  return (
    <Link
      className={`font-bold  ${
        currentLocation === url && "text-primary"
      } ${className}} `}
      to={url}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        sideNavOpen?.setSideNavOpen(false);
        scrollUp();
      }}
    >
      <span> {title}</span>{" "}
      <hr
        className={`bg-primary h-1 rounded transition-all ease-in-out duration-500  ${
          isHovered || currentLocation === url ? "w-full" : "w-0"
        } `}
      />
    </Link>
  );
};

export default NavLinkComponent;
