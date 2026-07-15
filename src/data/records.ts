// 출강 실적 — B2B 신뢰 증명. 홈 신뢰 배너 + 출강 페이지 공용.
// ⚠️ 실제 실적으로 교체하세요 (현재 예시 플레이스홀더).

// 협회 대표 강사진이 출강한 기업·기관 (실제 이력 기반)
export const clientLogos: string[] = [
  '삼성SDI',
  '네이버파이낸셜',
  '넥슨코리아',
  '무신사',
  '제주항공',
  '한화생명',
  '한국표준협회',
  '한국폴리텍대학',
  '건강보험심사평가원',
];

// 핵심 지표 (신뢰 배너 수치) — 협회 대표 강사진 실적 기준
export const stats: { value: string; label: string }[] = [
  { value: '400+', label: 'AI 강의 수강생' },
  { value: '200+', label: 'AI 컨설팅 건수' },
  { value: '6개사', label: 'AI 마케팅 운영 중' },
  { value: '290만+', label: '블로그 누적 방문' },
];

// 출강 후기
export type Testimonial = {
  quote: string;
  author: string; // 담당자/소속 (공개 가능 범위)
};

export const testimonials: Testimonial[] = [
  {
    quote:
      '실무에 바로 쓸 수 있는 내용 위주라 만족도가 높았습니다. 강사 섭외부터 커리큘럼까지 협회가 일임해줘 편했어요.',
    author: '대기업 A사 인재개발팀',
  },
  {
    quote:
      '직원 수준을 고려한 맞춤 커리큘럼과 검증된 강사 덕분에 재교육 문의가 많았습니다.',
    author: '공공기관 B 교육담당',
  },
  {
    quote:
      '생성형 AI를 처음 접하는 임직원도 쉽게 따라올 수 있게 진행해 주셨습니다.',
    author: '중견기업 C사 경영지원실',
  },
];
