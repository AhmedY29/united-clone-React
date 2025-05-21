import "./App.css";
import BottomNav from "./components/BottomNav";
import ExploreDest from "./components/ExploreDest";
import FixedBtn from "./components/FixedBtn";
import Footer from "./components/Footer";
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
      <BottomNav />
      <Footer />
    </>
  );
}

export default App;
