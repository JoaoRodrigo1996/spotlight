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
    <div className=" mt-12 p-4 flex items-center justify-between gap-4 rounded-lg ">
      {skills.map((skill) => {
        return (
          <Image
            className="rounded-lg "
            width={64}
            height={64}
            src={urlFor(skill.image.asset._ref).url()}
            alt=""
          />
        );
      })}
    </div>
  );
}
