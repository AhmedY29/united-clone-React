import "./App.css";
import ExploreDest from "./components/ExploreDest";
import FixedBtn from "./components/FixedBtn";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FixedBtn />
      <ExploreDest />
      <Links />
      <Slider />
      <Popular />
    </>
  );
}

export default App;
