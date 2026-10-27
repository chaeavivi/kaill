import Image from 'next/image';
import Link from 'next/link';
import type { NewsItem } from '@/data/news';
import YouTubeThumb from '@/components/YouTubeThumb';

const categoryStyle: Record<string, string> = {
  공지: 'bg-navy-100 text-navy-700',
  언론보도: 'bg-amber-100 text-amber-800',
  출강소식: 'bg-accent/12 text-accent-dark',
  칼럼: 'bg-navy-50 text-navy-600',
};

export default function NewsCard({ item }: { item: NewsItem }) {
  const isVideo = !!item.youtubeId;
  // 영상 항목도 상세 페이지에서 재생되므로 내부 링크로 엽니다.
  const hasArticle = !!(item.body && item.body.length) || isVideo;
  // 본문 없이 원문 링크만 있는 항목(언론보도)은 기사 원문으로 바로 연결
  const external = !hasArticle && !!item.sourceUrl;

  const inner = (
    <article className="card group flex h-full flex-col hover:border-accent/40">
      {/* 대표 이미지 (없으면 플레이스홀더) */}
      <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-md bg-navy-50">
        {isVideo ? (
          <div className="relative h-full w-full">
            <YouTubeThumb id={item.youtubeId!} alt={item.title} />
          </div>
        ) : item.cover ? (
          <div className="relative h-full w-full">
            <Image
              src={item.cover}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className={item.coverContain ? 'object-contain p-3' : 'object-cover'}
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-navy-300">
            <span className="text-xs">이미지</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`rounded px-2 py-0.5 text-xs font-medium ${
            categoryStyle[item.category] ?? 'bg-navy-50 text-navy-600'
          }`}
        >
          {item.category}
        </span>
        {(item.dateLabel || item.date) && (
          <time className="text-xs text-navy-400">{item.dateLabel ?? item.date}</time>
        )}
        {item.source && (
          <span className="text-xs font-medium text-navy-400">· {item.source}</span>
        )}
      </div>
      <h3 className="mt-3 text-base font-semibold leading-snug text-navy-950 group-hover:text-accent-dark">
        {item.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy-500">{item.excerpt}</p>
      {hasArticle && (
        <span className="mt-4 text-sm font-medium text-accent-dark">
          {isVideo ? '영상 보기 →' : '자세히 보기 →'}
        </span>
      )}
      {external && (
        <span className="mt-4 text-sm font-medium text-accent-dark">원문 기사 보기 ↗</span>
      )}
    </article>
  );

  if (hasArticle) {
    return (
      <Link href={`/news/${item.id}/`} className="block h-full">
        {inner}
      </Link>
    );
  }

  if (external) {
    return (
      <a
        href={item.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`${item.title} — 원문 기사 보기 (새 창)`}
      >
        {inner}
      </a>
    );
  }

  return inner;
}
