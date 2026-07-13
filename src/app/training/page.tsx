import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Disclaimer from '@/components/Disclaimer';
import TrainingForm from '@/components/forms/TrainingForm';
import JsonLd from '@/components/JsonLd';
import { trainingOverview, curriculum, careerPaths, admission } from '@/data/training';
import { site } from '@/data/site';
import { faqs } from '@/data/faq';

export const metadata: Metadata = {
  title: 'AI 강사양성과정',
  description:
    '출강으로 이어지는 AI 강사양성과정. 생성형 AI 이해부터 강의 설계·데모 강의까지, 수료 후 협회 출강 풀 연계 기회를 제공합니다.',
};

// Course 구조화 데이터
const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'AI 강사양성과정',
  description:
    '생성형 AI 이해부터 강의 설계·데모 강의까지, 출강으로 이어지는 실무형 AI 강사 양성 과정.',
  provider: {
    '@type': 'Organization',
    name: site.name,
    sameAs: site.url,
  },
};

// FAQPage 구조화 데이터
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function TrainingPage() {
  return (
    <>
      <JsonLd data={courseJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Training"
        title="AI 강사양성과정"
        desc="배우고 끝이 아닙니다. 수료 후 협회 출강 풀로 이어지는, 일자리 연계형 과정입니다."
      />

      {/* 과정 소개 */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Overview" title="과정 소개" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { label: '교육 대상', value: trainingOverview.target },
              { label: '기간·방식', value: trainingOverview.duration },
              { label: '진행 방식', value: trainingOverview.method },
            ].map((item) => (
              <div key={item.label} className="card h-full">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                  {item.label}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 커리큘럼 */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Curriculum" title="회차별 커리큘럼" />
          <div className="mt-10 overflow-hidden rounded-lg border border-navy-100 bg-white">
            {curriculum.map((c, i) => (
              <div
                key={c.week}
                className={`flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:gap-6 ${
                  i !== curriculum.length - 1 ? 'border-b border-navy-100' : ''
                }`}
              >
                <div className="w-20 shrink-0 text-sm font-semibold text-accent-dark">{c.week}</div>
                <div>
                  <div className="text-base font-semibold text-navy-950">{c.title}</div>
                  <div className="mt-1 text-sm text-navy-500">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 수료 후 진로 — 출강 연계 훅 */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Career"
              title="수료 후 진로"
              desc="협회의 가장 큰 차별점 — 배움이 실제 출강 기회로 이어집니다."
            />
            <ul className="mt-6 space-y-3">
              {careerPaths.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-navy-700">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* 수료증·강사증 안내 + 민간자격 아님 고지 */}
          <div>
            <SectionHeading eyebrow="Certificate" title="수료증 · 강사증 안내" />
            <p className="mt-6 text-sm leading-relaxed text-navy-600">
              과정을 이수하고 평가를 통과하면 협회가 발급하는 <strong className="text-navy-900">수료증</strong>과,
              출강 역량을 인증하는 <strong className="text-navy-900">강사증</strong>을 받게 됩니다.
            </p>
            <Disclaimer className="mt-4" />
          </div>
        </div>
      </section>

      {/* 모집 정보 */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Admission" title="모집 일정 · 비용" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: '모집 기수', value: admission.cohort },
              { label: '일정', value: admission.schedule },
              { label: '장소', value: admission.place },
              { label: '수강료', value: admission.tuition },
            ].map((item) => (
              <div key={item.label} className="card h-full">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                  {item.label}
                </div>
                <p className="mt-2 text-sm text-navy-700">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 신청 폼 */}
      <section id="apply" className="scroll-mt-20 bg-navy-800 py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="text-white">
            <div className="rule-accent mb-4" />
            <span className="eyebrow text-accent-light">Apply</span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">과정 문의 · 신청</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy-300">
              간단히 신청 정보를 남겨주시면 담당자가 모집 일정·비용 등 세부 사항을 안내드립니다.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 sm:p-8">
            <TrainingForm />
          </div>
        </div>
      </section>
    </>
  );
}
