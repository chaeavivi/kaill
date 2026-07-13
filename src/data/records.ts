// 출강 실적 — B2B 신뢰 증명. 홈 신뢰 배너 + 출강 페이지 공용.
// ⚠️ 실제 실적으로 교체하세요 (현재 예시 플레이스홀더).

// 출강 대상 유형 (실제 확정된 실적만 특정 기관명으로 교체하세요.
// 검증되지 않은 대기업명을 실적으로 표기하면 허위·과장 광고 위험이 있으므로 유형으로만 표기)
export const clientLogos: string[] = [
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
