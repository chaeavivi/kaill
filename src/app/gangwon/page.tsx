import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import NewsCard from '@/components/NewsCard';
import CtaBanner from '@/components/CtaBanner';
import { news } from '@/data/news';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: '원주·강원 AI 교육 출강 | 원주 AI 강사 섭외',
  description:
    '원주에 본부를 둔 한국AI평생교육협회가 원주·춘천·평창 등 강원 지역 공공기관·기업·복지기관·소상공인에게 생성형 AI 실무교육과 AI 강사를 연결합니다. 강원권 출강 사례를 확인하세요.',
  alternates: { canonical: '/gangwon/' },
};

// 강원 지역 출강·협약 소식 (제목·부제·요약에 강원 지역명이 들어간 항목)
const gangwonRe = /원주|춘천|평창|강릉|횡성|홍천|영월|정선|삼척|속초|태백|강원/;
const byDateDesc = (a: { date?: string }, b: { date?: string }) =>
  (b.date ?? '0000-00-00').localeCompare(a.date ?? '0000-00-00');
const gangwonNews = news
  .filter((n) => !n.hidden && (n.category === '출강소식' || n.category === '언론보도'))
  .filter((n) => gangwonRe.test(`${n.title} ${n.deck ?? ''} ${n.excerpt}`))
  .sort(byDateDesc);

const points = [
  {
    title: '원주 본부, 강원 어디든 출강',
    desc: '협회 본부가 원주에 있어 원주·춘천·평창 등 강원 지역 기관에 일정 조율과 현장 방문이 빠릅니다.',
  },
  {
    title: '기관 업무에 맞춘 실습형 교육',
    desc: '공공기관·복지기관·노인일자리 수행기관·기업 등 수강 기관의 실제 업무 장면을 기준으로 생성형 AI 실습을 구성합니다.',
  },
  {
    title: '지역 대학과 함께하는 AI 인재양성',
    desc: '한국폴리텍대학 원주캠퍼스와 업무협약(2026. 9. 14.)을 맺고 지역 맞춤형 AI 교육을 함께 운영합니다.',
  },
];

export default function GangwonPage() {
  return (
    <>
      <PageHero
        eyebrow="Gangwon"
        title="원주·강원 AI 교육"
        desc="한국AI평생교육협회는 강원 원주에 본부를 두고 전국에 출강합니다. 강원 지역 기관의 AI 교육과 AI 강사 섭외를 가까이에서 돕습니다."
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Why" title="강원 지역 AI 교육, 협회에 맡기면" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {points.map((p) => (
              <div key={p.title} className="card h-full">
                <h3 className="text-base font-semibold text-navy-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-navy-500">
            본부 주소 · {site.address} · 교육 문의 {site.phone}
          </p>
        </div>
      </section>

      {gangwonNews.length > 0 && (
        <section className="bg-navy-50 py-16 sm:py-20">
          <div className="container-x">
            <SectionHeading
              eyebrow="Cases"
              title="강원 지역 출강·협력 사례"
              desc="원주·춘천·평창 등 강원 지역에서 진행한 협회 출강 소식입니다."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gangwonNews.map((n) => (
                <NewsCard key={n.id} item={n} />
              ))}
            </div>
            <p className="mt-8 text-sm text-navy-500">
              다른 지역 출강 사례는{' '}
              <Link href="/news/" className="font-semibold text-accent-dark hover:underline">
                소식·활동
              </Link>
              에서 볼 수 있습니다.
            </p>
          </div>
        </section>
      )}

      <CtaBanner
        title="원주·강원 지역 AI 교육, 강사 섭외 문의"
        desc="교육 목적과 대상만 알려 주시면 맞는 강사와 커리큘럼을 제안드립니다."
        ctaLabel="출강 문의하기"
        ctaHref="/dispatch/#inquiry"
      />
    </>
  );
}
