import Image from "next/image";
import ignews from "../../assets/ignews.png";

interface ProductImageProps {
  src?: string;
}

export function ProductImage({ src }: ProductImageProps) {
  return (
    <Image
      className="object-contain rounded-3xl"
      src={ignews}
      alt="imagem da aplicação DashGo"
    />
  );
}
