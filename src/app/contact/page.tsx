import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactTabs from '@/components/ContactTabs';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: '문의',
  description:
    'B2B 출강 문의, 강사양성과정 문의, 제휴·일반 문의를 받습니다. 담당자가 빠르게 안내드립니다.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="문의"
        desc="필요하신 문의 유형을 선택해 주세요. 담당자가 빠르게 연락드립니다."
      />

      <section className="section">
        <div className="container-x">
          <ContactTabs />

          {/* 협회 정보 */}
          <div className="mt-12 grid gap-4 rounded-lg border border-navy-100 bg-navy-50 p-6 sm:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">협회장</div>
              <p className="mt-1 text-sm text-navy-800">{site.representative}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">고유번호</div>
              <p className="mt-1 text-sm text-navy-800">{site.regNumber}</p>
            </div>
            {site.phone && (
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">전화</div>
                <a href={`tel:${site.phone.replace(/-/g, '')}`} className="mt-1 block text-sm text-navy-800">
                  {site.phone}
                </a>
              </div>
            )}
            {site.email && (
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">이메일</div>
                <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-navy-800">
                  {site.email}
                </a>
              </div>
            )}
            {site.address && (
              <div className="sm:col-span-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-dark">주소</div>
                <p className="mt-1 text-sm text-navy-800">{site.address}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
