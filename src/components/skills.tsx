import Image from "next/image";

import javascriptImg from "../assets/javascript.png";
import nextImg from "../assets/next.png";
import typescriptImg from "../assets/typescript.png";

export function Skills() {
  return (
    <div className=" mt-12 p-4 flex items-center gap-4 rounded-lg ">
      <Image className="rounded-lg " width={42} src={javascriptImg} alt="" />
      <Image className="rounded-lg" width={42} src={typescriptImg} alt="" />
      <Image
        className="rounded-lg object-fill"
        width={42}
        src={nextImg}
        alt=""
      />
    </div>
  );
}
