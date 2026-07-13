import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import InstructorCard from '@/components/InstructorCard';
import { greeting, mission, history } from '@/data/about';
import { instructors } from '@/data/instructors';

export const metadata: Metadata = {
  title: '협회 소개',
  description:
    '한국AI평생교육협회의 설립 취지와 미션·비전, 대표 강사진, 연혁을 소개합니다. 검증된 AI 교육 강사를 양성하고 기업·기관에 연결합니다.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="협회 소개"
        desc="검증된 AI 교육 강사를 양성하고, 기업·기관에 연결하는 협회입니다."
      />

      {/* 인사말·설립 취지 */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Greeting" title="인사말 · 설립 취지" />
          <div className="mt-6 max-w-3xl space-y-4">
            {greeting.split('\n').map((line, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-navy-600">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 미션·비전 */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Mission" title="미션 · 비전" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mission.map((m, i) => (
              <div key={m.title} className="card h-full">
                <div className="text-sm font-semibold text-accent-dark">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-navy-950">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 조직·임원 (대표 강사진) = 세일즈 신뢰 근거 */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="People"
            title="조직 · 대표 강사진"
            desc="대기업·공공기관 출강 이력을 갖춘 검증된 강사진이 협회를 이끕니다."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {instructors.map((ins) => (
              <InstructorCard key={ins.name} instructor={ins} />
            ))}
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="History" title="연혁" />
          <div className="mt-10 space-y-8 border-l border-navy-200 pl-6">
            {history.map((h) => (
              <div key={h.year} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <div className="text-lg font-semibold text-navy-950">{h.year}</div>
                <ul className="mt-2 space-y-1 text-sm text-navy-600">
                  {h.events.map((e) => (
                    <li key={e}>· {e}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
