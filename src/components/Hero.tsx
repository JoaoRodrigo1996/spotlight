import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <div className="mt-2 ">
      <div className="">
        <Image
          className="w-16 h-16 rounded-full"
          width={62}
          height={62}
          src="https://github.com/JoaoRodrigo1996.png"
          alt="Foto de perfil de Rodrigo Mesquita"
        />
        <div className="mt-6">
          <h1 className=" md:text-5xl sm:text-4xl text-zinc-100 font-bold leading-relaxed">
            Desenvolvedor de software <br />
            fullstack.
          </h1>
          <p className="text-zinc-400 sm:text-base md:text-lg mt-4 leading-loose">
            Olá! eu sou Rodrigo Mesquita, sou desenvolvedor de software
            fullstack junior de Barra Mansa - RJ. <br /> Hoje venho me
            especializando no ecossistema Javascript, em tecnologias como <br />
            Reactjs, Nodejs, React Native, Nextjs, styled components, tailwind
            css e entre outras.
          </p>
          <div className="flex items-center gap-8 mt-8">
            <Link href="https://github.com/JoaoRodrigo1996">
              <FaGithub
                size={22}
                className="text-zinc-400 hover:text-white transition-colors"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/rodrigo-mesquita-1b9279205/">
              <FaLinkedin
                size={22}
                className="text-zinc-400 hover:text-white transition-colors"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
