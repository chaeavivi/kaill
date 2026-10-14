import InstructorCard from '@/components/InstructorCard';
import { instructors } from '@/data/instructors';

// PC(lg) 기준 3열 배치 — 8명이면 3 / 3 / 2
export default function InstructorGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {instructors.map((ins) => (
        <InstructorCard key={ins.name} instructor={ins} />
      ))}
    </div>
  );
}
