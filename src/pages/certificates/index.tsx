import { Header } from "@/components/Header";
import { client } from "@/lib/sanity";
import { urlFor } from "@/utils/transform-cdn-url";
import { GetStaticProps } from "next";
import Image from "next/image";

interface CertificateProps {
  certificate: {
    _id: string;
    title: string;
    image: {
      caption: string;
      asset: {
        _ref: string;
      };
    };
  }[];
}

export default function Certificates({ certificate }: CertificateProps) {
  return (
    <div className="bg-[#09090A]">
      <Header showBackButton />
      <div className="h-screen max-w-[1216px] mx-auto mt-12 sm:p-4">
        <h1 className="text-zinc-100 text-4xl font-bold">Meus certificados</h1>
        <div className="mt-6 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3">
          {certificate.map((item) => {
            return (
              <div key={item._id} className="bg-zinc-900 rounded-lg">
                <Image
                  className="w-full object-center"
                  width={300}
                  height={100}
                  src={urlFor(item.image.asset._ref).url()}
                  alt=""
                />
                <h2 className="text-white font-semibold text-center p-2">
                  {item.title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const certificate = await client.fetch(
    `*[_type == "certificate"]{_id, title, image}`
  );

  return {
    props: {
      certificate,
    },
    revalidate: 60 * 60 * 24,
  };
};
