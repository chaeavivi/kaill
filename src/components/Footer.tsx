import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/data/nav';
import { site, CERT_DISCLAIMER } from '@/data/site';
import SocialLinks from '@/components/SocialLinks';

// 기관형 하단 — 메뉴 바 + 협회 정보(협회명·대표·고유번호·주소·연락처) + 고지
export default function Footer() {
  return (
    <footer className="mt-auto border-t border-navy-100 bg-white text-navy-600">
      {/* 하단 메뉴 바 */}
      <div className="border-b border-navy-100">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-navy-700 transition hover:text-accent-dark">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <SocialLinks variant="header" />
        </div>
      </div>

      <div className="bg-navy-50/60">
        <div className="container-x py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* 협회 로고·이름 */}
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="" width={43} height={36} />
              <div className="leading-tight">
                <div className="text-base font-bold text-navy-950">{site.name}</div>
                <div className="mt-0.5 text-[10px] font-medium tracking-[0.12em] text-navy-400">
                  KOREA AI LIFELONG EDUCATION ASSOCIATION
                </div>
              </div>
            </div>

            {/* 협회 정보 (NAP) — 비어 있는 항목은 자동 숨김 */}
            <dl className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2 md:max-w-[640px]">
              <FooterRow label="협회장">{site.representative}</FooterRow>
              <FooterRow label="고유번호">{site.regNumber}</FooterRow>
              {site.phone && (
                <FooterRow label="대표전화">
                  <a href={`tel:${site.phone.replace(/-/g, '')}`} className="hover:text-navy-950">
                    {site.phone}
                  </a>
                </FooterRow>
              )}
              {site.email && (
                <FooterRow label="이메일">
                  <a href={`mailto:${site.email}`} className="hover:text-navy-950">
                    {site.email}
                  </a>
                </FooterRow>
              )}
              {site.address && (
                <div className="sm:col-span-2">
                  <FooterRow label="주소">{site.address}</FooterRow>
                </div>
              )}
            </dl>
          </div>

          {/* 발급물 성격 고지 (소비자 오인 방지) */}
          <p className="mt-8 rounded-md border border-navy-100 bg-white px-4 py-3 text-xs leading-relaxed text-navy-500">
            ※ {CERT_DISCLAIMER}
          </p>

          <div className="mt-6 flex flex-col gap-1.5 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© {site.name}. All rights reserved.</span>
            <span>본 사이트는 클로드 AI를 활용해 제작되었습니다.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <dt className="w-16 shrink-0 font-semibold text-navy-800">{label}</dt>
      <dd className="text-navy-600">{children}</dd>
    </div>
  );
}
