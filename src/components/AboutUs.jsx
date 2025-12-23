import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText, ScrollTrigger } from 'gsap/all';

import clothingImg from '/Clothing.webp';
import { CircleArrowRight } from 'lucide-react';
export default function AboutUs() {
  useGSAP(() => {
    let titleSplit = SplitText.create('#title-aboutUs', { type: 'words,chars' });

    gsap.from(titleSplit.words, {
      y: 100,
      ease: 'power1',
      stagger: 0.1,
      opacity: 0,
      scrollTrigger: {
        trigger: '#title-aboutUs',
        start: 'top center',
        end: '20px 80%',
        scrub: true,
      },
    });

    // Limpieza (muy importante)
    return () => titleSplit.revert();
  }, []);

  return (
    <section className="bg-[#111111] pt-30 text-white">
      <div className="flex justify-end gap-10">
        <span>What is</span>
        <span>MENDRO</span>
      </div>
      <div className="flex gap-30">
        <img
          src={clothingImg}
          alt="A person walk around with mendro clothings"
          draggable="false"
          className="h-180"
        />
        <div className="flex flex-col justify-around">
          <CircleArrowRight className="rotate-45" size={80} fill="#ddfc72" color="black" />
          <span className="text-lg">About Mendro</span>
          <h2
            id="title-aboutUs"
            className="text-8xl leading-20 font-bold -tracking-tight text-white/90"
          >
            we are a digital fashion house that mixes technology and creativity
          </h2>
        </div>
      </div>
    </section>
  );
}
