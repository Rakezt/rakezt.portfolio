'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { pageOrder } from '@/lib/pageOrder';

export default function PageNavigation() {
  const pathname = usePathname();

  const currentIndex = pageOrder.findIndex((page) => page.href === pathname);

  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;

  const nextPage =
    currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;

  return (
    <div className='flex justify-between items-center mt-32 w-full'>
      {prevPage ? (
        <Link
          href={prevPage.href}
          className='flex items-center gap-2 text-muted-foreground hover:text-primary'
        >
          <ChevronLeft size={18} />
          {prevPage.label}
        </Link>
      ) : (
        <div />
      )}

      {nextPage && (
        <Link
          href={nextPage.href}
          className='flex items-center gap-2 text-muted-foreground hover:text-primary'
        >
          {nextPage.label}
          <ChevronRight size={18} />
        </Link>
      )}
    </div>
  );
}
