'use client';

import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { User, Folder, Code, Briefcase, Mail, BarChart } from 'lucide-react';

const sections = [
  { name: 'Introduction', path: '/', icon: User },
  { name: 'About Me', path: '/about', icon: User },
  { name: 'Projects', path: '/projects', icon: Folder },
  { name: 'Skills', path: '/skills', icon: Code },
  { name: 'Experience', path: '/experience', icon: Briefcase },
  { name: 'Contact', path: '/contact', icon: Mail },
  { name: 'Stats', path: '/stats', icon: BarChart },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', down);
    return () => window.removeEventListener('keydown', down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className='fixed inset-0 z-50 flex items-start justify-center pt-[10%] bg-black/40 backdrop-blur-sm'
    >
      <VisuallyHidden>
        <DialogTitle>Search Sections</DialogTitle>
      </VisuallyHidden>

      <Command
        className='
        w-[500px]
        max-w-[90%]
        bg-background
        border
        border-border
        rounded-xl
        shadow-2xl
        animate-in fade-in zoom-in-95
      '
      >
        <div className='flex items-center border-b px-3'>
          <Command.Input
            placeholder='Search anything...'
            className='w-full h-12 outline-none text-sm bg-transparent'
          />
        </div>

        <Command.Empty className='p-4 text-sm text-muted-foreground'>
          No results found.
        </Command.Empty>

        <Command.List className='max-h-[300px] overflow-y-auto p-2'>
          <Command.Group heading='Navigation'>
            {sections.map((item) => {
              const Icon = item.icon;

              return (
                <Command.Item
                  key={item.path}
                  onSelect={() => {
                    router.push(item.path);
                    setOpen(false);
                  }}
                  className='
                    flex items-center gap-3 px-3 py-2 rounded-lg
                    cursor-pointer
                    data-[selected=true]:bg-muted
                    hover:bg-muted
                    transition
                  '
                >
                  <Icon size={16} className='text-muted-foreground' />
                  <span className='text-sm'>{item.name}</span>
                </Command.Item>
              );
            })}
          </Command.Group>
        </Command.List>

        <div className='flex justify-between items-center px-3 py-2 text-xs text-muted-foreground border-t'>
          <span>↑ ↓ to navigate</span>
          <span>Enter to select</span>
        </div>
      </Command>
    </Command.Dialog>
  );
}
