import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import JsonLd from '@/components/JsonLd';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    'AI 강사 출강',
    'AI 교육 강사 파견',
    '기업 AI 교육',
    '생성형 AI 강의',
    'AI 강사양성과정',
    'AI 평생교육',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

// Organization 구조화 데이터 (SEO/GEO)
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: '서울',
    addressCountry: 'KR',
    streetAddress: site.address,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col">
        <JsonLd data={orgJsonLd} />
        <Header />
        {/* 모바일 하단 고정 CTA 높이만큼 여백 확보 */}
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
