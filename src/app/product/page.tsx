import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center pt-10">
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
      <div className="flex flex-col items-center mb-10">
        <h3 className="text-[22px] font__JalnanGothic">설비 제작 이력</h3>
        <div className="mt-4 mb-2 text-[20px]">❖ 국내</div>
        {/* DY AUTO */}
        <div>
          <div className="mb-2 text-[20px]">◆ DY AUTO</div>
          <div>
            <div>
              <div>► ARMATURE; LOTOR 생산라인</div>
              <div className="ml-3">• ATR #6, #7 LINE</div>
            </div>
            <div>
              <div>► POWER WINDOW MOTOR 생산라인</div>
              <div className="ml-3">
                • PWM #3, #6, #7, #8, #9, #10, #11, #12, #13, #14 LINE
              </div>
            </div>
            <div>
              <div>► FRONT WIPER MOTOR 생산라인</div>
              <div className="ml-3">• FWM #1, #2, #3 LINE</div>
            </div>
            <div>
              <div>► REAR WIPER MOTOR 생산라인</div>
              <div className="ml-3">• RWM #2, #3 LINE</div>
            </div>
            <div>
              <div>► COOLING FAN MOTOR 생산라인</div>
              <div className="ml-3">• CFM #1, #3, #5 LINE</div>
            </div>
            <div>
              <div>► BLDC COOLING FAN MOTOR 생산라인</div>
              <div className="ml-3">• BLDC #1, #2 LINE</div>
            </div>
            <div>
              <div>► 단독 설비</div>
              <div className="ml-3">• 스테이터-마그네트 본딩기</div>
              <div className="ml-3">• 샤프트 콕킹 & 스틸볼 삽입기</div>
              <div className="ml-3">• 수동 체결기</div>
              <div className="ml-3">
                • 정류자 & 링마그네트 수동 삽입 & 전장검사기
              </div>
              <div className="ml-3">
                • 아마추어 버핑, 브러쉬, 터닝기, 에이징 M/C
              </div>
              <div className="ml-3">
                • 와이퍼 모터 스테이터 콕킹 M/C, 핫멜트 콘베어 M/C
              </div>
              <div className="ml-3">• 다이아후램 3축 체결기, 본드 도포기</div>
              <div className="ml-3">• 델타 리어 와이퍼 수동 조립 라인</div>
            </div>
          </div>
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
