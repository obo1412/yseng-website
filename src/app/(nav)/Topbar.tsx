import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="flex-col border-b border-gray-400">
      <div className="w-full h-[60px]">
        {/* 빈공간 추후에 들어갈 로그인관련 공간 확보 */}
      </div>
      <div className="flex items-center h-[40px]">
        <div className="w-[200px]">
          <Link href={`/`}>YSENG Logo</Link>
        </div>
        <div className="flex-1">
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
                className="border-l border-r border-gray-400 px-6 py-1 hover:bg-gray-300"
              >
                제작사례
              </Link>
            </li>
            <li>
              <Link
                href={`/board`}
                className="border-l border-r border-gray-400 px-6 py-1 hover:bg-gray-300"
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
