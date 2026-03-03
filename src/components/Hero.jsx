import { useContext } from 'react';
import { LoadingCtx } from './Loading/LoadingContext';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

import Wear from './ThreeJS/Wear';

export default function Hero() {
  const { isLoaded } = useContext(LoadingCtx);

  useGSAP(() => {
    if (!isLoaded) return;

    let splitTitle = SplitText.create('#title-hero', { type: 'words' });
    let splitSpan = SplitText.create('#short-text', { type: 'lines' });

    let tl = gsap.timeline({
      delay: 0.7,
    });

    tl.from(splitTitle.words, {
      opacity: 0,
      ease: 'power1.out',
      duration: 0.5,
      y: 100,
      stagger: 0.05,
    })
      .from(splitSpan.lines, {
        x: 150,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .from('#wear-wrapper', {
        y: 150,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.out',
      });
  }, [isLoaded]);

  return (
    <section id="home" className=" w-full  flex items-center lg:block  ">
      {isLoaded && (
        <div className="relative mx-auto max-h-3/4  max-w-sm md:max-w-2xl lg:max-w-7xl  flex h-full flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-3 lg:items-center lg:gap-2 lg:max-h-full">
          <h1
            id="title-hero"
            className="text-center text-5xl md:text-6xl leading-tight font-semibold lg:text-8xl lg:text-left lg:leading-21 lg:font-extrabold lg:-tracking-[0.3rem]"
          >
            digital fashion is a new chapter
          </h1>
          <div
            id="wear-wrapper"
            className="relative h-full max-h-[50%] mx-auto w-full  md:max-h-120  lg:max-h-2/4 lg:h-full   "
          >
            {<Wear />}
          </div>
          <div className=" w-full  flex-col  flex">
            <div
              className=" hidden text-center text-sm font-medium text-neutral-600 sm:text-base lg:block lg:max-w-xs lg:text-left lg:text-lg lg:font-semibold"
              id="short-text"
            >
              <p >

              We Merge the digital possiblities and the needs of fashion brands to create
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
