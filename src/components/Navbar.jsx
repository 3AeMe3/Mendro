export default function Navbar() {
  return (
    <nav className="fixed z-100 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <span className="select-disable text-2xl font-bold">MENDRO</span>
            </div>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-10 rounded-2xl bg-white/20 px-4 py-2 font-medium">
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT US</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
