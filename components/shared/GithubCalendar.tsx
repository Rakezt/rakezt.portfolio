'use client';

import { useSyncExternalStore } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export default function GithubCalendarSection() {
  const mounted = useMounted();

  if (!mounted) {
    return <div className='w-9 h-9' />;
  }

  return (
    <div className='border border-border rounded-2xl p-4 md:p-6 mt-10 overflow-x-auto'>
      <div className='min-w-[600px]'>
        <GitHubCalendar
          username='Rakezt'
          blockSize={14}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </div>
  );
}
