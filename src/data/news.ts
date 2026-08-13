// 소식·활동 (공지 / 활동·출강 소식 / 칼럼). 사진 중심 출강 기록 = 실적·활성도 증명.
// ⚠️ 실제 콘텐츠로 교체하세요 (현재 예시 플레이스홀더).
export type NewsCategory = '공지' | '출강소식' | '칼럼';

export type NewsItem = {
  id: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
};

export const news: NewsItem[] = [
  {
    id: 'notice-2026-fall',
    category: '공지',
    title: '2026년 하반기 강사양성과정 모집 안내',
    excerpt:
      '출강 연계형 AI 강사양성과정 신규 기수를 모집합니다. 수료 후 협회 출강 풀 편입 기회가 제공됩니다.',
    date: '2026-07-01',
  },
  {
    id: 'dispatch-samsung',
    category: '출강소식',
    title: '대기업 임직원 대상 생성형 AI 실무 교육 진행',
    excerpt:
      '전 부서 임직원을 대상으로 생성형 AI 업무 활용 교육을 진행했습니다. 직무별 맞춤 실습으로 높은 만족도를 기록했습니다.',
    date: '2026-06-18',
  },
  {
    id: 'column-ai-literacy',
    category: '칼럼',
    title: '왜 지금 조직에 AI 리터러시가 필요한가',
    excerpt:
      '도구는 사면 되지만 리터러시는 길러야 합니다. AI 격차는 경쟁사가 아니라 같은 팀 안에서 먼저 벌어집니다. 왜 지금 전 직원의 AI 리터러시가 기본 문해력이 되었는지 현장 운영자의 시선으로 짚었습니다.',
    date: '2026-06-05',
  },
  {
    id: 'dispatch-public',
    category: '출강소식',
    title: '공공기관 종사자 대상 AI 활용 연수 진행',
    excerpt: '공공기관 실무자 대상 노코드·자동화 중심 연수를 성공적으로 마쳤습니다.',
    date: '2026-05-22',
  },
  {
    id: 'notice-partnership',
    category: '공지',
    title: '평생교육기관 제휴 협력 안내',
    excerpt: '평생학습관·문화센터와의 AI 교육 제휴를 확대합니다. 제휴 문의를 받습니다.',
    date: '2026-05-10',
  },
  {
    id: 'column-prompt',
    category: '칼럼',
    title: '실무자를 위한 프롬프트 설계 기본기',
    excerpt: '업무에 바로 쓰는 프롬프트 작성 원칙과 자주 하는 실수를 정리했습니다.',
    date: '2026-04-28',
  },
];

export const newsCategories: NewsCategory[] = ['공지', '출강소식', '칼럼'];
