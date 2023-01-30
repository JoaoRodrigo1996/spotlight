import { client } from "@/lib/sanity";
import { formatDate } from "@/utils/format-date";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";

export interface Project {
  _id: string;
  title: string;
  description: string;
  published_date: string;
  image: {
    caption: string;
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
}

interface Props {
  projects: Project[];
}

export function Banner({ projects }: Props) {
  const builder = imageUrlBuilder(client);

  function urlFor(source: string) {
    return builder.image(source);
  }

  return (
    <div className=" mt-16 grid grid-cols-4  gap-4 ">
      {projects.map((project) => {
        return (
          <div key={project._id} className="flex flex-col gap-4">
            <Image
              className="object-contain rounded-3xl w-full"
              width={350}
              height={250}
              src={urlFor(project.image.asset._ref).width(300).url()}
              alt="imagem da aplicação DashGo"
            />
            <div className="px-2">
              <span className="text-zinc-500 text-sm block mb-3 border-l-2 border-l-zinc-600 pl-4 ">
                {formatDate(project.published_date)}
              </span>
              <strong className="text-zinc-100 font-semibold text-base">
                {project.title}
              </strong>
              <p className="text-zinc-400 text-base leading-relaxed mt-2">
                {project.description}
              </p>
              <Link
                href={`projects/${project.slug.current}`}
                prefetch={false}
                className="text-violet-500 text-sm flex items-center gap-2 mt-4"
              >
                Ler mais <FaChevronRight size={10} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
