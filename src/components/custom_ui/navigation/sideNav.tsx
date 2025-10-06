import { NavlinkData } from "@/lib/navLinkData";
import NavLinkComponent from "./navLinkComponent";

const SideNav = () => {
  return (
    <div className="fixed top-20  w-full bg-sidebar text-sidebar-foreground">
      <nav className="px-4 py-4">
        <section className="grid gap-2">
        {Object.values(NavlinkData).map((value,index)=>(
            <NavLinkComponent
            key={index}
            url={value.url}
            title={value.title}
          />
        ))}
          
        </section>
      </nav>
    </div>
  );
};

export default SideNav;
