import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="flex-col border-b border-gray-400 font__JalnanGothic text-[20px]">
      <div className="w-full h-[60px]">
        {/* 빈공간 추후에 들어갈 로그인관련 공간 확보 */}
      </div>
      <div className="flex items-center h-[40px] px-4">
        <div className="w-[140px] sm:w-[200px] text-[24px]">
          <Link href="/" className="hover:translate-x-1">
            YSENG
          </Link>
        </div>
        <div className="flex-1">{/* 가운데 공간 확보용 */}</div>
        <div className="flex">
          <ul className="flex justify-evenly">
            <li>
              <Link
                href={`/intro`}
                className="border-l border-r border-gray-400 px-6 py-1 hover:bg-gray-300"
              >
                회사소개
              </Link>
            </li>
            <li>
              <Link
                href={`/product`}
                className="border-r border-gray-400 px-6 py-1 hover:bg-gray-300"
              >
                제작사례
              </Link>
            </li>
            <li>
              <Link
                href={`/board`}
                className="border-r border-gray-400 px-6 py-1 hover:bg-gray-300"
              >
                고객지원
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
