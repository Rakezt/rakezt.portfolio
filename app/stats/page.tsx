import { SectionTitle } from '@/components/shared/SectionTitle';
import PortfolioStats from '@/components/shared/PortfolioStats';
import GithubCalendarSection from '@/components/shared/GithubCalendar';
import PageNavigation from '@/components/shared/PageNavigation';
import GithubStats from '@/components/shared/GithubStatsCard';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function StatsPage() {
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
