import Link from 'next/link';

type Props = {
  title: string;
  desc?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: 'primary' | 'outline';
};

// 페이지 하단 문의 유도 배너 (흰 바탕 카드형)
export default function CtaBanner({ title, desc, ctaLabel, ctaHref, variant = 'primary' }: Props) {
  return (
    <section className="py-12 sm:py-14">
      <div className="container-x">
        <div className="flex flex-col items-start gap-5 rounded-xl border border-navy-100 bg-navy-50/70 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <h2 className="text-lg font-bold text-navy-950 sm:text-xl">{title}</h2>
            {desc && <p className="mt-1.5 text-sm text-navy-500">{desc}</p>}
          </div>
          <Link href={ctaHref} className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}>
            {ctaLabel} →
          </Link>
        </div>
      </div>
    </section>
  );
}
