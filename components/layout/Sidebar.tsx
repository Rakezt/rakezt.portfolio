'use client';
import { sections } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className='w-64 border-r border-border p-6 fixed '>
      <h2 className='text-lg font-bold mb-4'>Sections</h2>
      <ul className='space-y-5 font-semibold'>
        {sections.map((section) => {
          const isActive = pathName === section.href;
          return (
            <li key={section.href}>
              <Link
                href={section.href}
                className={`cursor-pointer w-full ${isActive ? 'text-primary font-semibold' : ' text-muted-foreground hover:text-primary'}  `}
              >
                {section.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
