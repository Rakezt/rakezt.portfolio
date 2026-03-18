import PageNavigation from '@/components/shared/PageNavigation';
import { SectionTitle } from '@/components/shared/SectionTitle';
import TimelineItem from '@/components/shared/TimelineItem';
import { education } from '@/data/education';

export default function EducationPage() {
  return (
    <div className='max-w-4xl mx-auto'>
      <SectionTitle
        title='Education'
        subTitle='Built the foundation before building the products.'
      />

      <p className='mt-6 mb-10 text-muted-foreground'>
        My academic journey gave me the core fundamentals of programming,
        software development, and problem-solving, which later became the base
        for my practical full-stack development experience.
      </p>

      <div className='space-y-10'>
        {education.map((item) => (
          <TimelineItem
            key={`${item.title}-${item.organization}`}
            title={item.title}
            organization={item.organization}
            period={item.period}
            description={item.description}
            highlights={item.highlights}
            current={item.current}
          />
        ))}
      </div>

      <PageNavigation />
    </div>
  );
}
