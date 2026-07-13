'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems, primaryCta } from '@/data/nav';
import { site } from '@/data/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 라우트 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} 홈`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-900 text-sm font-bold text-accent">
            AI
          </span>
          <span className="text-[15px] font-bold leading-tight text-navy-950 sm:text-base">
            {site.name}
          </span>
        </Link>

        {/* 데스크톱 내비 */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                isActive(item.href)
                  ? 'text-navy-950'
                  : 'text-navy-500 hover:text-navy-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 우측 CTA + 모바일 토글 */}
        <div className="flex items-center gap-2">
          <Link href={primaryCta.href} className="hidden btn-primary !px-4 !py-2 !text-sm sm:inline-flex">
            {primaryCta.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md text-navy-800 hover:bg-navy-50 lg:hidden"
            aria-label="메뉴 열기"
            aria-expanded={open}
          >
            <span className="sr-only">메뉴</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <nav className="border-t border-navy-100 bg-white lg:hidden" aria-label="모바일 메뉴">
          <div className="container-x flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-2 py-3 text-sm font-medium ${
                  isActive(item.href) ? 'text-navy-950' : 'text-navy-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
