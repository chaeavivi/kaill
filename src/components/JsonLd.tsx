// 구조화 데이터(JSON-LD) 삽입 헬퍼 — SEO/GEO(AI 검색) 최적화
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // 정적 데이터만 주입 (사용자 입력 없음)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
