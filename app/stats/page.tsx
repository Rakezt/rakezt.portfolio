import { SectionTitle } from '@/components/shared/SectionTitle';
import PortfolioStats from '@/components/shared/PortfolioStats';
import PageNavigation from '@/components/shared/PageNavigation';
import SectionWrapper from '@/components/shared/SectionWrapper';
import dynamic from 'next/dynamic';

export default function StatsPage() {
  const GithubCalendarSection = dynamic(
    () => import('@/components/shared/GithubCalendar'),
    {
      loading: () => <div className='animate-pulse h-40 bg-muted rounded-lg' />,
    },
  );
  const GithubStats = dynamic(
    () => import('@/components/shared/GithubStatsCard'),
    {
      loading: () => <div className='animate-pulse h-40 bg-muted rounded-lg' />,
    },
  );

  return (
    <div className='max-w-4xl mx-auto'>
      <SectionWrapper>
        <SectionTitle
          title='About this portfolio'
          subTitle='Insights and metrics about this portfolio website'
        />

        <PortfolioStats />
        <div className='mt-10'>
          <SectionTitle
            title='GitHub Stats'
            subTitle='Insights and metrics about my GitHub profile'
          />
        </div>
        <GithubCalendarSection />

        <GithubStats />

        <PageNavigation />
      </SectionWrapper>
    </div>
  );
}
