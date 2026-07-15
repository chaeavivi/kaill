// 대표 강사진 — 협회의 신뢰 근거. 실제 프로필 기반.
export type Instructor = {
  name: string;
  role: string; // 직책/구분
  expertise: string[]; // 전문 분야
  bio: string; // 한 줄 소개
  records: string[]; // 대표 출강/실적
  // 프로필 이미지 경로 (public/) — 없으면 이니셜 아바타로 대체
  photo?: string;
};

export const instructors: Instructor[] = [
  {
    name: '정경',
    role: '협회장 · AI 마케팅 실전 운영자',
    expertise: ['AI 마케팅', 'AI 직무 활용', 'AI 콘텐츠 제작', 'AI 창업·소상공인'],
    bio: '이론만 가르치는 강사가 아니라 6개 기업의 AI 마케팅을 매일 직접 운영하는 실전 운영자. 강의에서 다루는 모든 프롬프트·자동화는 현장에서 실제로 돌아가는 것들입니다. 바스제로 컨설팅 대표 · 한국복지사이버대학교 특임교수 · 한국폴리텍대학 AI 강사.',
    records: ['한화생명 AI 직무교육', '한국폴리텍대학 AI 강사', '강남 AI 활용교육 1·2·3기 운영'],
  },
  {
    name: '정민경',
    role: '부회장 · 1세대 생성형 AI 교육 강사',
    expertise: ['생성형 AI 활용', '강사 브랜딩·마케팅', '컬러·심리 웰니스'],
    bio: 'ChatGPT 3.5 출시(2022년)부터 활용해 온 1세대 AI 교육 강사. 생성형 AI 활용부터 강사 브랜딩·콘텐츠 마케팅까지 폭넓게 다룹니다. AI 활용교육전문가 1·2급 · Google Certified Educator Level 1. 원주채아힐링센터 대표.',
    records: ['생성형 AI 챗봇 자동화 워크샵 1·2기', '캔바 PPT AI 활용 강의', '소상공인 AI·스레드 활용 특강'],
  },
];
