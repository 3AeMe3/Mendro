export default function Footer() {
  return (
    <footer className="flex h-[35vh] items-center justify-between bg-[#111111] px-20 pt-10 text-left text-white">
      <div>
        <p className="text-sm">Hecho con ❤️ por ANK</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="flex w-md flex-col items-center justify-center gap-5">
        <span className="title text-3xl font-bold text-white/90">MENDRO</span>
        <input
          type="text"
          className="rounded-2xl bg-[#d6ff6b] px-5 py-2 text-black placeholder-black placeholder:text-sm placeholder:font-semibold focus:outline-0"
          placeholder="YOUR EMAIL"
        />
      </div>
    </footer>
  );
}
