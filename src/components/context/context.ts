import { createContext, type Dispatch, type SetStateAction } from "react";

interface INavContext {
  isSideNavOpen: boolean;
  setSideNavOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavBarContext = createContext<INavContext| undefined>(undefined)