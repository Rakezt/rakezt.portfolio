'use client';
import { Project } from '@/data/project';
import Image from 'next/image';
import { useState } from 'react';

export const ProjectImage = ({ project }: { project: Project }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className='relative mt-4 w-full h-[400px]'>
        {loading && (
          <div className='absolute inset-0 animate-pulse bg-gray-300 rounded-lg' />
        )}

        <Image
          src={project.img}
          alt={project.title}
          fill
          className={`object-cover rounded-lg transition-opacity duration-500 ${
            loading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </>
  );
};
