import { GetStaticProps } from "next";

import { Banner, Project } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/skills";
import { client } from "@/lib/sanity";

interface Props {
  project: Project[];
}

export default function Home({ project }: Props) {
  console.log(project);

  return (
    <div className="bg-[#09090A]">
      <div className="bg-zinc-900 h-full max-w-[1216px] mx-auto border border-y-0 border-x-zinc-700 p-8">
        <Header />
        <Hero />
        <Banner projects={project} />
        <Skills />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const project = await client.fetch(`*[_type == "projects"]`);

  console.log(project);

  return {
    props: {
      project,
    },
    revalidate: 60 * 60 * 24,
  };
};
