import { gsap, SplitText, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Button from './Button';
import frashionVideoPoster from '/video/fashion_video_poster.webp';
import { useContext, useRef } from 'react';
import { LoadingCtx } from './Loading/LoadingContext';

export default function WeAre() {
  const { isLoaded } = useContext(LoadingCtx);
  const titleText = useRef(null);
  const expertice = useRef(null);

  console.log(isLoaded);
  useGSAP(() => {
    if (!isLoaded) return;

    let titleSplit = SplitText.create(titleText.current, { type: 'words' });
    let experticeSplit = SplitText.create(expertice.current, { type: 'words' });

    gsap.from(titleSplit.words, {
      y: -50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: titleText.current,
        start: 'top 80%',
      },
    });
    gsap.from(experticeSplit.words, {
      x: -50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.in',
      scrollTrigger: {
        trigger: expertice.current,
        start: 'top 80%',
      },
    });
  }, [isLoaded]);

  return (
    <section className="xl:h-[160vh] xl:pt-50">
      <div className="flex-center flex flex-col gap-10">
        <h3 className="mb-5 text-center font-bold">
          WE ARE <br /> MENDRO
        </h3>
        <h2 ref={titleText} className="text-center text-3xl">
          <span className="block">Social-first, beauty-fluent,</span>
          <span className="block">influenced-led.</span>
        </h2>
        <Button ref={expertice}>OUR EXPERTISE</Button>
      </div>

      {/* autoPlay loop muted className="mt-10 w-full" */}
      <div className="flex-center mt-20 flex">
        <video autoPlay muted loop className="w-full" poster={frashionVideoPoster}>
          <source src="/video/fashion_video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
