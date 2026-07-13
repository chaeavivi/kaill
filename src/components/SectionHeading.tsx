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
      <div className={`rule-accent mb-4 ${isCenter ? 'mx-auto' : ''}`} />
      {eyebrow && (
        <span className={isDark ? 'eyebrow text-accent-light' : 'eyebrow'}>{eyebrow}</span>
      )}
      <h2
        className={`mt-2 text-2xl font-semibold tracking-tight sm:text-3xl ${
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
