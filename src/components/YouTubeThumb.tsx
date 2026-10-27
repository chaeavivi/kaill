'use client';

import { useState } from 'react';

// 유튜브 썸네일 — 원본 비율(oar) → 기본(hq) → 브랜드 타일 순으로 폴백
const sources = (id: string) => [
  `https://i.ytimg.com/vi/${id}/oardefault.jpg`,
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
];

export default function YouTubeThumb({ id, alt }: { id: string; alt: string }) {
  const [step, setStep] = useState(0);
  const list = sources(id);

  if (step >= list.length) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-navy-900">
        <PlayBadge />
      </div>
    );
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={list[step]}
        alt={alt}
        loading="lazy"
        onError={() => setStep((s) => s + 1)}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-navy-950/15">
        <PlayBadge />
      </div>
    </>
  );
}

export function PlayBadge() {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 shadow-lg ring-1 ring-navy-900/10">
      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5 text-navy-900" aria-hidden>
        <path d="M8 5.5v13l11-6.5L8 5.5Z" />
      </svg>
    </span>
  );
}
