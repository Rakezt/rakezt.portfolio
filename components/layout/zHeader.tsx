'use client';

import { Github, Music, Search } from 'lucide-react';
import { Input } from '../ui/input';
import Link from 'next/link';
import { useGetTime } from '@/components/shared/useGetTime';
import { ThemeToggle } from '../shared/ThemeToggle';

const Header = () => {
  const time = useGetTime();

  return (
    <header className='flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50'>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-4 font-semibold text-lg'>
          rakezt.is-a-dev
        </div>

        <nav className='flex items-center gap-4 text-sm text-muted-foreground'>
          <Link href='/' className='hover:text-primary transition'>
            Home
          </Link>

          <a
            href='https://www.linkedin.com/in/lrakeshsingh/'
            target='_blank'
            className='hover:text-primary transition flex items-center gap-1'
          >
            LinkedIn ↗
          </a>

          <a
            href='/resume.pdf'
            target='_blank'
            className='hover:text-primary transition flex items-center gap-1'
          >
            Resume ↗
          </a>
        </nav>
      </div>
      <div className='flex items-center gap-6'>
        <div
          onClick={() =>
            window.dispatchEvent(
              new KeyboardEvent('keydown', {
                key: 'k',
                metaKey: true,
              }),
            )
          }
          className='cursor-pointer hidden md:flex items-center border rounded-lg px-3 py-1.5 w-[280px] bg-muted/40'
        >
          <Search size={16} className='text-muted-foreground' />

          <Input
            className='ml-2 w-full bg-transparent outline-none text-sm border-none focus-visible:ring-0'
            placeholder='Search sections...'
          />

          <span className='text-xs text-muted-foreground border px-1.5 py-0.5 rounded ml-2'>
            ⌘ K
          </span>
        </div>

        <div className='hidden md:flex items-center gap-4 text-sm border px-3 py-1 rounded-full'>
          <span className='w-2 h-2 rounded-full bg-red-500'></span>
          {time || '--:--:--'}
        </div>

        <Music
          className='cursor-pointer hover:text-primary transition'
          size={18}
        />

        <ThemeToggle />

        <a href='https://github.com/Rakezt' target='_blank'>
          <Github
            className='cursor-pointer hover:text-primary transition'
            size={18}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
