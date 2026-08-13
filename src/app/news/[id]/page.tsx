import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { news, type NewsBlock } from '@/data/news';

// 본문(body)이 있는 항목만 상세 페이지로 생성
const articles = news.filter((n) => n.body && n.body.length > 0);

export function generateStaticParams() {
  return articles.map((n) => ({ id: n.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const item = news.find((n) => n.id === params.id);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

const badgeStyle: Record<string, string> = {
  공지: 'bg-navy-100 text-navy-700',
  출강소식: 'bg-accent/12 text-accent-dark',
  칼럼: 'bg-navy-50 text-navy-600 ring-1 ring-inset ring-navy-200',
};

function Block({ block }: { block: NewsBlock }) {
  switch (block.type) {
    case 'lead':
      return <p className="mb-6 text-lg font-medium leading-relaxed text-navy-900">{block.text}</p>;
    case 'heading':
      return (
        <h2 className="mb-3 mt-10 border-l-[3px] border-accent pl-3.5 text-xl font-bold leading-snug text-navy-950">
          {block.text}
        </h2>
      );
    case 'quote':
      return (
        <blockquote className="my-7 border-l-[3px] border-accent pl-5 text-lg font-semibold leading-relaxed text-navy-900">
          {block.text}
        </blockquote>
      );
    case 'cta':
      return (
        <div className="mt-9 rounded-xl border border-accent/50 bg-accent/[0.08] p-5 text-[15px] leading-relaxed text-navy-800">
          {block.text}
        </div>
      );
    default:
      return <p className="mb-5 leading-[1.9] text-navy-700">{block.text}</p>;
  }
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const item = news.find((n) => n.id === params.id);
  if (!item || !item.body) notFound();

  const dateFmt = item.date.replace(/-/g, '. ') + '.';

  return (
    <article className="section">
      <div className="mx-auto max-w-2xl px-5">
        <Link href="/news/" className="text-sm text-navy-500 transition hover:text-accent-dark">
          ← 소식·활동
        </Link>

        <div className="mt-5 flex items-center gap-2">
          <span className={`rounded px-2 py-0.5 text-xs font-medium ${badgeStyle[item.category]}`}>
            {item.category}
          </span>
          <time className="text-xs text-navy-400">{dateFmt}</time>
        </div>

        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy-950 [text-wrap:balance] sm:text-[40px]">
          {item.title}
        </h1>
        {item.deck && <p className="mt-2 text-base font-semibold text-navy-600">{item.deck}</p>}
        {item.author && (
          <p className="mt-4 border-b-2 border-navy-200 pb-6 text-sm text-navy-500">{item.author}</p>
        )}

        {item.cover && (
          <figure className="mt-8">
            {item.coverContain ? (
              <div className="flex justify-center rounded-xl bg-navy-50 p-6">
                <Image
                  src={item.cover}
                  alt={item.title}
                  width={329}
                  height={466}
                  className="h-auto max-h-[440px] w-auto rounded-md shadow-md"
                />
              </div>
            ) : (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-navy-50">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
              </div>
            )}
            {item.coverCaption && (
              <figcaption className="mt-2 text-center text-xs text-navy-400">{item.coverCaption}</figcaption>
            )}
          </figure>
        )}

        <div className="mt-8 text-[17px]">
          {item.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* 저자 · 협회 소개 */}
        <div className="mt-12 rounded-xl border border-navy-200 bg-navy-50 p-5">
          <div className="text-sm font-bold text-navy-900">정경 · 한국AI평생교육협회 협회장</div>
          <div className="mt-0.5 text-xs text-navy-500">
            바스제로 컨설팅 대표 · 한국복지사이버대학교 특임교수 · 한국폴리텍대학 AI 강사
          </div>
          <p className="mt-3 border-t border-navy-200 pt-3 text-xs leading-relaxed text-navy-500">
            <b className="text-accent-dark">한국AI평생교육협회</b>는 검증된 AI 교육 강사를 기업·공공기관·학교에
            연결하고, 강사양성과정을 통해 현장에 투입 가능한 강사를 배출합니다.
          </p>
        </div>

        <div className="mt-8">
          <Link href="/contact/" className="btn-primary">
            출강·교육 문의하기 →
          </Link>
        </div>
      </div>
    </article>
  );
}
