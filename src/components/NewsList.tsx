'use client';

import { useState } from 'react';
import NewsCard from '@/components/NewsCard';
import { news, newsCategories, type NewsCategory } from '@/data/news';

type Filter = '전체' | NewsCategory;
// 항목이 하나도 없는 카테고리는 탭을 숨깁니다.
const filters: Filter[] = [
  '전체',
  ...newsCategories.filter((c) => news.some((n) => n.category === c)),
];

export default function NewsList() {
  const [active, setActive] = useState<Filter>('전체');
  const items = active === '전체' ? news : news.filter((n) => n.category === active);

  return (
    <div>
      {/* 카테고리 탭 */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              active === f
                ? 'border-accent bg-accent/10 text-accent-dark'
                : 'border-navy-200 text-navy-500 hover:border-navy-300 hover:text-navy-800'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
