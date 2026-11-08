'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { primaryCta, secondaryCta } from '@/data/nav';

// 모바일 하단 고정 CTA 2종 — 출강 문의(주) · 과정 문의(부)
export default function MobileCTA() {
  const pathname = usePathname();
  // 후기 작성 페이지(QR 진입)에서는 입력을 가리지 않도록 숨김
  if (pathname.startsWith('/review')) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 p-3 backdrop-blur lg:hidden">
      <div className="flex gap-2">
        <Link href={primaryCta.href} className="btn-primary flex-1 !py-2.5 !text-sm">
          {primaryCta.label}
        </Link>
        <Link href={secondaryCta.href} className="btn-secondary flex-1 !py-2.5 !text-sm">
          {secondaryCta.label}
        </Link>
      </div>
    </div>
  );
}
