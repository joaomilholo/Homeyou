import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";
import SectionTitle from "./components/sectionTitle";

function App() {
  return (
    <div className="flex flex-col h-full gap-28 justify-center items-center">
      <Navbar />
      <Hero />
      <br />
      <SectionTitle title={"sobre"} />
    </div>
  );
}

export default App;
