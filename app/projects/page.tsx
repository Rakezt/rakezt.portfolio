import ProjectCard from '@/components/shared/ProjectCard';
import PageNavigation from '@/components/shared/PageNavigation';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { projects } from '@/data/project';

export default function ProjectsPage() {
  return (
    <div className='max-w-4xl mx-auto'>
      <SectionTitle
        title='Projects'
        subTitle="A selection of things I've built"
      />

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <PageNavigation />
    </div>
  );
}
