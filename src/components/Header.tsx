'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems, primaryCta } from '@/data/nav';
import { site } from '@/data/site';
import SocialLinks from '@/components/SocialLinks';

// 기관형 2단 헤더 — 상단 유틸리티 바(연락처) + 메인 바(로고·메뉴·CTA)
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
    <header className="sticky top-0 z-50 bg-white">
      {/* 유틸리티 바 (데스크톱) */}
      <div className="hidden border-b border-navy-100 bg-navy-50 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs text-navy-500">
          <span>{site.tagline}</span>
          <div className="flex items-center gap-4">
            <SocialLinks variant="header" />
            {site.phone && (
              <a href={`tel:${site.phone.replace(/-/g, '')}`} className="hover:text-navy-900">
                대표전화 {site.phone}
              </a>
            )}
            {site.email && (
              <a href={`mailto:${site.email}`} className="hover:text-navy-900">
                {site.email}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 메인 바 */}
      <div className="border-b border-navy-100">
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[76px]">
          {/* 로고 */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} 홈`}>
            <Image src="/logo.png" alt="" width={43} height={36} priority />
            <span className="flex flex-col leading-tight">
              <span className="text-[15px] font-bold text-navy-950 sm:text-[17px]">{site.name}</span>
              <span className="hidden text-[9.5px] font-medium tracking-[0.12em] text-navy-400 sm:block">
                KOREA AI LIFELONG EDUCATION ASSOCIATION
              </span>
            </span>
          </Link>

          {/* 데스크톱 내비 */}
          <nav className="hidden h-full items-stretch lg:flex" aria-label="주요 메뉴">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center whitespace-nowrap px-4 text-[15px] xl:px-5 font-semibold transition ${
                    active ? 'text-navy-950' : 'text-navy-600 hover:text-navy-950'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-4 bottom-0 xl:inset-x-5 h-[3px] rounded-t bg-accent transition ${
                      active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* 우측 SNS·CTA + 모바일 토글 */}
          <div className="flex items-center gap-2">
            <Link href={primaryCta.href} className="btn-primary hidden whitespace-nowrap !px-4 !py-2 !text-sm sm:inline-flex">
              {primaryCta.label}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md text-navy-800 hover:bg-navy-50 lg:hidden"
              aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={open}
            >
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
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <nav className="border-b border-navy-100 bg-white shadow-card lg:hidden" aria-label="모바일 메뉴">
          <div className="container-x flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between border-b border-navy-100/70 px-1 py-3.5 text-[15px] font-semibold ${
                  isActive(item.href) ? 'text-accent-dark' : 'text-navy-800'
                }`}
              >
                {item.label}
                <span aria-hidden className="text-navy-300">›</span>
              </Link>
            ))}
            <div className="flex flex-col gap-1 px-1 pb-1 pt-4 text-sm text-navy-500">
              {site.phone && <a href={`tel:${site.phone.replace(/-/g, '')}`}>대표전화 {site.phone}</a>}
              {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            </div>
            <div className="px-1 pb-3 pt-2">
              <SocialLinks variant="header" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
