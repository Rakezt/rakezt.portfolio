'use client';

import { useSyncExternalStore } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

function useMounted() {
  return useSyncExternalStore(
    () => () => {}, // no-op subscribe
    () => true, // client snapshot
    () => false, // server snapshot
  );
}

export default function GithubCalendarSection() {
  const mounted = useMounted();

  if (!mounted) {
    return <div className='w-9 h-9' />;
  }

  return (
    <div className='border rounded-xl p-6 mt-10'>
      <GitHubCalendar
        username='Rakezt'
        blockSize={14}
        blockMargin={4}
        fontSize={14}
      />
    </div>
  );
}
