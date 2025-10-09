import logo from "@/assets/membaskins_logo.webp";
import { NavBarContext } from "@/components/context/context";
import { NavlinkData } from "@/lib/navLinkData";
import { TextAlignJustify, X } from "lucide-react";
import { useContext } from "react";
import NavLinkComponent from "./navLinkComponent";
import CallButton from "./callButton";
import { Link } from "react-router";
const TopNav = () => {
  const openSideNav = useContext(NavBarContext);
  return (
    <nav className=" w-full  xl:w-[1040px] 2xl:w-[1280px]  mx-auto   ">
      <div className="py-2 px-4 flex justify-between items-center  ">
        <section>
          <Link to={NavlinkData.HOME_PAGE.url}>
            <figure className="flex gap-1  ">
              <img
                src={logo}
                alt="company logo"
                className="w-[50px] lg:w-[60px]"
              />
              <figcaption className="flex flex-col self-center font-bold font-serif ">
                <span className="text-primary uppercase ">Membaskins</span>{" "}
                <span className="text-sm italic">Branding & Interior</span>
              </figcaption>
            </figure>
          </Link>
        </section>
        <section className="hidden lg:flex lg:gap-3">
          {Object.values(NavlinkData).map((value, key) => (
            <NavLinkComponent url={value.url} title={value.title} key={key} />
          ))}
        </section>
        <section>
          <section className="lg:hidden">
            <button
              className=" relative transition-all ease-in-out "
              onClick={() =>
                openSideNav?.setSideNavOpen(!openSideNav.isSideNavOpen)
              }
            >
              {openSideNav?.isSideNavOpen ? (
                <X className="size-[28px]" />
              ) : (
                <TextAlignJustify className="size-[28px]" />
              )}
            </button>
          </section>
          <section className="hidden lg:block">
            <CallButton />
          </section>
        </section>
      </div>
    </nav>
  );
};

export default TopNav;
