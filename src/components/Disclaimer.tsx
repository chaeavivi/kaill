import { CERT_DISCLAIMER } from '@/data/site';

// 발급물 성격 고지 (수료증·강사증이 국가/등록 민간자격이 아님)
export default function Disclaimer({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-lg border border-navy-200 bg-navy-50 p-4 text-sm leading-relaxed text-navy-600 ${className}`}
    >
      <span className="font-semibold text-navy-800">안내 · </span>
      {CERT_DISCLAIMER}
    </div>
  );
}
