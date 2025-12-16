import { CircleArrowRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="h-screen bg-[#111111] px-10 pt-30 text-white">
      <div className="flex justify-end gap-10">
        <span>Whas is</span>
        <span>MENDRO</span>
      </div>
      <div className="flex gap-30">
        <img src="Clothing.webp" alt="" className="h-180" />
        <div className="flex flex-col justify-around">
          <CircleArrowRight className="rotate-45" size={80} fill="#ddfc72" color="black" />
          <span className="text-lg">About Mendro</span>
          <h2 className="text-8xl leading-20 font-bold -tracking-tight text-white/90">
            we are a digital fashion house that mixes technology and creativity
          </h2>
        </div>
      </div>
    </section>
  );
}
