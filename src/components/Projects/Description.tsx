import { FaChevronRight } from "react-icons/fa";

interface DescriptionProps {
  title: string;
  description: string;
  date: string;
}

export function Description({ title, description, date }: DescriptionProps) {
  return (
    <div className="mt-20  flex flex-col gap-3">
      <div className="max-w-xl hover:bg-zinc-800/30 p-8 rounded-lg transition-colors">
        <span className="text-zinc-500 text-sm block mb-3 border-l-2 border-l-zinc-600 pl-4 ">
          {date}
        </span>
        <strong className="text-zinc-100 font-semibold text-base">
          {title}
        </strong>
        <p className="text-zinc-400 text-base leading-relaxed mt-2">
          {description}
        </p>
        <a
          href="#"
          className="text-violet-500 text-sm flex items-center gap-2 mt-4"
        >
          Ler mais <FaChevronRight size={10} />
        </a>
      </div>
    </div>
  );
}
