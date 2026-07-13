import Link from 'next/link';

type Props = {
  title: string;
  desc?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: 'primary' | 'outline';
};

// 어두운 배경 CTA 배너 (출강/과정 전환 유도)
export default function CtaBanner({
  title,
  desc,
  ctaLabel,
  ctaHref,
  variant = 'primary',
}: Props) {
  return (
    <section className="bg-navy-800">
      <div className="container-x flex flex-col items-start gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white sm:text-xl">{title}</h2>
          {desc && <p className="mt-1.5 text-sm text-navy-300">{desc}</p>}
        </div>
        <Link href={ctaHref} className={variant === 'primary' ? 'btn-primary' : 'btn-outline-light'}>
          {ctaLabel} →
        </Link>
      </div>
    </section>
  );
}
