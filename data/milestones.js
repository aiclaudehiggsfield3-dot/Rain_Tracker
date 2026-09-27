// 강의계획서(2026 AI 기반 영상 제작 워크샵)의 주차별 체크포인트와 중간 과제 제출물.
// 완료 여부는 data/tracker.js 의 done 배열(id 목록)에 적는다. autoDays 가 있으면 30 Days 업로드 수로 자동 판정.
window.MILESTONES = [
  { id:"M1", title:"mini project 발표 (4주차)", due:"2026-09-21",
    note:"수업 체크포인트: mini project 발표 + 생성 클립 5개 + 실패·수정 비교 1쌍 + 30 Days 1일차",
    tasks:[
      {id:"m1-plan", title:"1분 시나리오·스토리보드·샷 리스트·프롬프트 템플릿"},
      {id:"m1-web", title:"개인 웹사이트 공개 (GitHub Pages URL)"},
      {id:"m1-claude", title:"Claude 세팅 화면: CLAUDE.md / 명령어 / 서브에이전트 / MCP / 스킬"},
      {id:"m1-clips", title:"Higgsfield 생성 클립 5개 (수업 실습에서 만들어도 됨)"},
      {id:"m1-failfix", title:"실패·수정 비교 1쌍"},
      {id:"m1-day1", title:"30 Days 1일차 업로드", autoDays:1} ] },
  { id:"M2", title:"중간 사전 발표 (5주차)", due:"2026-09-28",
    note:"발표 자료는 전날(9/27) 저녁 6시까지 구글 드라이브에 업로드",
    tasks:[
      {id:"m2-upload", title:"발표 자료 구글 드라이브 업로드 (9/27 18:00까지)"},
      {id:"m2-check", title:"로그라인·세계관·콘티·샷 리스트 점검"},
      {id:"m2-share", title:"생성 결과 공유 + 상호 크리틱"},
      {id:"m2-change", title:"\"바꿀 것 3개, 버릴 것 1개\" 정리"} ] },
  { id:"M3", title:"MadMapper 온라인 (6주차)", due:"2026-10-05",
    note:"체크포인트: 강의 시청 확인 + 30 Days 누적 15일 이상",
    tasks:[
      {id:"m3-lecture", title:"MadMapper 녹화 강의 시청 확인"},
      {id:"m3-days15", title:"30 Days 누적 15일 이상", autoDays:15} ] },
  { id:"M4", title:"Higgsfield 기본 + 면담 (7주차)", due:"2026-10-12",
    note:"체크포인트: 자동화 워크플로우 1개 시연 + 면담 기록",
    tasks:[
      {id:"m4-auto", title:"자동화 워크플로우 1개 시연 (예: /shot-prompt → 힉스필드 입력 → 결과 정리)"},
      {id:"m4-interview", title:"면담 기록: 남은 과제 / 리스크 / 보완 방향"} ] },
  { id:"M5", title:"중간 발표 · 중간고사 (8주차)", due:"2026-10-19",
    note:"제출물 4개 + 최소 기준. 발표 10분 권장(로그라인 1분 · Claude 기획 3분 · Higgsfield 3분 · 시연 2분 · 실패·수정 1분)",
    tasks:[
      {id:"m5-video", title:"제출 ① 1분 내외 AI 영상 (편집 완료본)"},
      {id:"m5-prompts", title:"제출 ② 프롬프트 기록: 최종 프롬프트 + 수정 이력(실패 → 원인 → 수정)"},
      {id:"m5-web", title:"제출 ③ 개인 웹사이트 URL (프롬프트·로그라인·세계관 + 30 Days 포함)"},
      {id:"m5-pdf", title:"제출 ④ 1p 기획서 PDF (로그라인 1문장, 세계관 키워드 5개, 샷 리스트, 제작 파이프라인 구조도)"},
      {id:"m5-map", title:"최소 기준: 콘티·샷 리스트가 실제 생성 결과와 대응"},
      {id:"m5-t2vi2v", title:"최소 기준: 텍스트 기반·이미지 기반 각 1회 이상 + 차이 설명"},
      {id:"m5-cam", title:"최소 기준: 카메라 움직임 3종 이상 (dolly / pan / tilt / tracking / orbit)"},
      {id:"m5-days", title:"최소 기준: 30 Days(9/28~10/25) 누적 업로드", autoDays:28},
      {id:"m5-talk", title:"발표 준비 (10분 구성)"} ] }
];
