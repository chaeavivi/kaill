import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

// 검색엔진 수집 허용 + 사이트맵 위치 안내 → /robots.txt
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
