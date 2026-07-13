import type { NewsItem } from '@/data/news';

const categoryStyle: Record<string, string> = {
  공지: 'bg-navy-100 text-navy-700',
  출강소식: 'bg-accent/12 text-accent-dark',
  칼럼: 'bg-navy-50 text-navy-600',
};

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="card group flex h-full flex-col hover:border-accent/40">
      {/* 사진 자리 (실제 이미지로 교체) — 출강 기록 = 실적 증명 */}
      <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-md bg-navy-50">
        <div className="flex h-full w-full items-center justify-center text-navy-300">
          <span className="text-xs">이미지</span>
        </div>
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
    </article>
  );
}
