import type { LucideIcon } from "lucide-react";

export type TNavType = {
  title: string;
  url: string;
  icon?: LucideIcon;
};
export type TAnimateWrapper = {
  children: React.ReactNode;
};