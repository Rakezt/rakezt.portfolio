import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/project';
import { ProjectImage } from '@/components/shared/ProjectImage';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className='max-w-4xl mx-auto'>
      <SectionWrapper>
        <Link
          href='/projects'
          className='text-sm text-muted-foreground hover:text-primary'
        >
          ← Back to projects
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-6 items-start mt-6 mb-4'>
          <h1 className='md:col-span-2 text-4xl font-bold'>{project.title}</h1>

          <div className='md:col-span-4'>
            <ProjectImage project={project} />
          </div>
        </div>
        <p className='text-muted-foreground mb-8'>{project.description}</p>

        <h3 className='text-lg font-semibold mb-3'>Tech Stack</h3>

        <div className='flex flex-wrap gap-2 mb-8 '>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className='px-3 py-1 text-sm rounded-lg bg-muted underline decoration-[hsl(var(--accent))] '
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='flex gap-4'>
          <a
            href={project.demo}
            target='_blank'
            className='px-4 py-2 bg-primary  rounded-md text-[hsl(var(--accent))]'
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target='_blank'
            className='px-4 py-2 border rounded-md'
          >
            Github
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
}
