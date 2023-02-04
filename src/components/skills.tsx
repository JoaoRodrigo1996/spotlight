import { urlFor } from "@/utils/transform-cdn-url";
import Image from "next/image";

export interface SkillsProps {
  _id: string;
  title: string;
  image: {
    caption: string;
    asset: {
      _ref: string;
    };
  };
}

interface Props {
  skills: SkillsProps[];
}

export function Skills({ skills }: Props) {
  return (
    <div className=" mt-12">
      <h2 className="text-2xl text-white font-semibold">Conhecimentos</h2>
      <div className="mt-6 flex items-center justify-between gap-4 rounded-lg ">
        {skills.map((skill) => {
          return (
            <Image
              key={skill._id}
              className="rounded-lg "
              width={64}
              height={64}
              src={urlFor(skill.image.asset._ref).url()}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}
