// 출강 후기 — 저장(작성 페이지) · 불러오기(후기 목록) 단일 연동 지점
import { REVIEW_ENDPOINT } from '@/data/site';

export type Review = { rating: number; text: string; date: string };
export type ReviewFeed = { count: number; average: number; reviews: Review[] };

export const reviewsEnabled = Boolean(REVIEW_ENDPOINT);

/** 후기 저장. published=false면 자동검사에서 걸러진 것 (응답을 읽지 못하면 null) */
export async function submitReview(input: {
  rating: number;
  text: string;
  website?: string; // 스팸봇 함정 칸
}): Promise<{ published: boolean | null }> {
  if (!REVIEW_ENDPOINT) throw new Error('후기 연동이 아직 설정되지 않았습니다.');
  // text/plain → CORS 사전요청 없이 전송 (Apps Script는 e.postData.contents로 읽음)
  try {
    const res = await fetch(REVIEW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(input),
    });
    const data = await res.json();
    if (data && data.ok === false) throw new Error(data.error || '저장 실패');
    return { published: typeof data?.published === 'boolean' ? data.published : null };
  } catch (err) {
    // 응답을 읽을 수 없는 환경 대비: 전송만 보장
    if (err instanceof TypeError) {
      await fetch(REVIEW_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(input),
      });
      return { published: null };
    }
    throw err;
  }
}

/** 공개 후기 목록 */
export async function fetchReviews(): Promise<ReviewFeed | null> {
  if (!REVIEW_ENDPOINT) return null;
  const res = await fetch(REVIEW_ENDPOINT, { cache: 'no-store' });
  if (!res.ok) return null;
  const data = (await res.json()) as ReviewFeed;
  return Array.isArray(data?.reviews) ? data : null;
}
