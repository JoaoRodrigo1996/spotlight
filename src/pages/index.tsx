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
  return (
    <div className="bg-[#09090A]">
      <Header />
      <div className="h-full max-w-[1216px] mx-auto  ">
        <Hero />
        <Banner projects={project} />
        <Skills />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const project = await client.fetch(
    `*[_type == "projects"]{_id, title, description, published_date, image, slug}`
  );

  return {
    props: {
      project,
    },
    revalidate: 60 * 60 * 24,
  };
};
