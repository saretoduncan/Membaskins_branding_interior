import type { LucideIcon } from "lucide-react";

export type TNavType = {
  title: string;
  url: string;
  icon?: LucideIcon;
};
export type TAnimateWrapper = {
  children: React.ReactNode;
};
export type TGalleryCategoryType =
  | "signages"
  | "petrol-branding"
  | "car-branding"
  | "interior-branding"
  | "pylon-signages"
  | "LED-screen"
  | "All"|"aluco-clamping";
export type TGalleryType = {
  category: TGalleryCategoryType;
  img: string;
  alt: string;
};
