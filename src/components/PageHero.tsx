// 내부 페이지 상단 헤더 (딥네이비 밴드 + 도트그리드)
export default function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <section className="bg-navy-800 text-white">
      <div className="dotgrid">
        <div className="container-x py-14 sm:py-16">
          <div className="rule-accent mb-4" />
          <span className="eyebrow text-accent-light">{eyebrow}</span>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          {desc && <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-navy-300">{desc}</p>}
        </div>
      </div>
    </section>
  );
}
