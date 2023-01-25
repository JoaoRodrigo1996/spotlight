import { Description } from "./Description";
import { ProductImage } from "./Image";

export function Projects() {
  return (
    <>
      <div className="w-full mt-16 grid grid-cols-3 place-items-center grid-flow-col gap-4 px-8">
        <ProductImage />
      </div>
      <div className="flex max-w-5xl mx-auto items-center justify-between ">
        <Description
          date="23 de janeiro"
          title="Ignews"
          description="Nesse projeto foi desenvolvido com o objetivo de colocar em prática o
          aprendizado na construção de um design system, foi utilizado nesse
          projeto tecnologias como storybook, react, typescript, nodejs. também
          foram aplicados conceitos de monorepo e turbo repo"
        />
      </div>
    </>
  );
}
