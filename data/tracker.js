// 사이트가 읽는 데이터. Claude에게 말로 시키면 갱신한다 ("~ 끝났어" → done, "회의 기록해줘" → meetings).
// done: 끝낸 항목 id (id는 milestones.js 참고). autoDays 항목은 30 Days 업로드 수로 자동 판정.
// meetings[].public:false 이면 사이트에는 제목·날짜만 보인다(저장소가 공개이므로).
window.TRACKER = {
  updated: "2026-09-20",
  source: "seed",
  done: ["m1-plan"],
  meetings: [
    { id:"mt-0920", date:"2026-09-20", kind:"기획 회의", title:"컨셉·스토리 확정", public:true,
      summary:"주제 「치유」, 출발점 「빗소리」. 괴로운 기억 → 낯선 이의 우산 → 좋은 기억 → 비가 그침 구조로 확정.",
      decisions:[
        "제목: 비가 그치기 전까지 (Until the Rain Stops)",
        "웅덩이·쇼윈도 반사면이 처음엔 괴로운 기억, 우산을 받은 뒤엔 같은 자리가 좋은 기억",
        "주인공은 뒷모습·손·실루엣만",
        "12컷 × 약 5초, 텍스트 기반/이미지 기반 혼합",
        "홈페이지는 제출물 체크리스트 + 회의록 중심으로 간단하게"],
      actions:["9/21 발표 준비(웹사이트 공개, Claude 세팅 화면)", "힉스필드로 클립 생성 시작"] }
  ],
  // 생성 기록(선택): { shot:3, version:"v1", result:"failed", observed:"...", cause:"...", fix:"...", date:"2026-09-23" }  result: adopted | failed | pending
  shotlog: [],
  // 30 Days: { day:1, date:"2026-09-28", title:"빗소리 스케치", note:"창문 앞 5초", url:"days/day01.mp4" }
  days: []
};
