import { useEffect } from "react";
import { SITE_CONFIG } from "./config";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(SITE_CONFIG.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
