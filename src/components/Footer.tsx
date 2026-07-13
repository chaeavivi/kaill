import Link from 'next/link';
import { navItems } from '@/data/nav';
import { site, CERT_DISCLAIMER } from '@/data/site';

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy-950 text-navy-200">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* 협회 정보 */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-sm font-bold text-accent">
                AI
              </span>
              <span className="text-base font-bold text-white">{site.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              {site.tagline}
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="text-sm font-semibold text-white">바로가기</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-navy-300 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 (NAP) */}
          <div>
            <h3 className="text-sm font-semibold text-white">연락처</h3>
            <ul className="mt-4 space-y-2 text-sm text-navy-300">
              <li>대표자 · {site.representative}</li>
              <li>
                <a href={`tel:${site.phone.replace(/-/g, '')}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>

        {/* 발급물 성격 고지 (소비자 오인 방지) */}
        <div className="mt-10 rounded-lg border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-navy-300">
          ⚠️ {CERT_DISCLAIMER}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-navy-400">
          © {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
