import { useRef } from 'react';

import { CircleArrowDown } from 'lucide-react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

import clothingImg from '/Clothing.webp';

export default function AboutUs() {
  const iconRef = useRef(null);

  useGSAP(() => {
    let titleSplit = SplitText.create('#title-aboutUs', { type: 'words,chars' });

    gsap.from(titleSplit.words, {
      y: 100,
      ease: 'power1',
      stagger: 0.05,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#title-aboutUs',
        toggleActions: 'play none none none',
        start: 'top 75%',
      },
    });

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

    gsap.from('#subtitle span', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: '#subtitle',
        start: 'top 65%',
        toggleActions: 'play none none none',
      },
    });

    // Limpieza (muy importante)
    return () => titleSplit.revert();
  }, []);

  return (
    <section className="flex-center flex flex-col">
      <div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-30">
        <div className="flex-center flex flex-col xl:w-2/3 xl:gap-10">
          <div>
            <CircleArrowDown
              ref={iconRef}
              absoluteStrokeWidth
              className="hidden size-10 xl:m-auto xl:block"
            />
            <span className="text-lg font-semibold">About Mendro</span>
          </div>

          <h2
            id="title-aboutUs"
            className="text-center text-xl font-normal -tracking-tight md:w-3/4 xl:text-4xl"
          >
            we created digital clothes that exist only in the digital world and all that we used to
            do so is our creativity and the digital cloths.
          </h2>
        </div>

        <img
          src={clothingImg}
          loading="lazy"
          alt="A person walking wearing mendro clothing"
          draggable="false"
          className="w-[80%] basis-1/4 xl:w-80"
        />
      </div>
    </section>
  );
}
