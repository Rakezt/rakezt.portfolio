'use client';

import { Github, Music, Search } from 'lucide-react';
import { Input } from '../ui/input';
import Link from 'next/link';
import { useGetTime } from '@/components/shared/useGetTime';
import { ThemeToggle } from '../shared/ThemeToggle';
import { useAudio } from '../shared/useAudio';
import { Button } from '../ui/button';

const Header = () => {
  const time = useGetTime();
  const { isPlaying, toggle } = useAudio({
    src: '/dune.mp3',
  });

  return (
    <header className='flex items-center justify-between px-6 py-4 border-b border-border bg-background/70 backdrop-blur-xl sticky top-0 z-50'>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-4 font-bold text-lg'>
          rakezt.is-a-dev
        </div>

        <nav className='cursor-pointer flex items-center gap-4  text-m text-muted-foreground'>
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
            href='https://github.com/Rakezt'
            target='_blank'
            className='hover:text-primary transition flex items-center gap-1'
          >
            Github ↗
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
          onClick={() => window.dispatchEvent(new Event('open-command'))}
          className='cursor-pointer hidden md:flex items-center border border-border rounded-lg px-3 py-1.5 w-[280px] bg-muted/40 transition-all duration-200 hover:bg-muted/60 hover:shadow-[0_0_0_2px_hsl(var(--glow-color)/0.2)]'
        >
          <Search size={16} className='text-muted-foreground' />

          <Input
            className='ml-2 w-full bg-transparent outline-none text-sm border-none focus-visible:ring-0'
            placeholder='Search sections...'
          />
        </div>

        <div className='hidden md:flex items-center gap-4 text-sm border border-border px-3 py-1 rounded-full bg-muted/40 shadow-sm'>
          <span className='w-2 h-2 rounded-full bg-[hsl(var(--accent))]'></span>
          {time || '--:--:--'}
        </div>
        <Button variant='ghost' onClick={toggle} className='cursor-pointer'>
          <Music
            className={`transition ${
              isPlaying
                ? 'text-primary animate-pulse scale-110'
                : 'hover:text-primary'
            }`}
            size={18}
          />
        </Button>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
