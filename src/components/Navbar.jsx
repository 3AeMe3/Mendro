import { useContext, useRef} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LoadingCtx } from './Loading/LoadingContext';

export default function Navbar() {
  const { isLoaded } = useContext(LoadingCtx);
  const navRef = useRef(null);
  const brandRef = useRef(null);
  const listRef = useRef(null);
 

  useGSAP(
    () => {
      if (!isLoaded) return;

      const ctx = gsap.context(() => {
        gsap
          .timeline()
          .from(brandRef.current, {
            x: -50,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          })
          .from(
            '.nav__item',
            {
              y: -20,
              opacity: 0,
              duration: 0.5,
              ease: 'power2.out',
              stagger: 0.1,
            },
            '-=0.2'
          );
      }, listRef);

      return () => ctx.revert();
    },
    { dependencies: [isLoaded] }
  );

  if (!isLoaded) return null;

   return (
    <nav ref={navRef} className="fixed isolate z-100 w-full px-4 ">
      <div className="bg-[#f2edeb]/30 mx-auto w-full max-w-3/5  md:max-w-md lg:max-w-lg  rounded-2xl backdrop-blur-2xl  lg:px-8">
 
        <div className="mt-4 flex py-3 items-center justify-center px-6">
          <span
            ref={brandRef}
            className=" select-disable md:text-md text-md font-bold sm:text-sm lg:text-lg"
          >
            MENDRO 
          </span>
        </div>
      </div>
    </nav>
  );
}
