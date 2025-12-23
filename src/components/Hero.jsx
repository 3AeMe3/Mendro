import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

import Cap from './ThreeJS/Cap';

export default function Hero() {
  useGSAP(() => {
    let splitTitle = SplitText.create('#title-hero', { type: 'words,chars' });

    gsap.from(splitTitle.words, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      ease: 'power1.out',
      stagger: 0.05,
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="relative h-full">
        <div className="flex h-full items-center justify-between">
          <div className="w-2xl">
            <h1
              id="title-hero"
              className="w-xl scale-y-115 text-8xl leading-21 font-extrabold -tracking-[0.3rem]"
            >
              digital fashion is a new chapter
            </h1>

            <p className="mt-25 w-sm text-left text-[13px] font-semibold uppercase">
              we created digital clothes <br />
              that exist only in the digital world and all that we used to do so is our creativity
              and the digital cloths.
            </p>
          </div>
          <div className="col-span-1 w-60 gap-10">
            <span className="font-semibold">
              We Merge the digital possiblities and the needs of fashion brands to create
            </span>
          </div>
        </div>

        <div className="-z10 absolute inset-0 m-auto max-w-5xl">
          <Cap />
        </div>
      </div>
    </section>
  );
}
