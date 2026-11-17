import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import JsonLd from '@/components/JsonLd';
import { site } from '@/data/site';

// 메인(홈) 검색 제목 — 'AI 강사'·'AI 협회' 검색어를 앞쪽에 배치
const homeTitle = `${site.name}(KAILEA) | 전국 출강 AI 강사 섭외·기업·공공기관 AI 교육`;
const homeDescription =
  '한국AI평생교육협회(KAILEA)는 전국 기업·공공기관·복지기관·학교에 검증된 AI 강사를 출강 연계하는 AI 교육 협회입니다. 생성형 AI 실무교육, 직무별 AI 활용 교육, AI 강사 양성과정을 운영합니다. 본부 강원 원주.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: `%s · ${site.name}`,
  },
  description: homeDescription,
  keywords: [
    'AI 강사',
    'AI 협회',
    'AI 강사 협회',
    'AI 강사 섭외',
    'AI 강사 출강',
    'AI 교육 강사 섭외',
    '기업 AI 교육',
    '생성형 AI 강의',
    'AI 강사양성과정',
    'AI 평생교육',
    '공공기관 AI 교육',
    '원주 AI 교육',
    '강원 AI 강사',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: site.name,
    title: homeTitle,
    description: homeDescription,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true },
  // 검색엔진 사이트 소유확인 (네이버 서치어드바이저)
  verification: {
    other: { 'naver-site-verification': 'cf87a2bb5cc5ee64933f84b2c404bda4497c8331' },
  },
};

// Organization 구조화 데이터 (SEO/GEO) — 값이 있는 연락처 항목만 포함
const sameAs = Object.values(site.social).filter(Boolean);

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  alternateName: 'KAILEA',
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/logo.png`,
  // 활동 지역: 전국 출강 / 본부: 강원 원주
  areaServed: { '@type': 'Country', name: '대한민국' },
  knowsAbout: ['AI 교육', '생성형 AI 실무교육', 'AI 강사 양성', 'AI 리터러시', '평생교육'],
  image: `${site.url}/og.jpg`,
  ...(site.email ? { email: site.email } : {}),
  ...(site.phone ? { telephone: site.phone } : {}),
  ...(site.address
    ? {
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'KR',
          addressRegion: '강원특별자치도',
          addressLocality: '원주시',
          streetAddress: site.address,
        },
      }
    : {}),
  // SNS 채널 (공식 계정 연결 — 검색엔진·AI 답변의 동일 주체 인식에 사용)
  ...(sameAs.length > 0 ? { sameAs } : {}),
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
