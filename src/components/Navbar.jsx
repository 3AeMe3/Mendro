export default function Navbar() {
  return (
    <nav className="fixed w-full">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex shrink-0 items-center">
              <span className="text-2xl font-bold">MENDRO</span>
            </div>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-10 rounded-2xl bg-white/20 px-4 py-2 font-medium">
              <li>HOME </li>
              <li>ABOUT US </li>
              <li>CONTACT </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
