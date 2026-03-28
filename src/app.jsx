import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";

function App() {
  return (
    <div className="flex flex-col h-full gap-28 justify-center items-center">
      <Navbar />
      <Hero />
      <br />
    </div>
  );
}

export default App;
