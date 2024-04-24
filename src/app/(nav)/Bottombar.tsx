import React from "react";

const Bottombar = () => {
  return (
    <div className="w-full min-h-[60px] py-2 border-t border-gray-400 flex flex-col justify-center px-3 text-[14px]">
      <div className="flex flex-col">
        <div className="flex">
          <div className="border-r border-gray-400 pr-2 mr-2">
            오시는길 : 경기도 안산시 단원구 능안로 81 안산디지털파크 1097호
            영신이앤지(주)
          </div>
          <div>사업자등록번호 : 206-86-44838</div>
        </div>
        <div className="flex">
          <div className="border-r border-gray-400 pr-2 mr-2">
            대표 : 송귀섭
          </div>
          <div className="border-r border-gray-400 pr-2 mr-2">
            ☎ 연락처 : 031-495-1606
          </div>
          <div>✉️ E-mail : </div>
        </div>
      </div>
      <div>ⓒ 2024. 영신ENG Inc. All rights reserved.</div>
    </div>
  );
};

export default Bottombar;
