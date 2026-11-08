'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { NewsItem } from '@/data/news';
import { newsHref, formatDate } from '@/components/home/newsLink';

type Tab = '전체' | '공지' | '출강소식';
const TABS: { key: Tab; label: string }[] = [
  { key: '전체', label: '전체' },
  { key: '공지', label: '공지사항' },
  { key: '출강소식', label: '출강소식' },
];

const badge: Record<string, string> = {
  공지: 'border-navy-700 text-navy-800',
  출강소식: 'border-accent-dark text-accent-dark',
};

// 공지사항 + 출강소식 게시판 (기관형 목록). items는 날짜 내림차순으로 전달됨.
export default function NewsBoard({ items, limit = 6 }: { items: NewsItem[]; limit?: number }) {
  const [tab, setTab] = useState<Tab>('전체');
  const list = (tab === '전체' ? items : items.filter((n) => n.category === tab)).slice(0, limit);

  return (
    <div>
      <div className="flex items-end justify-between border-b-2 border-navy-900">
        <div role="tablist" aria-label="게시판 분류" className="-mb-0.5 flex">
          {TABS.map((t) => {
            const active = t.key === tab;
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.key)}
                className={`border-b-2 px-3 pb-3 text-[15px] font-semibold transition sm:px-4 sm:text-base ${
                  active
                    ? 'border-accent text-navy-950'
                    : 'border-transparent text-navy-400 hover:text-navy-800'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
        <Link
          href="/news/"
          className="mb-3 text-sm font-medium text-navy-500 hover:text-accent-dark"
          aria-label="소식 전체 보기"
        >
          더보기 +
        </Link>
      </div>

      <ul role="tabpanel">
        {list.map((item) => {
          const { href, external } = newsHref(item);
          const date = formatDate(item);
          const content = (
            <>
              <span
                className={`shrink-0 rounded border px-2 py-0.5 text-[11px] font-semibold ${
                  badge[item.category] ?? 'border-navy-300 text-navy-600'
                }`}
              >
                {item.category === '공지' ? '공지' : '출강'}
              </span>
              <span className="min-w-0 flex-1">
                <span className="line-clamp-2 text-[15px] text-navy-800 group-hover:text-accent-dark group-hover:underline sm:line-clamp-1">
                  {item.title}
                </span>
                {date && <time className="mt-1 block text-xs tabular-nums text-navy-400 sm:hidden">{date}</time>}
              </span>
              {date && <time className="hidden shrink-0 text-sm tabular-nums text-navy-400 sm:block">{date}</time>}
            </>
          );
          const cls = 'group flex items-start gap-3 sm:items-center border-b border-navy-100 py-4';
          return (
            <li key={item.id}>
              {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {content}
                </a>
              ) : (
                <Link href={href} className={cls}>
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
