import { GetStaticProps } from "next";

import { Banner, Project } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills, SkillsProps } from "@/components/skills";
import { client } from "@/lib/sanity";

interface Props {
  project: Project[];
  skill: SkillsProps[];
}

export default function Home({ project, skill }: Props) {
  return (
    <div className="bg-[#09090A]">
      <Header />
      <div className="h-full max-w-[1216px] mx-auto sm:p-4 ">
        <Hero />
        <Banner projects={project} />
        <Skills skills={skill} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const project = await client.fetch(
    `*[_type == "projects"]{_id, title, description, published_date, image, slug}`
  );
  const skill = await client.fetch(`*[_type == "skill"]{_id, title, image,}`);

  return {
    props: {
      project,
      skill,
    },
    revalidate: 60 * 60 * 24,
  };
};
