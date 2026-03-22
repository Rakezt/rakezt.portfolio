'use client';

import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { User, Folder, Code, Briefcase, Mail, BarChart } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

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
    const openCommand = () => setOpen(true);
    window.addEventListener('open-command', openCommand);
    return () => window.removeEventListener('open-command', openCommand);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/40 backdrop-blur-sm' />
        <Dialog.Content className='fixed z-50 top-[15%] left-1/2 -translate-x-1/2 w-[500px] max-w-[90%] bg-background border border-border rounded-xl shadow-2xl'>
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

            <div className='flex items-center px-3 py-2 text-xs text-muted-foreground border-t'>
              <span>Select where you want to re-direct</span>
            </div>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
