import NavBarContextWrapper from "@/components/context/navBarContextWrapper";
import SideNav from "./components/custom_ui/navigation/sideNav";
import TopNav from "./components/custom_ui/navigation/topNav";
import Footer from "./components/custom_ui/footer_component/footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between text-sm md:text-base">
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
          <main></main>
        </section>
        <section>
          <footer className="w-full bg-sidebar p-4 border-t ">
            <Footer/>
          </footer>
        </section>
      </div>
    </>
  );
}

export default App;
