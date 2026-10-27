import { site } from '@/data/site';

// SNS 채널 링크 — site.social에 값이 있는 항목만 노출
type Channel = {
  key: string;
  label: string;
  handle: string;
  href: string;
  icon: JSX.Element;
};

const YouTubeIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
    <path d="M23.5 6.9a3 3 0 0 0-2.1-2.1C19.5 4.3 12 4.3 12 4.3s-7.5 0-9.4.5A3 3 0 0 0 .5 6.9C0 8.8 0 12 0 12s0 3.2.5 5.1a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.1.5-5.1s0-3.2-.5-5.1ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
  </svg>
);

const InstagramIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
    <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.23 1 .5 1.5.95.45.45.72.9.95 1.5.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.23.6-.5 1-.95 1.5-.45.45-.9.72-1.5.95-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.23-1-.5-1.5-.95-.45-.45-.72-.9-.95-1.5-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.23-.6.5-1 .95-1.5.45-.45.9-.72 1.5-.95.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.98c-3.14 0-3.5.01-4.73.07-.94.04-1.45.2-1.79.33-.45.17-.77.38-1.1.72-.34.33-.55.65-.72 1.1-.13.34-.29.85-.33 1.79-.06 1.23-.07 1.59-.07 4.73s.01 3.5.07 4.73c.04.94.2 1.45.33 1.79.17.45.38.77.72 1.1.33.34.65.55 1.1.72.34.13.85.29 1.79.33 1.23.06 1.59.07 4.73.07s3.5-.01 4.73-.07c.94-.04 1.45-.2 1.79-.33.45-.17.77-.38 1.1-.72.34-.33.55-.65.72-1.1.13-.34.29-.85.33-1.79.06-1.23.07-1.59.07-4.73s-.01-3.5-.07-4.73c-.04-.94-.2-1.45-.33-1.79a2.95 2.95 0 0 0-.72-1.1 2.95 2.95 0 0 0-1.1-.72c-.34-.13-.85-.29-1.79-.33-1.23-.06-1.59-.07-4.73-.07Zm0 3.37a4.45 4.45 0 1 1 0 8.9 4.45 4.45 0 0 1 0-8.9Zm0 7.34a2.89 2.89 0 1 0 0-5.78 2.89 2.89 0 0 0 0 5.78Zm5.67-7.56a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0Z" />
  </svg>
);

const BlogIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
    <path d="M5 3h9l5 5v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 1.8V9h4.2L13 4.8ZM7.5 12h9v1.6h-9V12Zm0 3.4h9V17h-9v-1.6Z" />
  </svg>
);

export const socialChannels: Channel[] = [
  { key: 'youtube', label: '유튜브', handle: '@kaileakr', href: site.social.youtube, icon: YouTubeIcon },
  { key: 'instagram', label: '인스타그램', handle: '@kailea_edu', href: site.social.instagram, icon: InstagramIcon },
  { key: 'blog', label: '블로그', handle: '', href: site.social.blog, icon: BlogIcon },
].filter((c) => Boolean(c.href));

export default function SocialLinks({
  variant = 'footer',
  showHandle = false,
}: {
  variant?: 'footer' | 'header';
  showHandle?: boolean;
}) {
  if (socialChannels.length === 0) return null;

  const base =
    'inline-flex items-center gap-2 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const style =
    variant === 'footer'
      ? 'border border-white/15 bg-white/5 text-navy-200 hover:border-accent/50 hover:bg-accent/15 hover:text-white focus-visible:outline-accent'
      : 'text-navy-500 hover:bg-navy-50 hover:text-navy-900 focus-visible:outline-accent';
  const size = showHandle ? 'px-3.5 py-2 text-xs font-medium' : 'h-9 w-9 justify-center';

  return (
    <ul className="flex flex-wrap items-center gap-2">
      {socialChannels.map((c) => (
        <li key={c.key}>
          <a
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${c.label} 채널 열기 (새 창)`}
            title={c.handle ? `${c.label} ${c.handle}` : c.label}
            className={`${base} ${style} ${size}`}
          >
            {c.icon}
            {showHandle && <span>{c.label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
