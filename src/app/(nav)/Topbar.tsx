import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="flex-col">
      <div className="w-full h-[50px]">
        {/* 빈공간 추후에 들어갈 로그인관련 공간 확보 */}
      </div>
      <div className="flex">
        <div className="bg-slate-300 w-[200px]">YSENG Logo</div>
        <div className="bg-slate-400 flex-1">
          <ul className="flex justify-evenly">
            <li>
              <Link href={`#`}>회사소개</Link>
            </li>
            <li>
              <Link href={`#`}>라인소개</Link>
            </li>
            <li>
              <Link href={`#`}>게시판</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
