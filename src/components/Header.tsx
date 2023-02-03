import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";

interface Props {
  showBackButton?: boolean;
}

export function Header({ showBackButton }: Props) {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <div className=" ">
      <header className="w-full h-full max-w-[1216px] mx-auto mb-2 py-6 flex items-center justify-between">
        {showBackButton ? (
          <button onClick={handleBack}>
            <FaChevronLeft size={22} color="#E1E1E6" />
          </button>
        ) : (
          <div />
        )}
        <nav>
          <ul className="text-white flex gap-4">
            <Link
              className="py-2 px-3 rounded-lg font-semibold border border-transparent text-sm hover:bg-violet-500/10 hover:text-violet-500 transition-all"
              href="/"
            >
              Página inicial
            </Link>
            <Link
              className="py-2 px-4 rounded-lg font-semibold border border-transparent text-sm hover:bg-violet-500/10 hover:text-violet-500 transition-all"
              href="/certificates"
            >
              Certificados
            </Link>
            <Link
              className="py-2 px-3 rounded-lg font-semibold border border-transparent text-sm hover:bg-violet-500/10 hover:text-violet-500 transition-all"
              href="https://github.com/JoaoRodrigo1996?tab=repositories"
              target={"_blank"}
            >
              Projetos
            </Link>
          </ul>
        </nav>
        <div />
      </header>
    </div>
  );
}
