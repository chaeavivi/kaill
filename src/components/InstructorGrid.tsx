import InstructorCard from '@/components/InstructorCard';
import { instructors } from '@/data/instructors';

// PC(lg) 기준 배치: 첫 줄 3명(임원) · 둘째 줄 4명(강사)
// 12칼럼 그리드에서 앞 3개는 4칸, 나머지는 3칸씩 차지합니다.
export default function InstructorGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
      {instructors.map((ins, i) => (
        <div key={ins.name} className={`h-full ${i < 3 ? 'lg:col-span-4' : 'lg:col-span-3'}`}>
          <InstructorCard instructor={ins} />
        </div>
      ))}
    </div>
  );
}
