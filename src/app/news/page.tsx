import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import NewsList from '@/components/NewsList';

export const metadata: Metadata = {
  title: '소식 · 활동',
  description:
    '한국AI평생교육협회의 공지사항, 출강·활동 소식, AI 평생교육 칼럼을 전합니다.',
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="소식 · 활동"
        desc="공지사항과 출강·활동 소식, AI 평생교육 인사이트를 전합니다."
      />
      <section className="section">
        <div className="container-x">
          <NewsList />
        </div>
      </section>
    </>
  );
}
