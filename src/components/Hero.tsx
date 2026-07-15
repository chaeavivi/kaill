import Link from 'next/link';
import { stats } from '@/data/records';

// 홈 히어로 — 딥네이비 도트그리드 + 에디토리얼 타이포 + 이중 CTA.
// 출강(수요)에 시각적 무게를 둔다.
export default function Hero() {
  return (
    <section className="bg-navy-800 text-white">
      {/* 도트그리드 히어로 본문 */}
      <div className="dotgrid">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="rule-accent mb-5" />
          <span className="text-sm tracking-wide text-accent-light">AI 교육, 검증된 강사에게</span>

          <h1 className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.3] tracking-tight sm:text-4xl lg:text-[44px]">
            AI 교육의 기준을
            <br />
            만드는 강사들
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-navy-300">
            협회가 양성하고 검증한 강사를 기업·기관에 연결합니다.{' '}
            <br className="hidden sm:block" />
            출강 문의부터 강사 매칭까지 한 곳에서.
          </p>

          {/* 이중 CTA — 주: 출강(수요) / 부: 강사양성(공급) */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/dispatch/#inquiry" className="btn-primary">
              출강 문의 →
            </Link>
            <Link
              href="/training/"
              className="border-b border-navy-400 pb-0.5 text-[15px] font-medium text-navy-100 transition hover:border-accent hover:text-white"
            >
              강사양성과정 →
            </Link>
          </div>
        </div>
      </div>

      {/* 실적 스트립 — 핵심 지표 한 줄 요약 */}
      <div className="border-t border-hairline bg-navy-950">
        <div className="container-x py-5">
          <div className="grid grid-cols-3 divide-x divide-hairline">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} className="px-2 text-center">
                <div className="text-lg font-semibold text-accent-light sm:text-xl">{s.value}</div>
                <div className="mt-0.5 text-[11px] text-navy-400 sm:text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
