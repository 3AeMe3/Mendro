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
      .from('#wear', {
        y: 150,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.out',
      });
  }, [isLoaded]);

  return (
    <section>
      {isLoaded && (
        <div className="h-full w-full">
          <div className="relative grid h-full grid-rows-2 xl:grid-cols-3 xl:grid-rows-none xl:items-center xl:justify-around xl:gap-3 xl:px-10">
            <div className="mt-20">
              <h1
                id="title-hero"
                className="text-center text-5xl font-semibold xl:w-xl xl:scale-y-115 xl:text-left xl:text-8xl xl:leading-21 xl:font-extrabold xl:-tracking-[0.3rem]"
              >
                digital fashion is a new chapter
              </h1>
            </div>
            <div className="absolute top-1/2 left-1/2 z-10 row-start-2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 transform xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:h-[80%] xl:w-[125%]">
              {<Wear id={'wear'} />}
            </div>
            <div className="xl:col-start-3 xl:mx-auto xl:w-60 xl:gap-10">
              <span id="short-text" className="hidden font-semibold xl:block">
                We Merge the digital possiblities and the needs of fashion brands to create
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
