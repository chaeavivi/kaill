// 출강 실적 — B2B 신뢰 증명. 홈 신뢰 배너 + 출강 페이지 공용.
// ⚠️ 실제 실적으로 교체하세요 (현재 예시 플레이스홀더).

// 대표 출강 기관 (로고 대신 텍스트 칩으로 표기 → 실제 로고 이미지로 교체 가능)
export const clientLogos: string[] = [
  '삼성SDI',
  '네이버',
  '넥슨',
  '무신사',
  '제주항공',
  '공공기관',
  '대학·학교',
  '평생교육기관',
];

// 핵심 지표 (신뢰 배너 수치)
export const stats: { value: string; label: string }[] = [
  { value: '50+', label: '누적 출강 기관' },
  { value: '300+', label: '누적 교육 세션' },
  { value: '15,000+', label: '누적 교육 인원' },
  { value: '4.8/5', label: '평균 교육 만족도' },
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
