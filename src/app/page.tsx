import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '@/components/home/HomeHero';
import NewsBoard from '@/components/home/NewsBoard';
import YouTubeThumb from '@/components/YouTubeThumb';
import { newsHref, formatDate } from '@/components/home/newsLink';
import { dispatchTopics } from '@/data/dispatchTopics';
import { instructors } from '@/data/instructors';
import { clientLogos, mouPartners } from '@/data/records';
import { news, type NewsItem } from '@/data/news';
import { site } from '@/data/site';

// 날짜 내림차순 (날짜 미상 항목은 게시판 맨 뒤)
const byDateDesc = (a: NewsItem, b: NewsItem) => {
  const ad = a.date ?? '0000-00-00';
  const bd = b.date ?? '0000-00-00';
  return ad < bd ? 1 : ad > bd ? -1 : 0;
};

const boardItems = news.filter((n) => n.category === '공지' || n.category === '출강소식').sort(byDateDesc);
// 교육 사례 — 실제 현장 사진 또는 영상이 있는 출강소식
const cases = news
  .filter((n) => n.category === '출강소식' && (n.cover || n.youtubeId))
  .sort(byDateDesc)
  .slice(0, 4);
const press = news.filter((n) => n.category === '언론보도').sort(byDateDesc);


export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* 2. 공지사항·출강소식 + 바로가기 */}
      <section className="pb-16 pt-14 sm:pb-20 sm:pt-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-12">
          <div>
            <SectionTitle eyebrow="NOTICE" title="협회 소식" />
            <div className="mt-6">
              <NewsBoard items={boardItems} />
            </div>
          </div>

          <aside aria-label="바로가기">
            <SectionTitle eyebrow="QUICK MENU" title="바로가기" />
            <ul className="mt-6 grid grid-cols-2 gap-3">
              <QuickLink href="/dispatch/#inquiry" title="출강 문의" desc="기관 맞춤 교육" primary />
              <QuickLink href="/training/" title="강사양성과정" desc="과정 안내·신청" />
              <QuickLink href="/about/" title="협회 소개" desc="인사말·연혁" />
              <QuickLink href="/contact/" title="일반 문의" desc="제휴·기타" />
            </ul>
            {site.phone && (
              <div className="mt-3 rounded-lg border border-navy-100 bg-navy-50 px-5 py-4">
                <div className="text-xs font-medium text-navy-500">대표전화</div>
                <a
                  href={`tel:${site.phone.replace(/-/g, '')}`}
                  className="mt-0.5 block text-xl font-bold tracking-tight text-navy-900"
                >
                  {site.phone}
                </a>
                {site.email && <div className="mt-1 text-sm text-navy-500">{site.email}</div>}
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* 3. 출강 프로그램 */}
      <section className="border-t border-navy-100 bg-navy-50/70 py-16 sm:py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              eyebrow="PROGRAMS"
              title="출강 프로그램"
              desc="기업·공공기관·학교·평생교육기관에 맞춰 커리큘럼을 설계합니다."
            />
            <MoreLink href="/dispatch/" label="출강 안내" />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dispatchTopics.map((t, i) => (
              <Link
                key={t.title}
                href="/dispatch/"
                className="group flex flex-col rounded-lg border border-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-accent-dark">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden className="text-navy-300 transition group-hover:translate-x-0.5 group-hover:text-accent-dark">
                    →
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-navy-950">{t.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{t.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {t.keywords.map((k) => (
                    <li key={k} className="rounded bg-navy-50 px-2 py-1 text-xs font-medium text-navy-600">
                      #{k}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 강사진 */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              eyebrow="INSTRUCTORS"
              title="협회 강사진"
              desc="현장에서 AI를 직접 쓰고 가르치는 강사들이 출강합니다."
            />
            <MoreLink href="/about/" label="강사진 자세히" />
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {instructors.map((ins, i) => (
              <li
                key={ins.name}
                className={`flex flex-col rounded-lg border bg-white p-5 ${i === 0 ? 'border-accent/40 shadow-card' : 'border-navy-100'} transition hover:border-accent/50 hover:shadow-card`}
              >
                <div className="flex items-center gap-3.5">
                  {ins.photo ? (
                    <Image
                      src={ins.photo}
                      alt={`${ins.name} ${ins.role}`}
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-accent/30"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy-50 text-xl font-bold text-navy-800 ring-2 ring-accent/30"
                    >
                      {ins.name.slice(0, 1)}
                    </span>
                  )}
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-navy-950">{ins.name}</h3>
                    <p className="text-[13px] font-medium leading-snug text-accent-dark">{ins.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex-1">
                  <p className="line-clamp-3 text-sm leading-relaxed text-navy-500">{ins.bio}</p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-navy-100 pt-4">
                  {ins.expertise.slice(0, i === 0 ? 6 : 3).map((e) => (
                    <li
                      key={e}
                      className={`rounded-full px-2.5 py-0.5 text-[11.5px] ${
                        i === 0 ? 'bg-accent/10 font-medium text-accent-dark' : 'bg-navy-50 text-navy-600'
                      }`}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. 교육 사례 + 언론보도 */}
      <section className="border-t border-navy-100 bg-navy-50/70 py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex items-end justify-between gap-4">
              <SectionTitle eyebrow="CASES" title="교육 사례" />
              <MoreLink href="/news/" label="전체 사례" />
            </div>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {cases.map((item) => {
                const { href } = newsHref(item);
                return (
                  <li key={item.id}>
                    <Link href={href} className="group block h-full overflow-hidden rounded-lg border border-navy-100 bg-white transition hover:border-accent/50 hover:shadow-card">
                      <div className="relative aspect-[16/10] overflow-hidden bg-navy-100">
                        {item.youtubeId ? (
                          <YouTubeThumb id={item.youtubeId} alt={item.title} />
                        ) : (
                          <Image
                            src={item.cover!}
                            alt={item.coverCaption ?? item.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 380px"
                            className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        )}
                        <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-navy-800">
                          {item.youtubeId ? '영상' : '현장'}
                        </span>
                      </div>
                      <div className="p-5">
                        <time className="text-xs tabular-nums text-navy-400">
                          {item.dateLabel ? item.dateLabel.replace(/-/g, '.') : formatDate(item)}
                        </time>
                        <h3 className="mt-1.5 line-clamp-2 text-[15px] font-semibold leading-snug text-navy-950 group-hover:text-accent-dark">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <SectionTitle eyebrow="PRESS" title="언론보도" />
              <MoreLink href="/news/" label="더보기" />
            </div>
            <ul className="mt-8 border-t-2 border-navy-900">
              {press.map((item) => {
                const { href, external } = newsHref(item);
                return (
                  <li key={item.id} className="border-b border-navy-200">
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group block py-5"
                    >
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold text-accent-dark">{item.source}</span>
                        <span className="text-navy-300">|</span>
                        <time className="tabular-nums text-navy-400">{formatDate(item)}</time>
                      </div>
                      <h3 className="mt-2 text-[15px] font-semibold leading-snug text-navy-900 group-hover:text-accent-dark group-hover:underline">
                        {item.title}
                        {external && <span className="ml-1 text-navy-400" aria-label="(새 창)">↗</span>}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-navy-500">{item.excerpt}</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. 협력기관 — 업무협약 기관 + 출강기관 */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionTitle
            eyebrow="PARTNERS"
            title="협력기관"
            desc="협회와 업무협약을 맺은 기관, 그리고 협회 강사진이 AI 교육·컨설팅을 진행한 기관입니다."
          />

          <h3 className="mt-10 text-sm font-bold text-navy-900">업무협약 기관</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {mouPartners.map((p) => (
              <li
                key={p.name}
                className="flex items-center gap-4 rounded-lg border border-accent/40 bg-accent/5 px-5 py-4"
              >
                <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-white">MOU</span>
                <div className="min-w-0">
                  <div className="text-[15px] font-bold text-navy-950">{p.name}</div>
                  <div className="mt-0.5 text-xs text-navy-500">
                    {p.desc} · {p.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-sm font-bold text-navy-900">
            출강기관 <span className="ml-1 font-medium text-navy-400">{clientLogos.length}곳 외 다수</span>
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {clientLogos.map((name) => (
              <li
                key={name}
                className="flex min-h-[64px] items-center justify-center rounded-md border border-navy-100 bg-white px-3 py-3 text-center text-[14px] font-semibold leading-snug text-navy-700 sm:text-[15px]"
              >
                {name}
              </li>
            ))}
            <li className="flex min-h-[64px] items-center justify-center rounded-md border border-dashed border-navy-200 bg-navy-50/60 px-3 py-3 text-center text-[14px] font-medium text-navy-500 sm:text-[15px]">
              외 다수 기관
            </li>
          </ul>
        </div>
      </section>

      {/* 7. 문의 안내 */}
      <section className="bg-navy-900">
        <div className="container-x grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-9 bg-accent-light" aria-hidden />
              <span className="text-xs font-semibold tracking-[0.14em] text-accent-light">CONTACT</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">교육 문의 안내</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-navy-200">
              교육 목적·대상·일정을 남겨 주시면 담당자가 확인 후 연락드립니다.
            </p>
            <div className="mt-6 flex flex-col gap-1.5 text-sm text-navy-200 sm:flex-row sm:gap-6">
              {site.phone && (
                <a href={`tel:${site.phone.replace(/-/g, '')}`} className="hover:text-white">
                  <span className="text-navy-400">전화</span> {site.phone}
                </a>
              )}
              {site.email && (
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  <span className="text-navy-400">이메일</span> {site.email}
                </a>
              )}
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-3 lg:w-[600px]">
            <ContactCard href="/dispatch/#inquiry" title="출강 문의" desc="기업·기관 교육 의뢰" primary />
            <ContactCard href="/training/#apply" title="과정 문의" desc="강사양성과정 신청" />
            <ContactCard href="/contact/" title="일반 문의" desc="제휴·기타 문의" />
          </ul>
        </div>
      </section>
    </>
  );
}

/* ───────── 작은 구성요소 ───────── */

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div>
      <span className="text-xs font-bold tracking-[0.16em] text-accent-dark">{eyebrow}</span>
      <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-navy-950 sm:text-[28px]">{title}</h2>
      {desc && <p className="mt-2 text-[15px] leading-relaxed text-navy-500">{desc}</p>}
    </div>
  );
}

function MoreLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="shrink-0 rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-600 transition hover:border-accent hover:text-accent-dark"
    >
      {label} +
    </Link>
  );
}

function QuickLink({
  href,
  title,
  desc,
  primary = false,
}: {
  href: string;
  title: string;
  desc: string;
  primary?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`flex h-full flex-col justify-between rounded-lg border p-4 transition ${
          primary
            ? 'border-navy-900 bg-navy-900 text-white hover:bg-navy-800'
            : 'border-navy-100 bg-white text-navy-900 hover:border-accent/60'
        }`}
      >
        <span className="text-[15px] font-bold">{title}</span>
        <span className={`mt-3 flex items-center justify-between text-xs ${primary ? 'text-navy-300' : 'text-navy-500'}`}>
          {desc}
          <span aria-hidden className={primary ? 'text-accent-light' : 'text-accent-dark'}>
            →
          </span>
        </span>
      </Link>
    </li>
  );
}

function ContactCard({
  href,
  title,
  desc,
  primary = false,
}: {
  href: string;
  title: string;
  desc: string;
  primary?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`flex h-full flex-col rounded-lg p-5 transition ${
          primary ? 'bg-accent text-accent-ink hover:bg-accent-light' : 'bg-white/[0.06] text-white ring-1 ring-white/15 hover:bg-white/10'
        }`}
      >
        <span className="text-base font-bold">{title}</span>
        <span className={`mt-1 text-sm ${primary ? 'text-accent-ink/80' : 'text-navy-300'}`}>{desc}</span>
        <span className="mt-4 text-sm font-semibold">바로가기 →</span>
      </Link>
    </li>
  );
}
