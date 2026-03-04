
import { useGSAP } from '@gsap/react';
import { useState,useEffect } from 'react';
import { LoadingCtx } from './components/Loading/LoadingContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Clothing from './components/Clothing';
import Footer from './components/Footer';
import FadingPage from './components/FadingPage';

import {ScrollSmoother} from "./lib/gsap.js"
import WeAre from './components/WeAre';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 2,
      smoothTouch: 0.1,
    });
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
      
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
   return (
    <div className="smooth-wrapper ">
      <LoadingCtx value={{ isLoaded, setIsLoaded }} className="smooth-content relative ">
        <Navbar />
        <div className={`smooth-content relative `}>
          <FadingPage />
          <Hero />
          <AboutUs />
          <Clothing />
          <WeAre />
          <Footer />
        </div>
      </LoadingCtx>
    </div>
  );
}

export default App;
