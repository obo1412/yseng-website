import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col py-4 px-4">
      <div className="flex justify-center items-center mb-4">
        <Image
          src="/imgs/yseng-main1.jpeg"
          width={0}
          height={0}
          sizes="100vw"
          alt="main1-image"
          className="rounded-2xl w-full h-auto"
        />
      </div>
      <div className="">
        <div>신뢰의 기업 영신.</div>
        <div>영신이앤지는 고객만족을 위해 최선을 다하고 있습니다.</div>
      </div>
      <div></div>
    </main>
  );
}
