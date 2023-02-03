import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <div className="mt-12">
      <div className="">
        <Image
          className="w-16 h-16 rounded-full"
          width={62}
          height={62}
          src="https://github.com/JoaoRodrigo1996.png"
          alt="Foto de perfil de Rodrigo Mesquita"
        />
        <div className="mt-6">
          <h1 className=" md:text-5xl sm:text-4xl text-zinc-100 font-bold leading-normal">
            Desenvolvedor de software <br />
            fullstack
          </h1>
          <p className="text-zinc-400 sm:text-base mt-4 leading-loose">
            Eu sou Rodrigo, desenvolvedor de software fullstack de Barra Mansa -
            RJ. <br /> Hoje venho me especializando no ecossistema Javascript, e
            em tecnologias
            <br /> como Reactjs Nodejs, React Native, Nextjs, styled components
            e tailwind css.
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
