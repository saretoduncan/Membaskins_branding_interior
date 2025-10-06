import SideNav from "./components/custom_ui/navigation/sideNav";
import TopNav from "./components/custom_ui/navigation/topNav";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <section>
          <header className="relative">

            <TopNav/>
            <SideNav/>
          </header>
          <main></main>
        </section>
        <section>
          <footer>footer</footer>
        </section>
      </div>
    </>
  );
}

export default App;
