'use client';

import { useSyncExternalStore } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { useMediaQuery } from './useMediaQuery';

function useMounted() {
  return useSyncExternalStore(
    () => () => {}, // no-op subscribe
    () => true, // client snapshot
    () => false, // server snapshot
  );
}

export default function GithubCalendarSection() {
  const mounted = useMounted();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!mounted) {
    return <div className='w-9 h-9' />;
  }

  return (
    <div className='border rounded-xl  mt-10'>
      <div className={isMobile ? 'p-2' : 'p-5'}>
        <GitHubCalendar
          username='Rakezt'
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          transformData={isMobile ? (data) => data.slice(-140) : undefined}
        />
      </div>
    </div>
  );
}
