import Link from 'next/link';
import { clientLogos } from '@/data/records';

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

      {/* 실적 스트립 — 경력 지표 + 대표 기관 */}
      <div className="border-t border-hairline bg-navy-950">
        <div className="container-x flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-8">
            <div>
              <div className="text-xl font-semibold text-accent-light">400+</div>
              <div className="mt-0.5 text-xs text-navy-400">AI 강의 수강생</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-accent-light">6개사</div>
              <div className="mt-0.5 text-xs text-navy-400">AI 마케팅 운영 중</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {clientLogos.slice(0, 5).map((name) => (
              <span key={name} className="text-sm font-medium text-navy-200">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
