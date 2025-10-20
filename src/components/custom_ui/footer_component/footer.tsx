import logo from "@/assets/membaskins_logo.webp";
import { NavlinkData } from "@/lib/navLinkData";
import { Link } from "react-router";
import NavLinkComponent from "../navigation/navLinkComponent";
import {
  Facebook,
  Headset,
  Instagram,
  Mail,
  MapPin,
  Music2,
} from "lucide-react";
import ReachOutListComponent from "./reachOutListComponent";
import { PHONE_NUMBER } from "@/lib/constants";
import SocialsComponent from "./socialsComponent";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";
const Footer = () => {
  return (
    <footer>
      <div className="w-full xl:w-[65rem] 2xl:w-[80rem] grid gap-2 mx-auto ">
        <section className="grid gap-2 lg:grid-cols-4 overflow-x-hidden">
          <AnimateToRight>
            <section className="flex flex-col  gap-2 ">
              <Link to={NavlinkData.HOME_PAGE.url}>
                <figure className="flex items-center gap-2 ">
                  <img src={logo} alt="company logo" className="w-[100px]" />
                  <figcaption className="flex flex-col font-bold font-serif ">
                    <span className="text-primary uppercase ">Membaskins </span>
                    <span className="italic">Branding & Interior</span>
                  </figcaption>
                </figure>
              </Link>
              <section>
                <article className="">
                  <span className="font-bold text-primary">
                    Membaskin Branding & Interior{" "}
                  </span>
                  <span>
                    transforms ideas into impactful brands through storytelling,
                    innovation, and design.
                  </span>
                </article>
              </section>
            </section>
          </AnimateToRight>

          <section className="inline-flex flex-col  lg:justify-self-center">
            <AnimateToRight>
              <div className="grid gap-1">
                {" "}
                <h4 className="font-bold text-lg text-primary">Quick Links</h4>
                <ul className="grid gap-1">
                  {Object.values(NavlinkData).map((value, index) => (
                    <li>
                      <NavLinkComponent
                        url={value.url}
                        title={value.title}
                        key={index}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateToRight>
          </section>

          <section className="inline-flex  lg:justify-self-center">
            <AnimateToLeft>
              <div className="grid gap-2">
                <h4 className="font-bold text-lg text-primary">Reach Out</h4>
                <ul className="grid gap-2 lg:gap-1">
                  <li>
                    <ReachOutListComponent
                      icon={MapPin}
                      title={"Nairobi, Kenya"}
                    />
                  </li>
                  <li>
                    <ReachOutListComponent
                      icon={Headset}
                      title={PHONE_NUMBER}
                    />
                  </li>
                  <li>
                    <ReachOutListComponent
                      icon={Mail}
                      title={"info@membaskins.co.ke"}
                    />
                  </li>
                </ul>
              </div>
            </AnimateToLeft>
          </section>
          <section className="lg:justify-self-center">
            <AnimateToLeft>
              <div>
                {" "}
                <h4 className="font-bold text-lg text-primary">Socials</h4>
                <ul className="grid gap-2 lg:gap-1">
                  <li>
                    <SocialsComponent
                      title={"Facebook"}
                      icon={Facebook}
                      url={"https://www.facebook.com/share/1GQeih2izC/"}
                    />
                  </li>
                  <li>
                    <SocialsComponent
                      title={"Instagram"}
                      icon={Instagram}
                      url={
                        "https://www.instagram.com/membaskins?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      }
                    />
                  </li>
                  <li>
                    <SocialsComponent
                      icon={Music2}
                      title={"Tiktok"}
                      url="https://www.tiktok.com/@membaskins46?is_from_webapp=1&sender_device=pc"
                    />
                  </li>
                </ul>
              </div>
            </AnimateToLeft>
          </section>
        </section>

        <section className="grid gap-0.5 lg:text-center">
          <hr className="h-2 bg-primary" />
          <small className="font-bold">
            <span>&copy; 2020 Membaskins Branding & Interior. </span>
            <span className="text-primary ">All rights reserved</span>
          </small>
          <small className=" font-bold ">
            Developed by Sareto Technologies
          </small>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
