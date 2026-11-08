import type { NewsItem } from '@/data/news';

// 소식 항목의 이동 경로 — 본문·영상이 있으면 상세, 언론보도는 원문, 그 외는 소식 목록
export function newsHref(item: NewsItem): { href: string; external: boolean } {
  if ((item.body && item.body.length > 0) || item.youtubeId) {
    return { href: `/news/${item.id}/`, external: false };
  }
  if (item.sourceUrl) return { href: item.sourceUrl, external: true };
  return { href: '/news/', external: false };
}

// 화면 표기용 날짜 (2026-11-03 → 2026.11.03)
export function formatDate(item: NewsItem): string {
  const d = item.date;
  return d ? d.replace(/-/g, '.') : '';
}
