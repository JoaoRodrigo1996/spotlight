export function Header() {
  return (
    <header>
      <nav className="flex items-center justify-center py-5 ">
        <ul className="text-zinc-100 text-sm font-medium bg-zinc-800 flex items-center justify-center gap-2 px-3  rounded-full border border-zinc-700">
          <a
            className="px-2 py-2 hover:text-purple-500 transition-all"
            href="/"
          >
            Home
          </a>
          <a
            className="px-2 py-2 hover:text-purple-500 transition-all"
            href="#"
          >
            About
          </a>
          <a
            className="px-2 py-2 hover:text-purple-500 transition-all"
            href="#"
          >
            Projects
          </a>
          <a
            className="px-2 py-2 hover:text-purple-500 transition-all"
            href="#"
          >
            Contact
          </a>
          <a
            className="px-2 py-2 hover:text-purple-500 transition-all"
            href="#"
          >
            Certificates
          </a>
        </ul>
      </nav>
    </header>
  );
}
