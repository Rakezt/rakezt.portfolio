import { experiences } from '@/data/experience';
import PageNavigation from '@/components/shared/PageNavigation';
import { SectionTitle } from '@/components/shared/SectionTitle';
import TimelineItem from '@/components/shared/TimelineItem';

export default function ExperiencePage() {
  return (
    <div className='max-w-4xl mx-auto'>
      <SectionTitle
        title='Experience'
        subTitle='You need it to get the job, but the job’s what gives it!'
      />

      <p className='text-muted-foreground mt-6 mb-10'>
        Throughout my journey as a developer, I’ve had the opportunity to work
        with modern web technologies and build scalable applications. From
        solving complex backend problems to crafting intuitive front-end
        experiences, each role has strengthened my engineering mindset and
        problem-solving ability.
      </p>

      <div className='space-y-10'>
        {experiences.map((exp) => (
          <TimelineItem
            key={exp.role}
            title={exp.role}
            organization={exp.company}
            period={exp.period}
            description={exp.description}
            highlights={exp.highlights}
            current={exp.current}
          />
        ))}
      </div>

      <PageNavigation />
    </div>
  );
}
