import Link from 'next/link';
import Hero from '@/components/Hero';
import TrustBanner from '@/components/TrustBanner';
import SectionHeading from '@/components/SectionHeading';
import NewsCard from '@/components/NewsCard';
import CtaBanner from '@/components/CtaBanner';
import { dispatchTopics, dispatchProcess } from '@/data/dispatchTopics';
import { news } from '@/data/news';

// 홈 화면에서 강조할 출강 분야 4종 (에디토리얼 넘버링 그리드)
const homeTopics = dispatchTopics.slice(0, 4);
const homeProcess = dispatchProcess.slice(0, 4);
const latestNews = news.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 신뢰 배너 — 이미 검증된 협회 */}
      <TrustBanner />

      {/* 출강 분야 — 에디토리얼 넘버링 그리드 */}
      <section className="section">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <SectionHeading eyebrow="Dispatch" title="출강 분야" desc="현장에 바로 적용되는 실무 중심 교육을 제공합니다." />
            <Link href="/dispatch/" className="hidden text-sm font-medium text-navy-500 hover:text-accent-dark sm:block">
              전체 보기 →
            </Link>
          </div>

          <div className="mt-10 grid border-t border-navy-100 sm:grid-cols-2">
            {homeTopics.map((t, i) => (
              <div
                key={t.title}
                className={`border-b border-navy-100 py-6 sm:py-8 ${
                  i % 2 === 0 ? 'sm:border-r sm:pr-8' : 'sm:pl-8'
                }`}
              >
                <div className="text-sm font-semibold text-accent-dark">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-navy-950">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 프로세스 — 미니멀 스트립 */}
      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <h2 className="text-base font-semibold text-navy-950">출강 진행 프로세스</h2>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {homeProcess.map((s, i) => (
              <div key={s.step} className="flex items-center gap-4 sm:flex-1 sm:flex-col sm:gap-2 sm:text-center">
                <div className="text-lg font-semibold text-accent-dark">{s.step}</div>
                <div className="text-sm text-navy-700">{s.title}</div>
                {i < homeProcess.length - 1 && (
                  <span aria-hidden className="ml-auto hidden text-navy-300 sm:hidden">
                    ›
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/dispatch/#inquiry" className="btn-primary">
              출강·파견 문의하기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 강사양성과정 하이라이트 — 출강으로 이어지는 과정 */}
      <section className="bg-navy-800">
        <div className="container-x flex flex-col items-start gap-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="rule-accent mb-4" />
            <h2 className="text-xl font-semibold text-white sm:text-2xl">AI 강사로 활동하고 싶으신가요?</h2>
            <p className="mt-2 text-sm text-navy-300">
              강사양성과정 수료 후 협회 출강 풀 연계 — 배움이 실제 일자리로 이어집니다.
            </p>
          </div>
          <Link href="/training/" className="btn-outline-light">
            과정 알아보기 →
          </Link>
        </div>
      </section>

      {/* 최신 소식 3건 — 활성도 증명 */}
      <section className="section">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <SectionHeading eyebrow="News" title="협회 활동·출강 소식" />
            <Link href="/news/" className="hidden text-sm font-medium text-navy-500 hover:text-accent-dark sm:block">
              전체 보기 →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 하단 CTA — 출강 강조 */}
      <CtaBanner
        title="AI 교육 강사가 필요하신가요?"
        desc="검증된 협회 강사를 기업·기관에 출강·파견해 드립니다."
        ctaLabel="출강·파견 문의하기"
        ctaHref="/dispatch/#inquiry"
      />
    </>
  );
}
