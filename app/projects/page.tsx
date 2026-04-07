import PageNavigation from '@/components/shared/PageNavigation';
import ProjectsToggle from '@/components/shared/ProjectToggle';
import { SectionTitle } from '@/components/shared/SectionTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { projects } from '@/data/project';

export default function ProjectsPage() {
  return (
    <div className='max-w-4xl mx-auto'>
      <SectionWrapper>
        <SectionTitle
          title='Projects'
          subTitle="A selection of things I've built"
        />
        <ProjectsToggle projects={projects} />
        <PageNavigation />
      </SectionWrapper>
    </div>
  );
}
