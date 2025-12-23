import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Clothing from './components/Clothing';
import Footer from './components/Footer';

import { gsap } from 'gsap';
import { ScrollTrigger, SplitText, ScrollSmoother } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import FadingPage from './components/FadingPage';
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 2,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <div className="smooth-wrapper">
      <div className="smooth-content relative">
        <FadingPage />
        <Navbar />
        <Hero />
        <AboutUs />
        <Clothing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
