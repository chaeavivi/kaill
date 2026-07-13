import { dispatchProcess } from '@/data/dispatchTopics';

// 진행 프로세스 — 부담을 낮추는 단계 표시.
// compact=true 이면 홈 요약용(간결), 아니면 출강 페이지 상세용.
export default function ProcessSteps({ compact = false }: { compact?: boolean }) {
  const steps = compact ? dispatchProcess.slice(0, 4) : dispatchProcess;
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.step} className="relative">
          <div className="card h-full">
            <span className="text-sm font-bold text-accent-dark">{s.step}</span>
            <h3 className="mt-2 text-base font-semibold text-navy-950">{s.title}</h3>
            {!compact && (
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{s.desc}</p>
            )}
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-navy-200 lg:block"
            >
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
