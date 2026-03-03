export default function Footer() {
  return (
    <footer className="section-border-dashed bg-[#f2edeb] px-10 py-16 font-semibold">
      <div className="mx-auto grid max-w-6xl grid-cols-1 place-items-center gap-10 md:grid-cols-3">
        <div className="text-center md:text-left">
          <p className="text-sm opacity-80">Hecho con ❤️ por ANK</p>
        </div>

        <nav>
          <ul className="flex flex-col items-center space-y-2 text-sm tracking-wide">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>

        <div className="flex w-full max-w-xs flex-col items-center gap-4">
          <span className="text-lg font-bold xl:text-3xl">MENDRO</span>

          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="w-full rounded-xl bg-white/90 px-4 py-2 text-black placeholder-black placeholder:text-sm placeholder:font-semibold focus:ring-2 focus:ring-white/70 focus:outline-none"
          />
        </div>
      </div>
    </footer>
  );
}
