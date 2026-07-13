// 대표·핵심 강사진 — 초기 신뢰의 핵심 근거(닭-달걀 문제 해결).
// ⚠️ 실명·경력·출강 이력은 실제 정보로 교체하세요 (현재 예시 플레이스홀더).
export type Instructor = {
  name: string;
  role: string; // 직책/구분 (대표, 수석강사 등)
  expertise: string[]; // 전문 분야
  bio: string; // 한 줄 소개
  records: string[]; // 대표 출강 이력 (기관명)
  // 프로필 이미지 경로 (public/) — 없으면 이니셜 아바타로 대체
  photo?: string;
};

export const instructors: Instructor[] = [
  {
    name: '홍길동',
    role: '협회장 · 수석강사',
    expertise: ['생성형 AI', 'AI 교육 설계', '기업 강의'],
    bio: '대기업·공공기관 다수 출강. AI 평생교육 커리큘럼을 설계·총괄합니다.',
    records: ['삼성SDI', '네이버', '넥슨'],
  },
  {
    name: '김서연',
    role: '수석강사',
    expertise: ['직무별 AI 활용', '마케팅 AI', '콘텐츠 제작'],
    bio: '마케팅·콘텐츠 실무 관점의 생성형 AI 교육을 진행합니다.',
    records: ['무신사', '제주항공'],
  },
  {
    name: '이도현',
    role: '전임강사',
    expertise: ['노코드·자동화', 'AI 리터러시', '공공교육'],
    bio: '노코드·업무 자동화와 전 임직원 대상 AI 리터러시 교육 전문.',
    records: ['공공기관 다수', '대학 특강'],
  },
];
