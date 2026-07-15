// 협회 기본 정보 단일 출처 (NAP 일관성: 이름·주소·연락처를 여기서만 관리)
export const site = {
  name: '한국AI평생교육협회',
  shortName: 'KAILL',
  tagline: '검증된 AI 교육 강사를 양성하고, 기업·기관에 연결하는 협회',
  description:
    '한국AI평생교육협회는 검증된 AI 교육 강사를 기업·공공기관·학교에 출강 연계하고, 강사양성과정을 통해 현장에 투입 가능한 강사를 배출합니다.',
  representative: '정경', // 협회장
  regNumber: '601-82-81762', // 고유번호
  // 연락처 — 현재 비공개(문의 폼 위주 운영). 필요 시 값을 채우면 자동 노출됩니다.
  phone: '' as string,
  email: '' as string,
  address: '' as string,
  // 사이트 배포 후 실제 도메인으로 교체 (JSON-LD·OG에 사용)
  url: 'https://www.kaill.or.kr',
  social: {
    instagram: '',
    blog: '',
    youtube: '',
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────
// 문의 폼 → Google Sheets 연동 엔드포인트
// Google Apps Script 웹앱 배포 후 받은 URL(https://script.google.com/macros/s/.../exec)을
// 아래에 붙여넣으면 세 폼(B2B·양성·일반)의 문의가 구글 시트에 자동 누적됩니다.
// 설정 방법: docs/문의폼-구글연동-설정.md 참고.
// 비워두면(''): 실제 전송 없이 성공 화면만 표시하는 데모 상태로 동작합니다.
// ─────────────────────────────────────────────────────────────────────────
export const INQUIRY_ENDPOINT = '';

// 발급물 성격 고지 문구 (소비자 오인 방지 — 푸터·강사양성 페이지 공용)
export const CERT_DISCLAIMER =
  '본 협회가 발급하는 수료증·강사증은 협회 자체 발급 증서이며, 국가자격 또는 자격기본법에 따라 등록된 민간자격이 아닙니다.';
