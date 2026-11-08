import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { news } from '@/data/news';

// 검색엔진(네이버 서치어드바이저·구글 서치콘솔)에 제출하는 사이트맵 → /sitemap.xml
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const pages = ['/', '/about/', '/dispatch/', '/training/', '/news/', '/contact/'].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: 'weekly' as const,
    priority: p === '/' ? 1 : 0.8,
  }));
  // 상세 페이지가 있는 소식 (본문 또는 영상)
  const articles = news
    .filter((n) => (n.body && n.body.length > 0) || n.youtubeId)
    .map((n) => ({
      url: `${base}/news/${n.id}/`,
      ...(n.date ? { lastModified: n.date } : {}),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  return [...pages, ...articles];
}
