import NavBarContextWrapper from "@/components/context/navBarContextWrapper";
import SideNav from "./components/custom_ui/navigation/sideNav";
import TopNav from "./components/custom_ui/navigation/topNav";
import Footer from "./components/custom_ui/footer_component/footer";
import PublicRoutes from "./publicRoutes";
import WhatsAppButton from "./components/custom_ui/common/whatsAppButton";

function App() {
  return (
    <>
      <div className=" relative min-h-screen flex flex-col justify-between text-sm md:text-base">
        <section>
          <header className="relative">
            <NavBarContextWrapper>
              <section className="fixed w-full z-20 bg-sidebar  shadow-lg">
                <TopNav />
              </section>
              <section className="lg:hidden">
                <SideNav />
              </section>
            </NavBarContextWrapper>
          </header>
          <main className="mt-17">
            <PublicRoutes />
          </main>
        </section>
        <section>
          <footer className="w-full bg-sidebar p-4 border-t ">
            <Footer />
          </footer>
        </section>
        <div className="fixed w-fit bottom-4 right-2 z-10">
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
}

export default App;
