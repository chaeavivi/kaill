import { clientLogos, stats } from '@/data/records';

// 신뢰 배너 — "이미 검증된 협회". 대표 출강 실적 로고·수치.
export default function TrustBanner() {
  return (
    <section className="bg-navy-950 py-14 text-white">
      <div className="container-x">
        <p className="text-center text-sm font-medium text-navy-300">
          이미 다양한 기업·기관이 협회 강사와 함께했습니다
        </p>

        {/* 기관 칩 (실제 로고 이미지로 교체 가능) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {clientLogos.map((name) => (
            <span
              key={name}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-navy-100"
            >
              {name}
            </span>
          ))}
        </div>

        {/* 핵심 지표 */}
        <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-accent sm:text-4xl">{s.value}</span>
                <span className="mt-1 block text-sm text-navy-300">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
