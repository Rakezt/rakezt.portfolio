import Link from 'next/link';

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    tech: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className='h-full'>
      <div className='group relative flex flex-col h-full rounded-xl border border-border p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_hsl(var--shadow-color)/0.12)]  hover:border-primary/40'>
        <h3 className='text-xl font-semibold mb-3 group-hover:text-primary'>
          {project.title}
        </h3>

        <p className='text-muted-foreground text-sm mb-4'>
          {project.description}
        </p>

        {/* This pushes content down */}
        <div className='flex flex-wrap gap-2 mt-auto'>
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className='text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='mt-5 text-sm text-primary opacity-0 group-hover:opacity-100 transition'>
          View Project →
        </div>
      </div>
    </Link>
  );
}
