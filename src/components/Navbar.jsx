import { useContext, useState, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { Menu, X } from 'lucide-react';

import { LoadingCtx } from './Loading/LoadingContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const { isLoaded } = useContext(LoadingCtx);

  useGSAP(() => {
    if (!isLoaded) return;

    const tl = gsap.timeline();

    let ctx = gsap.context(() => {
      tl.from('#brand', {
        x: -50,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      }).from('.nav__item', {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
      });

      return () => {
        ctx.revert();
      };
    }, [isLoaded]);
  });

  useGSAP(() => {
    if (!isLoaded) return;
    if (!mobileMenuRef.current) return;

    gsap.set(mobileMenuRef.current, { y: '-100%' });
  }, [isLoaded]);

  useGSAP(() => {
    if (!mobileMenuRef.current) return;

    gsap.to(mobileMenuRef.current, {
      y: isOpen ? '0%' : '-100%',
      duration: isOpen ? 0.5 : 0.4,
      ease: isOpen ? 'power3.out' : 'power3.in',
    });
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      {isLoaded && (
        <nav className="fixed isolate z-100 w-full">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mt-4 flex h-16 justify-between px-6 md:items-center md:justify-between">
              <span id="brand" className="navbar-text select-disable text-2xl font-bold">
                MENDRO
              </span>

              {/* desktop Menu */}
              <div className="hidden md:block">
                <ul className="flex items-center justify-center gap-10 rounded-2xl px-4 py-2 font-medium">
                  <li className="nav__item overflow-hidden">
                    <a href="#" className="nav__link navbar-text group relative">
                      <span className="opacity-0 group-hover:opacity-0">HOME</span>
                      <div className="flex-center absolute top-0 left-0 flex flex-col">
                        <span className="transition-all duration-300 group-hover:-translate-y-5 group-hover:opacity-100">
                          HOME
                        </span>
                        <span className="transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-100">
                          HOME
                        </span>
                      </div>
                    </a>
                  </li>

                  <li className="nav__item overflow-hidden">
                    <a href="#" className="nav__link navbar-text group relative">
                      <span className="opacity-0 group-hover:opacity-0">ABOUT US </span>
                      <div className="flex-center absolute top-0 left-0 flex flex-col">
                        <span className="transition-all duration-300 group-hover:-translate-y-5 group-hover:opacity-100">
                          ABOUT US
                        </span>
                        <span className="transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-100">
                          ABOUT US
                        </span>
                      </div>
                    </a>
                  </li>

                  <li className="nav__item overflow-hidden">
                    <a href="#" className="nav__link navbar-text group relative">
                      <span className="opacity-0 group-hover:opacity-0">CONTACT</span>
                      <div className="flex-center absolute top-0 left-0 flex flex-col">
                        <span className="transition-all duration-300 group-hover:-translate-y-5 group-hover:opacity-100">
                          CONTACT
                        </span>
                        <span className="transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-100">
                          CONTACT
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* mobile button */}
              <div className="md:hidden">
                <button onClick={toggleMenu}>
                  <Menu />
                </button>

                {/* mobile menu */}
                <div
                  ref={mobileMenuRef}
                  id="mobile-menu"
                  className="absolute top-0 right-0 flex h-screen w-full flex-col rounded-lg bg-[#f2edeb] px-6 shadow-lg"
                >
                  <button onClick={toggleMenu} className="mt-4 self-end">
                    <X />
                  </button>

                  <ul className="flex flex-col items-center gap-4 font-medium">
                    <li>
                      <a href="#" className="nav__link" onClick={toggleMenu}>
                        HOME
                      </a>
                    </li>
                    <li>
                      <a href="" className="nav__link" onClick={toggleMenu}>
                        ABOUT US
                      </a>
                    </li>
                    <li>
                      <a href="" className="nav__link" onClick={toggleMenu}>
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
