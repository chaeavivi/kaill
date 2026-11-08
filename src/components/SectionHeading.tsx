type Props = {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'left',
  tone = 'light',
}: Props) {
  const isCenter = align === 'center';
  const isDark = tone === 'dark';
  return (
    <div className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <span
          className={`block text-xs font-bold uppercase tracking-[0.16em] ${
            isDark ? 'text-accent-light' : 'text-accent-dark'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-1.5 text-2xl font-bold tracking-tight sm:text-[28px] ${
          isDark ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-base leading-relaxed ${isDark ? 'text-navy-200' : 'text-navy-500'}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
