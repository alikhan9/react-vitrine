import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import "aos/dist/aos.css"
import Aos from "aos";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
    document.title = "React."
  }, [])

  return (
    <div className="overflow-x-hidden" >
      <div data-aos="zoom-out">
        <Navbar />
        <Hero />
      </div>
      <div data-aos="fade-right">
        <Analytics />
      </div>
      <div data-aos="fade-left">
        <Newsletter />
      </div>
      <div data-aos="zoom-out">
        <Pricing />
      </div>
      <div data-aos="fade-down">
        <Footer />
      </div>

    </div>
  );
}

export default App;
