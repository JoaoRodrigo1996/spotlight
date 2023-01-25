import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <div className="mt-12">
      <div className="max-w-5xl mx-auto">
        <img
          className="w-16 h-16 rounded-full"
          src="https://github.com/JoaoRodrigo1996.png"
          alt="Foto de perfil de Rodrigo Mesquita"
        />
        <div className="mt-6">
          <h1 className="text-5xl text-zinc-100 font-bold leading-normal">
            Desenvolvedor de software <br />
            fullstack
          </h1>
          <p className="text-zinc-400 mt-4 leading-loose">
            Eu sou Rodrigo, desenvolvedor de software fullstack de Barra Mansa -
            RJ. <br /> Hoje venho me especializando no ecossistema Javascript, e
            em tecnologias
            <br /> como Reactjs Nodejs, React Native, Nextjs, styled components
            e tailwind css.
          </p>
          <div className="flex items-center gap-8 mt-8">
            <Icon
              href="https://linkedin.com"
              children={
                <FaGithub
                  size={22}
                  className="text-zinc-400 hover:text-white transition-colors"
                />
              }
            />
            <Icon
              href="https://linkedin.com"
              children={
                <FaLinkedin
                  size={22}
                  className="text-zinc-400 hover:text-white transition-colors"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
