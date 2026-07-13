// 강사양성과정 (기획서 4.3). 실제 커리큘럼·일정·비용으로 교체.
export const trainingOverview = {
  target: 'AI 강의에 도전하려는 예비 강사, 강의 역량을 확장하려는 현직 강사·전문가',
  duration: '총 8주 (주 1회, 회당 3시간) · 온·오프라인 병행',
  method: '이론 + 실습 + 시연·피드백 + 데모 강의',
};

// 회차별 커리큘럼
export const curriculum: { week: string; title: string; desc: string }[] = [
  { week: '1주차', title: 'AI 교육 시장과 강사의 역할', desc: '시장 이해, 수요처, 강사에게 필요한 역량' },
  { week: '2주차', title: '생성형 AI 핵심 이해', desc: '주요 도구와 원리, 최신 트렌드' },
  { week: '3주차', title: '프롬프트 설계 실습', desc: '업무 맥락별 프롬프트 패턴과 실습' },
  { week: '4주차', title: '직무별 AI 활용 커리큘럼 설계', desc: '대상별 맞춤 교육안 설계법' },
  { week: '5주차', title: '노코드·자동화 실습', desc: '코딩 없이 업무 자동화 시연' },
  { week: '6주차', title: '강의 설계와 교안 제작', desc: '강의 구조화, 슬라이드·실습자료 제작' },
  { week: '7주차', title: '강의 스킬·전달력', desc: '현장 전달력, 질의응답, 시연 노하우' },
  { week: '8주차', title: '데모 강의 & 피드백', desc: '모의 강의 시연과 개별 피드백, 수료 평가' },
];

// 수료 후 진로 (출강 연계 = 핵심 훅)
export const careerPaths: string[] = [
  '우수 수료자 협회 출강 강사 풀 편입 기회',
  '협회를 통한 기업·기관 출강 매칭 우선 안내',
  '협회 활동·네트워크를 통한 강의 기회 연결',
  '지속적인 강사 역량 강화 프로그램 참여',
];

// 모집 정보
export const admission = {
  cohort: '2026년 하반기 (○기)',
  schedule: '2026년 9월 개강 (모집 마감 8월 말)',
  tuition: '문의 시 개별 안내', // 결제 시스템 제외 → 문의 후 안내
  place: '서울 협회 교육장 및 온라인',
};
