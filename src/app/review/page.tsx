import type { Metadata } from 'next';
import Image from 'next/image';
import ReviewForm from '@/components/reviews/ReviewForm';
import { site } from '@/data/site';

// 강의 현장에서 QR로 들어오는 후기 작성 페이지 (메뉴에는 노출하지 않음)
export const metadata: Metadata = {
  title: '강의 후기 남기기',
  description: `${site.name} 강의를 들으신 소감을 남겨 주세요.`,
  robots: { index: false, follow: false },
};

export default function ReviewPage() {
  return (
    <section className="bg-navy-50/70 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-lg px-5">
        <div className="text-center">
          <Image src="/logo.png" alt="" width={52} height={44} className="mx-auto" />
          <p className="mt-3 text-xs font-bold tracking-[0.16em] text-accent-dark">REVIEW</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-navy-950 sm:text-[28px]">강의 후기 남기기</h1>
          <p className="mt-2 text-sm leading-relaxed text-navy-500">
            {site.name} 강의를 들어 주셔서 감사합니다.
            <br />
            솔직한 소감이 더 좋은 강의를 만듭니다.
          </p>
        </div>
        <div className="mt-8 rounded-xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
          <ReviewForm />
        </div>
      </div>
    </section>
  );
}
