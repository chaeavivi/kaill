import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import TopicCard from '@/components/TopicCard';
import ProcessSteps from '@/components/ProcessSteps';
import InstructorCard from '@/components/InstructorCard';
import InquiryForm from '@/components/forms/InquiryForm';
import { dispatchTopics, dispatchAudiences } from '@/data/dispatchTopics';
import { instructors } from '@/data/instructors';
import { testimonials } from '@/data/records';

export const metadata: Metadata = {
  title: '강사 출강·파견 (기업 AI 교육)',
  description:
    '검증된 협회 강사를 기업·공공기관·학교에 출강·파견합니다. 생성형 AI 실무, 직무별 AI 활용, 노코드 자동화 등 맞춤 교육을 원스톱으로 제공합니다.',
};

export default function DispatchPage() {
  return (
    <>
      <PageHero
        eyebrow="Dispatch · B2B"
        title="강사 출강 · 파견"
        desc="강사 섭외 부담 없이 협회에 일임하세요. 검증된 강사를 매칭해 기관 맞춤 AI 교육을 진행합니다."
      />

      {/* 출강 분야·주제 */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Topics"
            title="출강 분야 · 주제"
            desc="단순 툴 교육이 아닌, 현장에 적용 가능한 실무 역량을 다룹니다."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dispatchTopics.map((t) => (
              <TopicCard key={t.title} topic={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 출강 대상 */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Audience" title="출강 대상" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dispatchAudiences.map((a) => (
              <div key={a.title} className="card h-full">
                <h3 className="text-base font-semibold text-navy-950">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 프로세스 */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Process"
            title="진행 프로세스"
            desc="문의부터 피드백까지, 협회가 전 과정을 함께합니다."
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* 강사진 소개 */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Instructors"
            title="강사진 소개"
            desc="대기업·공공기관 출강 이력을 갖춘 검증된 강사진."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {instructors.map((ins) => (
              <InstructorCard key={ins.name} instructor={ins} />
            ))}
          </div>
        </div>
      </section>

      {/* 출강 실적·후기 */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Reviews" title="출강 후기" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="card h-full">
                <div className="text-3xl leading-none text-accent">“</div>
                <blockquote className="mt-2 text-sm leading-relaxed text-navy-700">{t.quote}</blockquote>
                <figcaption className="mt-4 text-xs font-medium text-navy-400">— {t.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 출강 문의 폼 (최우선 전환) */}
      <section id="inquiry" className="scroll-mt-20 bg-navy-800 py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="text-white">
            <div className="rule-accent mb-4" />
            <span className="eyebrow text-accent-light">Inquiry</span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">출강 문의하기</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy-300">
              간단한 정보만 남겨주시면 담당자가 영업일 기준 1~2일 내 연락드립니다.
              교육 목적·대상만 알려주셔도 최적의 강사를 매칭해 제안드립니다.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-navy-200">
              <li>· 강사 섭외·매칭을 협회가 일임</li>
              <li>· 기관 맞춤 커리큘럼 제안</li>
              <li>· 온·오프라인 모두 진행 가능</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white p-6 sm:p-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
