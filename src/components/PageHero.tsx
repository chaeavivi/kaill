import Link from 'next/link';

// 내부 페이지 상단 — 흰 바탕 기관형 서브 헤더 (위치 안내 + 제목 + 설명)
export default function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <section className="border-b border-navy-100 bg-navy-50/70">
      <div className="container-x py-10 sm:py-14">
        <nav aria-label="현재 위치" className="text-xs text-navy-400">
          <Link href="/" className="hover:text-navy-700">
            홈
          </Link>
          <span className="mx-2" aria-hidden>
            ›
          </span>
          <span className="text-navy-600">{title}</span>
        </nav>
        <span className="mt-6 block text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">{eyebrow}</span>
        <h1 className="mt-1.5 text-[28px] font-bold tracking-tight text-navy-950 sm:text-4xl">{title}</h1>
        <span className="mt-4 block h-[3px] w-10 rounded bg-accent" aria-hidden />
        {desc && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-navy-500">{desc}</p>}
      </div>
    </section>
  );
}
