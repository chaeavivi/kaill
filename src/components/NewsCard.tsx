import Image from 'next/image';
import Link from 'next/link';
import type { NewsItem } from '@/data/news';

const categoryStyle: Record<string, string> = {
  공지: 'bg-navy-100 text-navy-700',
  출강소식: 'bg-accent/12 text-accent-dark',
  칼럼: 'bg-navy-50 text-navy-600',
};

export default function NewsCard({ item }: { item: NewsItem }) {
  const hasArticle = !!(item.body && item.body.length);

  const inner = (
    <article className="card group flex h-full flex-col hover:border-accent/40">
      {/* 대표 이미지 (없으면 플레이스홀더) */}
      <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-md bg-navy-50">
        {item.cover ? (
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
        <time className="text-xs text-navy-400">{item.date}</time>
      </div>
      <h3 className="mt-3 text-base font-semibold leading-snug text-navy-950 group-hover:text-accent-dark">
        {item.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy-500">{item.excerpt}</p>
      {hasArticle && (
        <span className="mt-4 text-sm font-medium text-accent-dark">자세히 보기 →</span>
      )}
    </article>
  );

  return hasArticle ? (
    <Link href={`/news/${item.id}/`} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}
