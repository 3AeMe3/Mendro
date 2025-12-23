import { gsap } from 'gsap/all';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
export default function FadingPage() {
  const [isDone, setIsDone] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      '#panel',
      {
        height: 0,
        duration: 3,
      },
      {
        height: '100%',
        delay: 1.5,
        duration: 1,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.to('#overlay', {
            opacity: 0,
            duration: 0.6,
            onComplete: () => setIsDone(true),
          });
        },
      }
    );
  }, []);

  return (
    <>
      {!isDone && (
        <div id="overlay" className="absolute inset-0 z-1000 h-screen bg-[#1f1d1d]">
          <div id="panel" className="w-full bg-[#d7e5e6]"></div>
        </div>
      )}
    </>
  );
}
