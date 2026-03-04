import Button from './Button';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, gsap } from 'gsap/all';

import clothingDarkImg from '/clothing-dark.webp';
import clothingStackImg from '/clothing-stack.webp';
import mainClothingImg from '/main-clothing.webp';

export default function Clothing() {
  useGSAP(() => {
    const imageScrollBehavior = gsap.utils.toArray('.image');

    imageScrollBehavior.forEach(img => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          pin: true,
          start: 'top 10%',
          pinSpacing: false,
          endTrigger: '#container',
          end: 'bottom bottom',
        },
      });
    });
  }, []);

  return (
    <section id="container" className=" xl:h-[250vh]   h-full my-5">
      <div className=" hidden h-full flex-col items-center justify-between gap-15 lg:grid lg:grid-cols-3   lg:justify-between">
        <div className="image   col-start-2">
          <img
            src={mainClothingImg}
            loading="lazy"
            alt="a young man wearing casual mendro clothing"
            className="clothing-image  "
          />
          <div className="text-section text-md mt-5 font-semibold uppercase">
            <p>Social, influence, commerce -</p>
            <p>built to work together, designed</p>
            <p>to move your brand forward.</p>
            <Button className={'mt-4'}>Shop Now</Button>
          </div>
        </div>
        <div className="image xl:self-start col-start-1">
          <img
            src={clothingDarkImg}
            loading="lazy"
            alt="a couple wearing mendro clothing"
            className="clothing-image "
          />
        </div>
        <div className="image py-100 xl:self-end  col-start-3">
          <img
            src={clothingStackImg}
            loading="lazy"
            alt="a stack of mendro clothing"
            className="clothing-image xl:self-end"
          />
        </div>
      </div>
      <div className="flex h-full flex-col gap-6 xl:hidden">
        <img
          src={clothingDarkImg}
          loading="lazy"
          alt="a couple wearing mendro clothing"
          className="w-40 self-start xl:w-90"
        />
        <img
          src={mainClothingImg}
          loading="lazy"
          alt="a young man wearing casual mendro clothing"
          className="w-40 self-end xl:w-120 xl:self-center"
        />
        <img
          src={clothingStackImg}
          loading="lazy"
          alt="a stack of mendro clothing"
          className="w-40 self-start xl:w-100 xl:self-end"
        />
        <div className="text-md mt-5 font-semibold uppercase">
          <p>Social, influence, commerce -</p>
          <p>built to work together, designed</p>
          <p> to move your brand forward.</p>
          <Button className={'mt-4'}>Shop Now</Button>
        </div>
      </div>
    </section>
  );
}
