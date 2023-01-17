import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-[#000] w-full h-screen">
      <div className="bg-zinc-900 h-full max-w-6xl mx-auto border border-y-0 border-x-zinc-700">
        <Header />
      </div>
    </div>
  );
}
