import { NavlinkData } from "@/lib/navLinkData";
import NavLinkComponent from "./navLinkComponent";
import { useContext } from "react";
import { NavBarContext } from "@/components/context/context";
import CallButton from "./callButton";

const SideNav = () => {
  const openSideNav = useContext(NavBarContext);
  return (
    <div
      className={`fixed top-15   w-full bg-sidebar shadow rounded-b text-sidebar-foreground transition-all duration-500 ease-in-out z-10 lg:hidden ${
        openSideNav?.isSideNavOpen ? "translate-x-0" : "translate-x-[-150%]"
      }`}
    >
      <nav className="px-4 py-4 grid gap-2">
        <section className="grid gap-2">
          {Object.values(NavlinkData).map((value, index) => (
            <NavLinkComponent
              key={index}
              url={value.url}
              title={value.title}
              className="flex"
            />
          ))}
        </section>
        <section>
          <CallButton />
        </section>
      </nav>
    </div>
  );
};

export default SideNav;
