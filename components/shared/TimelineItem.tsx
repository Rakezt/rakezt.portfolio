import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  current?: boolean;
}

export default function TimelineItem({
  title,
  organization,
  period,
  description,
  highlights = [],
  current,
}: TimelineItemProps) {
  return (
    <div className='relative border-l border-border pl-8 pb-10'>
      <div className='absolute left-[-8px] top-2 h-4 w-4 rounded-full bg-[hsl(var(--accent))]' />

      <div className='mb-1 flex items-center gap-3'>
        <h3 className='text-lg font-semibold'>
          {title} · {organization}
        </h3>

        {current && (
          <span className='rounded-md bg-[hsl(var(--accent))] px-2 py-1 text-xs text-white'>
            Latest
          </span>
        )}
      </div>

      <div className='mb-4 flex items-center text-sm text-muted-foreground'>
        <Calendar size={14} className='mr-2' />
        {period}
      </div>

      <p className='mb-4 text-muted-foreground'>{description}</p>

      {highlights.length > 0 && (
        <ul className='ml-5 list-disc space-y-1 text-muted-foreground'>
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
