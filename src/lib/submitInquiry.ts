// ─────────────────────────────────────────────────────────────────────────
// 문의 폼 전송 — 단일 연동 지점 (Single integration point)
//
// Google Sheets(Apps Script 웹앱)로 문의를 누적합니다.
// 연동 URL은 src/data/site.ts 의 INQUIRY_ENDPOINT 한 곳에서 관리합니다.
//   - 값이 있으면: 해당 Apps Script 웹앱으로 전송 → 구글 시트에 자동 기록
//   - 값이 비어 있으면: 실제 전송 없이 성공 화면만 보여주는 데모 상태
//
// 설정 방법은 docs/문의폼-구글연동-설정.md 를 참고하세요.
// ─────────────────────────────────────────────────────────────────────────

import { INQUIRY_ENDPOINT } from '@/data/site';

export type InquiryType = 'dispatch' | 'training' | 'general';

const TYPE_LABEL: Record<InquiryType, string> = {
  dispatch: 'B2B 출강 문의',
  training: '강사양성과정 문의',
  general: '일반·제휴 문의',
};

export type InquiryPayload = {
  type: InquiryType;
  fields: Record<string, string>;
};

async function sendToBackend(payload: InquiryPayload): Promise<void> {
  // 엔드포인트 미설정 시: 데모 동작 (전송 없이 성공 UX)
  if (!INQUIRY_ENDPOINT) {
    // eslint-disable-next-line no-console
    console.info('[문의 접수 - 데모(엔드포인트 미설정)]', payload);
    await new Promise((resolve) => setTimeout(resolve, 700));
    return;
  }

  // Google Apps Script 웹앱으로 전송.
  // - text/plain 으로 보내 CORS 프리플라이트를 피함 (Apps Script는 e.postData.contents로 JSON 파싱)
  // - no-cors: 응답 본문은 읽지 않고, 네트워크 오류만 실패로 간주
  await fetch(INQUIRY_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      type: payload.type,
      typeLabel: TYPE_LABEL[payload.type],
      ...payload.fields,
    }),
  });
}

export async function submitInquiry(payload: InquiryPayload): Promise<void> {
  await sendToBackend(payload);
}
