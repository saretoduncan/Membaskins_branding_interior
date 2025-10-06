import { useState, type ReactNode } from "react";
import { NavBarContext } from "./context";

interface INavContextWrapperProp {
  children: ReactNode;
}
const NavBarContextWrapper: React.FC<INavContextWrapperProp> = ({
  children,
}) => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  return (
    <NavBarContext.Provider value={{ isSideNavOpen, setSideNavOpen }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarContextWrapper;
