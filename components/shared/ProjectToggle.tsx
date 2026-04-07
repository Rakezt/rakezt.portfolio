'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/shared/ProjectCard';
import type { Project } from '@/data/project';

export default function ProjectsToggle({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>(
    'professional',
  );

  const filteredProjects = projects.filter(
    (project) => project.type === activeTab,
  );
  const tabStyle =
    'cursor-pointer px-4 py-2 text-sm rounded-md border border-transparent transition-all duration-200 hover:bg-muted data-[state=active]:border-[hsl(var(--accent))] data-[state=active]:bg-[hsl(var(--accent)/0.1)] data-[state=active]:text-[hsl(var(--accent))]';
  return (
    <>
      <div className='flex justify-end mt-4'>
        <Tabs
          value={activeTab}
          onValueChange={(value) =>
            setActiveTab(value as 'professional' | 'personal')
          }
        >
          <TabsList>
            <TabsTrigger value='professional' className={tabStyle}>
              Professional
            </TabsTrigger>
            <TabsTrigger value='personal' className={tabStyle}>
              Personal
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 auto-rows-fr'>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
