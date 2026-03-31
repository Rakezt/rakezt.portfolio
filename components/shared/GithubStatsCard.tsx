import { getGithubStats } from '@/lib/github';
import StatsCard from './StatsCard';

export default async function GithubStats() {
  const { hireable, public_repos, followers, following, company, location } =
    await getGithubStats();

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
      <StatsCard title='Hireable' value={hireable ? 'No' : 'Yes'} />

      <StatsCard title='Total Public Repositories' value={public_repos} />

      <StatsCard title='Followers' value={followers} />

      <StatsCard title='Following' value={following} />

      <StatsCard title='Current Company' value={company} />

      <StatsCard title='Location' value={location} />
    </div>
  );
}
