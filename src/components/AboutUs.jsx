import { useRef } from 'react';

import { CircleArrowDown } from 'lucide-react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

import clothingImg from '/Clothing.webp';
import { Timeline } from 'gsap/gsap-core.js';

export default function AboutUs() {
  const iconRef = useRef(null);
  const mendroRef = useRef(null);

  useGSAP(() => {
    let titleSplit = SplitText.create('#title-aboutUs', { type: 'words,chars' });
    let mendroSplit = SplitText.create(mendroRef.current, { type: 'words' });

    gsap.from(iconRef.current, {
      y: -35,
      duration: 1,
      repeat: -1,
      ease: 'power1.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: iconRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(titleSplit.words, {
      y: 100,
      ease: 'power1',
      stagger: 0.05,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '#title-aboutUs',
        start: 'top 75%',
      },
    });

    gsap.from(mendroSplit.words, {
      y: 50,
      ease: 'power1.in',
      stagger: 0.1,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: mendroRef.current,
        start: 'top 85%',
      },
    });

    // Limpieza (muy importante)
    return () => {
      titleSplit.revert();
      mendroSplit.revert();
    };
  }, []);

  return (
    <section
      id="about"
      className="flex w-full   flex-col items-center justify-center gap-10 sm:py-20 xl:flex-row"
    >
      <div className="flex w-full flex-col items-center gap-4 text-center md:text-left xl:items-start">
        <div>
          <CircleArrowDown
            ref={iconRef}
            absoluteStrokeWidth
            className="hidden size-10 md:m-auto md:block"
          />
          <span
            ref={mendroRef}
            className="text-sm font-semibold tracking-wide text-neutral-600 uppercase sm:text-base md:text-lg md:tracking-normal md:text-neutral-900"
          >
            About Mendro
          </span>
        </div>

        <h2
          id="title-aboutUs"
          className="text-md max-w-2xl text-center leading-snug font-normal -tracking-tight sm:text-xl md:text-left md:text-3xl xl:text-4xl"
        >
          we created digital clothes that exist only in the digital world and all that we used to do
          so is our creativity and the digital cloths.
        </h2>
      </div>

      <img
        src={clothingImg}
        loading="lazy"
        alt="A person walking wearing mendro clothing"
        draggable="false"
        className="w-full max-w-70 sm:max-w-sm"
      />
    </section>
  );
}
