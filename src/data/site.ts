// 협회 기본 정보 단일 출처 (NAP 일관성: 이름·주소·연락처를 여기서만 관리)
// ⚠️ 아래 값들은 실제 정보로 교체하세요 (플레이스홀더).
export const site = {
  name: '한국AI평생교육협회',
  shortName: 'KAILL',
  tagline: '검증된 AI 교육 강사를 양성하고, 기업·기관에 연결하는 협회',
  description:
    '한국AI평생교육협회는 검증된 AI 교육 강사를 기업·공공기관·학교에 출강·파견하고, 강사양성과정을 통해 현장에 투입 가능한 강사를 배출합니다.',
  // NAP (Name / Address / Phone) — SEO·지역검색 신뢰 신호
  representative: '홍길동', // TODO: 실제 대표자명
  phone: '02-0000-0000', // TODO: 실제 대표 전화
  email: 'contact@kaill.or.kr', // TODO: 실제 대표 이메일
  address: '서울특별시 ○○구 ○○로 000, 0층', // TODO: 실제 주소
  // 사이트 배포 후 실제 도메인으로 교체 (JSON-LD·OG에 사용)
  url: 'https://www.kaill.or.kr',
  social: {
    instagram: '', // TODO
    blog: '', // TODO
    youtube: '', // TODO
  },
} as const;

// 발급물 성격 고지 문구 (소비자 오인 방지 — 푸터·강사양성 페이지 공용)
export const CERT_DISCLAIMER =
  '본 협회가 발급하는 수료증·강사증은 협회 자체 발급 증서이며, 국가자격 또는 자격기본법에 따라 등록된 민간자격이 아닙니다.';
