import { site } from '@/data/site';

// 유튜브 영상 재생 — 쇼츠(9:16) 기본, wide=true면 가로형(16:9)
// 개인정보 보호 모드(youtube-nocookie) + 지연 로딩
export default function YouTubeEmbed({
  id,
  title,
  wide = false,
}: {
  id: string;
  title: string;
  wide?: boolean;
}) {
  return (
    <figure className={wide ? '' : 'mx-auto w-full max-w-[360px]'}>
      <div
        className={`relative w-full overflow-hidden rounded-xl bg-navy-950 ${
          wide ? 'aspect-video' : 'aspect-[9/16]'
        }`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {site.social.youtube && (
        <figcaption className="mt-2 text-center text-xs text-navy-400">
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-dark"
          >
            협회 유튜브 채널에서 더 보기 ↗
          </a>
        </figcaption>
      )}
    </figure>
  );
}
