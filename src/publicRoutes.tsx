import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import { NavlinkData } from "./lib/navLinkData";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import ContactsPage from "./pages/contacts";
import PortfolioPage from "./pages/porfolio";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path={NavlinkData.HOME_PAGE.url} />
      <Route element={<AboutPage />} path={NavlinkData.ABOUT_PAGE.url} />
      <Route element={<ServicesPage />} path={NavlinkData.SERVICE_PAGE.url} />
      <Route element={<ContactsPage />} path={NavlinkData.CONTACT_PAGE.url} />
      <Route
        element={<PortfolioPage />}
        path={NavlinkData.PORTFOLIO_PAGE.url}
      />
    </Routes>
  );
};

export default PublicRoutes;
