import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

import "locomotive-scroll/src/locomotive-scroll.scss";
import "./App.css";

import Herosection from "./components/Herosection";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import Statis from "./components/Statis";
import TeamSection from "./TeamSection";
import TestimonialsSection from "./TestimonialsSection";
import ValuesSection from "./ValuesSection";
import TabSection from "./TabSection";
import GridGallery from "./GridGallery";
import FAQSection from "./FAQSection";
import BlogSection from "./BlogSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Optional settings
      smoothMobile: true,
      getDirection: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <div className="main max-w-screen-2xl m-auto min-w-min" ref={scrollRef} data-scroll-container>
        <Herosection />
        <WhyChooseUs />
        <AboutUs />
        <Statis />
        <TeamSection />
        <TestimonialsSection />
        <ValuesSection />
        <TabSection />
        <GridGallery />
        <FAQSection />
        <BlogSection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
