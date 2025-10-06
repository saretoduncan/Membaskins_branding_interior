import type { ENavTitle } from "./constants";
import type { TNavType } from "./types";

export const NavlinkData: Record<keyof typeof ENavTitle, TNavType> = {
  HOME_PAGE: {
    title: "Home",
    url: "/",
    icon: undefined,
  },
  ABOUT_PAGE: {
    title: "About",
    url: "/about",
    icon: undefined,
  },
  SERVICE_PAGE: {
    title: "Services",
    url: "/services",
    icon: undefined,
  },
  PORTFOLIO_PAGE: {
    title: "Portfolio",
    url: "/portfolio",
    icon: undefined,
  },
  CONTACT_PAGE: {
    title: "Contacts",
    url: "/contacts",
    icon: undefined,
  },
};
