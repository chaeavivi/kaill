import type { Instructor } from '@/data/instructors';

// 이름 이니셜 아바타 (프로필 이미지 없을 때)
function initials(name: string) {
  return name.trim().slice(0, 1);
}

export default function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <div className="card flex h-full flex-col">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy-900 text-xl font-bold text-accent">
          {initials(instructor.name)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy-950">{instructor.name}</h3>
          <p className="text-sm text-accent-dark">{instructor.role}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-navy-500">{instructor.bio}</p>

      {instructor.highlights && instructor.highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {instructor.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm leading-snug text-navy-700">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {instructor.expertise.map((e) => (
          <span key={e} className="rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent-dark">
            {e}
          </span>
        ))}
      </div>

      <div className="mt-4 border-t border-navy-100 pt-4">
        <p className="text-xs font-medium text-navy-400">대표 출강 이력</p>
        <p className="mt-1 text-sm text-navy-700">{instructor.records.join(' · ')}</p>
      </div>
    </div>
  );
}
