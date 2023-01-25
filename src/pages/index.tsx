import imageUrlBuilder from "@sanity/image-url";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { client } from "@/lib/sanity";
import { GetStaticProps } from "next";

interface ProjectProps {
  project: {
    projects: Array<{
      _key: string;
      title: string;
      description: string;
      url: string;
      image: {
        asset: {
          _ref: string;
        };
      };
    }>;
  };
}

export default function Home({ project }: ProjectProps) {
  console.log(project.projects);

  const builder = imageUrlBuilder(client);

  function urlFor(source: string) {
    return builder.image(source);
  }

  return (
    <div className="bg-[#000]  ">
      <div className="bg-zinc-900 w-screen h-full max-w-[1216px] mx-auto border border-y-0 border-x-zinc-700 py-4">
        <Header />
        {project.projects.map((item) => {
          return (
            <div key={item._key}>
              <p>{item.title}</p>{" "}
              <img
                src={urlFor(item.image.asset._ref).width(500).url()}
                alt=""
              />
            </div>
          );
        })}
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const project = await client.fetch(`*[_type == "projects"][0]`);

  return {
    props: {
      project,
    },
    revalidate: 60 * 60 * 24,
  };
};
