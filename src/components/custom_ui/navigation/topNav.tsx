import logo from "@/assets/membaskins_logo.webp";
import { TextAlignJustify } from "lucide-react";
const TopNav = () => {
  return (
    <nav className="">
      <div className="py-2 px-4 flex justify-between items-center">
        <section>
          <figure className="flex gap-1  ">
            <img src={logo} alt="company logo" className="w-[]" />
            <figcaption className="flex flex-col self-center font-bold font-serif ">
              <span className="text-primary">Membaskins</span>{" "}
              <span className="text-sm">Branding & Interior</span>
            </figcaption>
          </figure>
        </section>
        <section></section>
        <section>
          <button className=" relative">
            <TextAlignJustify className="size-[28px]" />
          </button>
        </section>
      </div>
    </nav>
  );
};

export default TopNav;
