import type { TGalleryCategoryType } from "./types";

export const ENavTitle = {
  HOME_PAGE: "homePage",
  ABOUT_PAGE: "aboutPage",
  SERVICE_PAGE: "servicePage",
  PORTFOLIO_PAGE: "portfolioPage",
  CONTACT_PAGE: "contactPage",
} as const;

export const PHONE_NUMBER = "+254 748 047237" as const;
export const EMAIL = "info@membaskins.co.ke";
export const FACEBOOK_LINK = "https://www.facebook.com/share/1GQeih2izC/";
export const INSTAGRAM_LINK =
  "https://www.instagram.com/membaskins_branding?igsh=dWIydG8ybnFxdHhp";
export const TIKTOK_LINK =
  "https://www.tiktok.com/@membaskins46?is_from_webapp=1&sender_device=pc";

export const EGallaryCategory: Record<
  TGalleryCategoryType,
  TGalleryCategoryType
> = {
  signages: "signages",
  "petrol-branding": "petrol-branding",
  "car-branding": "car-branding",
  "interior-branding": "interior-branding",
  "pylon-signages": "pylon-signages",
  "LED-screen": "LED-screen",
  All: "All",
  "aluco-clamping": "aluco-clamping"
};
