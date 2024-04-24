import Image from "next/image";

export default function Home() {
  return (
    <main className="flex py-6">
      <div className="w-full h-[360px] bg-gray-500 flex justify-center items-center">
        <Image
          src="/"
          width={300}
          height={100}
          alt="main image"
          className="rounded-3xl"
        />
      </div>
    </main>
  );
}
