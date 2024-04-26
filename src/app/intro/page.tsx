import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center w-full h-full pt-10">
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-[22px] font__JalnanGothic">회사소개</h3>
        <div>
          영신이앤지(주)는 신뢰를 바탕으로 고객 만족에 최선을 다하는 자동화
          기계제작 회사입니다.
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-[22px] font__JalnanGothic">대표님 인사말</h3>
        <div>
          안녕하십니까 저희 영신이앤지(주) 홈페이지를 방문해주셔서 감사드립니다.
        </div>
      </div>
      <div className="flex flex-col items-center mb-10 min-w-[360px]">
        <h3 className="text-[22px] font__JalnanGothic">연혁</h3>
        <div className="flex flex-col w-full">
          <div className="flex">
            <span>1995년 -&nbsp;</span>
            <div className="flex flex-col">
              <span>영신이앤지로 회사명 개명</span>
              <span>자동차 조립 라인, 도어 힌지 자동 조립 라인 제작</span>
              <span>기타 자동화 기계 개발 제작</span>
            </div>
          </div>
          <div>
            <span>2000년 -&nbsp;</span>
            <span>기계 개발팀 보강(7명) 신기술 개발에 주력</span>
          </div>
          <div>
            <span>2010년 -&nbsp;</span>
            <span>영신이앤지(주) 법인으로 재설립 (직원 18명)</span>
          </div>
          <div>
            <span>2012년 -&nbsp;</span>
            <span>경기도 안산시로 사옥 이전 (현재)</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-[22px] font__JalnanGothic">조직도</h3>
        <div>그림으로 대체 예정</div>
        <div>
          FA사업팀(7명), FA전장/제어팀(3명), 기술영업팀(1명), 구매팀(1명),
          총무팀(1명), 생산팀(3명)
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-[22px] font__JalnanGothic">사업분야</h3>
        <div>그림으로 대체 예정</div>
        <div>
          <div>1. 제품 이송, 컨베어 파트</div>
          <div>2. 압입(프레스) 콕킹 파트</div>
          <div>3. 부품 조립, 체결, 용액 도포 파트</div>
          <div>4. 부품 선별, 공급 파트</div>
          <div>5. 각종 특성 검사 파트</div>
          <div>고객 맞춤형 자동화 설비 제작 - 단독 장비 & 라인설비</div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-[22px] font__JalnanGothic">주요고객사</h3>
        <div>고객사 이미지 대체 예정</div>
        <div className="mt-4 mb-2">국내 고객사</div>
        <div>
          <div>삼화정밀</div>
          <div>ITOPS Automotive</div>
          <div>세우정밀</div>
          <div>DN</div>
          <div>삼성전기</div>
          <div>LS Automotive</div>
          <div>BorgWarner</div>
          <div>주성ENG</div>
          <div>경원정공</div>
          <div>DY AUTO</div>
          <div>LG이노텍</div>
        </div>
        <div className="mt-4 mb-2">해외 고객사</div>
        <div>
          <div>DY AUTO 중국 연태 공장</div>
          <div>DY AUTO 인도 Delhi 공장</div>
          <div>DY AUTO 멕시코 Apodaca 공장</div>
        </div>
      </div>
    </div>
  );
};

export default page;
