import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col py-6">
      <div className="h-[200px] sm:h-[360px] flex justify-center items-center px-4 mb-4">
        <div className="w-full h-full relative">
          <Image
            src="/imgs/yseng-main1.jpeg"
            fill
            alt="main1-image"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div>신뢰의 기업 영신</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi, illum
        obcaecati sed omnis beatae quisquam possimus deserunt eum impedit,
        dolorem unde deleniti eos? Maxime corporis doloribus minima. Ullam,
        voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        nisi, illum obcaecati sed omnis beatae quisquam possimus deserunt eum
        impedit, dolorem unde deleniti eos? Maxime corporis doloribus minima.
        Ullam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nam nisi, illum obcaecati sed omnis beatae quisquam possimus
        deserunt eum impedit, dolorem unde deleniti eos? Maxime corporis
        doloribus minima. Ullam, voluptatum. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nam nisi, illum obcaecati sed omnis beatae
        quisquam possimus deserunt eum impedit, dolorem unde deleniti eos?
        Maxime corporis doloribus minima. Ullam, voluptatum. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nam nisi, illum obcaecati sed
        omnis beatae quisquam possimus deserunt eum impedit, dolorem unde
        deleniti eos? Maxime corporis doloribus minima. Ullam, voluptatum. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Nam nisi, illum
        obcaecati sed omnis beatae quisquam possimus deserunt eum impedit,
        dolorem unde deleniti eos? Maxime corporis doloribus minima. Ullam,
        voluptatum.
      </div>
    </main>
  );
}
