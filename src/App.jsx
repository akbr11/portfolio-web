import Navbar from "./components/Navbar";
import About from "./components/About";
import Tools from "./components/Tools";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <>
      <main className="md:px-20 lg:px-40">
        <Navbar />
        <About />
        <Tools />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
