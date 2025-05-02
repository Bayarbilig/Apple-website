import Hero from "./components/hero";
import Highlights from "./components/Higlights";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
