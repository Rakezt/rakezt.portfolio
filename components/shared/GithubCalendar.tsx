'use client';

import { GitHubCalendar } from 'react-github-calendar';

export default function GithubCalendarSection() {
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
