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
      smoothMobile: true,  // Enable smooth scrolling on mobile
      getDirection: true,  // Track scroll direction
    });

    return () => {
      if (scroll) scroll.destroy();  // Clean up on unmount
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="main max-w-screen-2xl m-auto min-w-min">
      <div data-scroll-section>
        <Herosection />
      </div>
      <div data-scroll-section>
        <WhyChooseUs />
      </div>
      <div data-scroll-section>
        <AboutUs />
      </div>
      <div data-scroll-section>
        <Statis />
      </div>
      <div data-scroll-section>
        <TeamSection />
      </div>
      <div data-scroll-section>
        <TestimonialsSection />
      </div>
      <div data-scroll-section>
        <ValuesSection />
      </div>
      <div data-scroll-section>
        <TabSection />
      </div>
      <div data-scroll-section>
        <GridGallery />
      </div>
      <div data-scroll-section>
        <FAQSection />
      </div>
      <div data-scroll-section>
        <BlogSection />
      </div>
      <div data-scroll-section>
        <PricingSection />
      </div>
      <div data-scroll-section>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
