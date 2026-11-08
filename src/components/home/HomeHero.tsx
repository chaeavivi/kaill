import Image from 'next/image';
import Link from 'next/link';
import { stats } from '@/data/records';

// 첫 화면 — 실제 강의 현장 사진 배경 + 협회 핵심 문구 + 실적 지표 카드
export default function HomeHero() {
  return (
    <section className="relative">
      <div className="relative isolate overflow-hidden bg-navy-900">
        <Image
          src="/news/nonghyup-polytech.jpg"
          alt="한국폴리텍대학 원주캠퍼스 농협 임직원 AI 직무교육 현장"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        {/* 사진 위 남색 그라데이션 — 문구 가독성 확보 */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/90 via-navy-900/75 to-navy-900/30"
        />

        <div className="container-x pb-28 pt-16 sm:pb-32 sm:pt-20 lg:pb-40 lg:pt-28">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-9 bg-accent-light" aria-hidden />
            <span className="text-sm font-medium tracking-wide text-accent-light">AI 교육, 검증된 강사에게</span>
          </div>

          <h1 className="mt-4 max-w-2xl text-[32px] font-bold leading-[1.28] tracking-tight text-white sm:text-[42px] lg:text-[52px]">
            AI 교육의 기준을
            <br />
            만드는 강사들
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-navy-100 sm:text-base">
            한국AI평생교육협회는 협회가 양성하고 검증한 강사를 기업·공공기관·학교에 연결합니다.
            출강 문의부터 강사 매칭까지 한 곳에서.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dispatch/#inquiry" className="btn-primary">
              출강 문의하기 →
            </Link>
            <Link
              href="/about/"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              협회 소개
            </Link>
          </div>

          <p className="mt-10 text-xs text-navy-300">
            사진 · 한국폴리텍대학 원주캠퍼스 농협 임직원 AI 직무교육 (2026. 11.)
          </p>
        </div>
      </div>

      {/* 실적 지표 — 사진 하단에 걸쳐 놓인 흰 카드 */}
      <div className="container-x relative -mt-14 sm:-mt-16">
        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse px-4 py-5 text-center sm:py-6 ${i % 2 === 1 ? 'border-l border-navy-100' : ''} ${
                i >= 2 ? 'border-t border-navy-100 lg:border-t-0' : ''
              } ${i === 2 ? 'lg:border-l' : ''}`}
            >
              <dt className="mt-1 block text-xs text-navy-500 sm:text-sm">{s.label}</dt>
              <dd className="text-2xl font-bold text-navy-900 sm:text-[28px]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-2 text-right text-[11px] text-navy-400">협회 대표 강사진 실적 기준</p>
      </div>
    </section>
  );
}
