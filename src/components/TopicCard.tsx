import type { DispatchTopic } from '@/data/dispatchTopics';

export default function TopicCard({ topic }: { topic: DispatchTopic }) {
  return (
    <div className="card group h-full hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card-hover">
      <h3 className="text-lg font-semibold text-navy-950">{topic.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-500">{topic.desc}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {topic.keywords.map((k) => (
          <span
            key={k}
            className="rounded-md bg-navy-50 px-2 py-1 text-xs font-medium text-navy-600"
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}
