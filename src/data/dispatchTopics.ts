// 출강 가능 분야·주제 (기획서 4.2). 실제 커리큘럼에 맞춰 교체 가능.
export type DispatchTopic = {
  title: string;
  desc: string;
  keywords: string[];
};

export const dispatchTopics: DispatchTopic[] = [
  {
    title: '생성형 AI 실무 활용',
    desc: 'ChatGPT·Claude 등 생성형 AI를 업무에 바로 적용하는 실습 중심 교육. 프롬프트 설계, 문서·기획·보고 자동화.',
    keywords: ['ChatGPT', 'Claude', '프롬프트', '업무 자동화'],
  },
  {
    title: '직무별 AI 적용',
    desc: '기획·마케팅·영업·HR·개발 등 직무 맥락에 맞춘 AI 활용법. 부서 단위 맞춤 커리큘럼 설계.',
    keywords: ['마케팅 AI', 'HR', '기획', '직무 맞춤'],
  },
  {
    title: '노코드·업무 자동화',
    desc: '코딩 없이 반복 업무를 자동화하는 노코드 도구와 AI 결합. 생산성 즉시 향상.',
    keywords: ['노코드', '자동화', '생산성'],
  },
  {
    title: 'AI 리터러시·윤리',
    desc: '전 임직원 대상 AI 기초 소양과 안전한 활용, 정보보안·저작권·윤리 가이드.',
    keywords: ['AI 리터러시', '보안', '윤리'],
  },
  {
    title: '생성형 AI 콘텐츠 제작',
    desc: '이미지·영상·카피 등 생성형 AI 기반 콘텐츠 제작 실무. 브랜드·홍보 활용.',
    keywords: ['이미지 생성', '영상', '콘텐츠'],
  },
  {
    title: '경영진·리더 대상 AI 전략',
    desc: '조직 도입 관점의 AI 전략, 도입 로드맵과 리스크 관리. 임원·리더 세션.',
    keywords: ['AI 전략', '리더십', '도입'],
  },
];

// 출강 대상
export const dispatchAudiences: { title: string; desc: string }[] = [
  { title: '기업 임직원', desc: '대기업·중견·스타트업 직무 교육 및 전사 AI 역량 강화' },
  { title: '공공기관·지자체', desc: '공무원·공공기관 종사자 대상 AI 활용 교육' },
  { title: '학교·대학', desc: '초·중·고 및 대학 특강, 교직원 연수' },
  { title: '평생교육기관', desc: '평생학습관·도서관·문화센터 시민 대상 강좌' },
];

// 진행 프로세스 (문의 → 매칭 → 제안 → 출강 → 피드백)
export const dispatchProcess: { step: string; title: string; desc: string }[] = [
  { step: '01', title: '문의', desc: '출강 문의 폼 접수 후 담당자가 즉시 연락드립니다.' },
  { step: '02', title: '요구 파악·강사 매칭', desc: '교육 목적·대상·환경을 파악해 최적의 강사를 매칭합니다.' },
  { step: '03', title: '커리큘럼 제안', desc: '기관 맞춤 커리큘럼과 일정·견적을 제안합니다.' },
  { step: '04', title: '출강', desc: '검증된 협회 강사가 현장(또는 온라인)에서 교육을 진행합니다.' },
  { step: '05', title: '피드백', desc: '만족도·성과를 점검하고 후속 교육을 제안합니다.' },
];
