import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { faqGroups, faqs } from '@/data/faq';

export const metadata: Metadata = {
  title: '자주 묻는 질문',
  description:
    'AI 강사 섭외 방법, 출강 지역·대상·주제, 비용, 온라인 교육, AI 강사양성과정과 수료증, 협회 업무협약까지 자주 묻는 질문을 정리했습니다.',
  alternates: { canonical: '/faq/' },
};

// FAQPage 구조화 데이터 — 화면에 보이는 질문·답과 동일
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHero
        eyebrow="FAQ"
        title="자주 묻는 질문"
        desc="출강 문의, 강사양성과정, 협회에 대해 자주 받는 질문을 모았습니다."
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          {/* 분류 바로가기 */}
          <nav aria-label="질문 분류" className="lg:sticky lg:top-32 lg:self-start">
            <ul className="flex flex-wrap gap-2 lg:flex-col">
              {faqGroups.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="inline-flex rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition hover:border-accent hover:text-accent-dark lg:w-full lg:rounded-md"
                  >
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-14">
            {faqGroups.map((g) => (
              <div key={g.id} id={g.id} className="scroll-mt-32">
                <h2 className="text-xl font-bold text-navy-950 sm:text-2xl">{g.title}</h2>
                <div className="mt-5 border-t-2 border-navy-900">
                  {g.items.map((f) => (
                    <details key={f.q} className="group border-b border-navy-100">
                      <summary className="flex cursor-pointer list-none items-start gap-3 py-5 [&::-webkit-details-marker]:hidden">
                        <span className="mt-0.5 shrink-0 text-base font-bold text-accent-dark">Q</span>
                        <span className="flex-1 text-[15px] font-semibold leading-snug text-navy-900 sm:text-base">
                          {f.q}
                        </span>
                        <span
                          aria-hidden
                          className="mt-0.5 shrink-0 text-navy-400 transition group-open:rotate-45"
                        >
                          ＋
                        </span>
                      </summary>
                      <div className="flex gap-3 pb-6 pr-6">
                        <span className="shrink-0 text-base font-bold text-navy-300">A</span>
                        <p className="text-[15px] leading-relaxed text-navy-600">{f.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-navy-100 bg-navy-50/70 px-6 py-7 sm:flex sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-navy-950">찾는 답이 없으신가요?</h2>
                <p className="mt-1 text-sm text-navy-500">문의를 남겨 주시면 담당자가 연락드립니다.</p>
              </div>
              <Link href="/contact/" className="btn-primary mt-4 sm:mt-0">
                문의하기 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
