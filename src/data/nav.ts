// 글로벌 내비게이션 — 순서 자체가 전략:
// '강사 출강·파견'(수요)을 '강사양성과정'(공급)보다 앞에 배치.
export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: '협회 소개', href: '/about/' },
  { label: '강사 출강·파견', href: '/dispatch/' },
  { label: '강사양성과정', href: '/training/' },
  { label: '소식·활동', href: '/news/' },
  { label: '문의', href: '/contact/' },
];

// 최우선 전환 CTA
export const primaryCta: NavItem = { label: '출강 문의하기', href: '/dispatch/#inquiry' };
export const secondaryCta: NavItem = { label: '과정 문의하기', href: '/training/#apply' };
