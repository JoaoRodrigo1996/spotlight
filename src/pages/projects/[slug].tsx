import { Header } from "@/components/Header";
import { client } from "@/lib/sanity";
import { urlFor } from "@/utils/transform-cdn-url";
import { GetStaticProps } from "next";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: {
    caption: string;
    asset: {
      _ref: string;
    };
  };
  techs: string[];
  url: string;
}

interface Props {
  project: Project;
}

export default function Projects({ project }: Props) {
  console.log(project);
  return (
    <div className="bg-[#09090A]  ">
      <Header showBackButton />
      <div className="max-w-[1216px] h-screen mx-auto">
        <div className="flex flex-col gap-4 ">
          <Image
            width={1440}
            height={900}
            src={urlFor(project.image.asset._ref).url()}
            alt={project.image.caption}
          />
          <div className="flex gap-2 px-4 ">
            <div className="flex-1 ">
              <h2 className="text-white font-bold text-2xl">{project.title}</h2>
              <p className="text-lg text-zinc-100 mt-3 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col justify-between gap-3 flex-1">
              <div className=" ">
                <h2 className="text-lg text-zinc-100 font-semibold ">
                  Tecnologias
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => {
                    return (
                      <span
                        key={tech}
                        className="text-base text-white font-semibold bg-violet-500/10 rounded-lg p-2 mt-3"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="flex">
                  <a
                    className="border ml-auto border-violet-500 px-5 py-2 text-white font-semibold uppercase rounded-lg hover:bg-violet-600"
                    href={project.url}
                  >
                    Ver online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug;

  const query = `*[_type == "projects" && slug.current == '${slug}'][0]{_id, title, description, published_date, image,techs, url}`;

  const project = await client.fetch(query);

  return {
    props: {
      project,
    },
  };
};
