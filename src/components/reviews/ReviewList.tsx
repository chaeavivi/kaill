'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Stars from '@/components/reviews/Stars';
import { fetchReviews, reviewsEnabled, type ReviewFeed } from '@/lib/reviews';

const PAGE = 6;

// '출강 후기' — 수강생이 직접 남긴 후기를 불러와 표시. 후기가 없으면 영역 자체를 숨김.
export default function ReviewList() {
  const [feed, setFeed] = useState<ReviewFeed | null>(null);
  const [shown, setShown] = useState(PAGE);

  useEffect(() => {
    if (!reviewsEnabled) return;
    fetchReviews()
      .then(setFeed)
      .catch(() => setFeed(null));
  }, []);

  if (!feed || feed.count === 0) return null;

  return (
    <section id="reviews" className="section scroll-mt-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">Reviews</span>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-navy-950 sm:text-[28px]">출강 후기</h2>
            <p className="mt-2 text-[15px] text-navy-500">강의 현장에서 수강생이 직접 남긴 후기입니다.</p>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-navy-100 bg-white px-5 py-3">
            <span className="text-3xl font-bold text-navy-950">{feed.average.toFixed(1)}</span>
            <div>
              <Stars value={feed.average} />
              <div className="mt-0.5 text-xs text-navy-500">후기 {feed.count}개</div>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {feed.reviews.slice(0, shown).map((r, i) => (
            <li key={i} className="flex flex-col rounded-lg border border-navy-100 bg-white p-6">
              <div className="flex items-center justify-between">
                <Stars value={r.rating} />
                <time className="text-xs tabular-nums text-navy-400">{r.date}</time>
              </div>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-navy-700">{r.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          {shown < feed.reviews.length ? (
            <button type="button" onClick={() => setShown((n) => n + PAGE)} className="btn-secondary">
              후기 더 보기
            </button>
          ) : (
            <span />
          )}
          <p className="text-xs text-navy-400">
            욕설·광고·연락처가 포함된 글은 자동으로 제외됩니다.{' '}
            <Link href="/review/" className="underline hover:text-accent-dark">
              후기 남기기
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
