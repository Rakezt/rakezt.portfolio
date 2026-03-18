'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { useSyncExternalStore } from 'react';

function useMounted() {
  return useSyncExternalStore(
    () => () => {}, // no-op subscribe
    () => true, // client snapshot
    () => false, // server snapshot
  );
}

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className='w-9 h-9' />;
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
};
