// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';

export default function Hero() {
  //   useGSAP(() => {
  //     gsap.to('.cubo', { x: 200, repeat: -1, yoyo: true, rotation: 300 });
  //   }, []);

  return (
    <section className="flex h-screen justify-between gap-10 bg-[#d0e4e9] px-10 pt-30">
      <div className="w-2xl">
        <h1 className="w-xl scale-y-115 text-8xl leading-19 font-extrabold -tracking-wide">
          digital fashion is a new chapter
        </h1>

        <p className="mt-25 w-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id atque amet modi officiis
          quo. Nobis libero velit, placeat nostrum maiores dignissimos cupiditate incidunt provident
          eveniet cum omnis ut asperiores!
        </p>
      </div>
      <div className="flex h-[70%] flex-col items-center justify-around gap-10">
        <span className="w-48 font-medium">
          We Merge the digital possiblities and the needs of fashion brands to create
        </span>
        <span>We Merge the digital possiblities and the needs of fashion brands to create</span>
      </div>
    </section>
  );
}
