import { ReactNode } from 'react';

interface Props {
  title: string;
  value: string | number;
  icon?: ReactNode;
  color?: string;
}

export default function StatsCard({ title, value, icon }: Props) {
  return (
    <div className='border rounded-xl p-6 bg-background shadow-sm hover:shadow-md transition'>
      <div className='flex items-center justify-between text-muted-foreground'>
        <div className='flex items-center gap-2'>
          {icon}
          <span className='text-sm md:text-base'>{title}</span>
        </div>
      </div>
      <div className='text-3xl md:text-4xl font-bold mt-4 tracking-tight'>
        {value}
      </div>
    </div>
  );
}
