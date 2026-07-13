// ─────────────────────────────────────────────────────────────────────────
// 문의 폼 전송 — 단일 연동 지점 (Single integration point)
//
// 현재는 백엔드가 없으므로 성공 UX를 보여주는 placeholder로 동작합니다.
// 실제 이메일 전송을 붙일 때는 아래 sendToBackend 한 곳만 교체하면 됩니다.
//
//  ▶ 예시 1) Formspree:
//      const res = await fetch('https://formspree.io/f/XXXXXXXX', {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//        body: JSON.stringify(payload),
//      });
//      if (!res.ok) throw new Error('전송 실패');
//
//  ▶ 예시 2) Netlify Forms: <form netlify> 속성 사용 + 이 함수 우회
//  ▶ 예시 3) 자체 이메일 API: fetch('/api/inquiry', ...)  (별도 서버 필요)
// ─────────────────────────────────────────────────────────────────────────

export type InquiryType = 'dispatch' | 'training' | 'general';

export type InquiryPayload = {
  type: InquiryType;
  fields: Record<string, string>;
};

// 실제 전송부 — 여기만 교체하면 실서비스 연동 완료.
async function sendToBackend(payload: InquiryPayload): Promise<void> {
  // TODO: 실제 연동 시 아래 placeholder를 fetch(...) 호출로 교체하세요.
  // 개발/데모 단계에서는 콘솔에 기록하고 지연을 흉내 냅니다.
  // eslint-disable-next-line no-console
  console.info('[문의 접수 - placeholder]', payload);
  await new Promise((resolve) => setTimeout(resolve, 700));
}

export async function submitInquiry(payload: InquiryPayload): Promise<void> {
  await sendToBackend(payload);
}
