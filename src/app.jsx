import Navbar from "./components/navbar";
import About from "./components/sections/about";
import Hero from "./components/sections/hero";

function App() {
  return (
    <div className="flex flex-col h-full gap-40 justify-center items-center">
      <Navbar />
      <Hero />
      <About />
      <br />
    </div>
  );
}

export default App;
