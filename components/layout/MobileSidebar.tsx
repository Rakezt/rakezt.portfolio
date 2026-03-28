'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sections } from '@/lib/constants';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

const MobileSidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div className='md:hidden'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className='cursor-pointer'>
          <Menu size={22} />
        </SheetTrigger>

        <SheetContent
          side='left'
          className='w-[85vw] max-w-xs border-r border-border bg-background/95 backdrop-blur-xl'
        >
          <SheetHeader className='border-b border-border pb-4'>
            <div className='flex items-center justify-between'>
              <SheetTitle className='text-left text-lg font-semibold'>
                Navigation
              </SheetTitle>

              <Button
                onClick={handleClose}
                className='rounded-lg p-2 hover:bg-muted transition'
                aria-label='Close menu'
              >
                <X size={18} />
              </Button>
            </div>
          </SheetHeader>

          <div className='mt-2'>
            <ul className='space-y-3 mt-6'>
              {sections.map((section) => {
                const isActive = pathname === section.href;

                return (
                  <li key={section.href}>
                    <Link
                      href={section.href}
                      onClick={() => {
                        handleClose();
                      }}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
                        isActive
                          ? 'bg-primary/10 text-primary shadow-sm'
                          : 'hover:bg-muted/50'
                      }`}
                    >
                      <span>{section.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;

// ('use client');

// import { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X, ArrowUpRight } from 'lucide-react';
// import { usePathname } from 'next/navigation';
// import { sections } from '@/lib/constants';

// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetHeader,
//   SheetTitle,
// } from '@/components/ui/sheet';
// import { Button } from '../ui/button';

// const MobileSidebar = () => {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const handleClose = () => setOpen(false);

//   return (
//     <div className='md:hidden'>
//       <Sheet open={open} onOpenChange={setOpen}>
//         <SheetTrigger className='cursor-pointer'>
//           <Menu size={22} />
//         </SheetTrigger>

//         <SheetContent
//           side='left'
//           className='w-[85vw] max-w-xs border-r border-border bg-background/95 backdrop-blur-xl'
//         >
//           <SheetHeader className='border-b border-border pb-4'>
//             <div className='flex items-center justify-between'>
//               <SheetTitle className='text-left text-lg font-semibold'>
//                 Navigation
//               </SheetTitle>

//               <button
//                 onClick={handleClose}
//                 className='rounded-lg p-2 hover:bg-muted transition'
//                 aria-label='Close menu'
//               >
//                 <X size={18} />
//               </button>
//             </div>
//           </SheetHeader>

//           <div className='mt-6'>
//             <ul className='space-y-3'>
//               {sections.map((section) => {
//                 const isActive = pathname === section.href;

//                 return (
//                   <li key={section.href}>
//                     <Link
//                       href={section.href}
//                       onClick={handleClose}
//                       className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
//                         isActive
//                           ? 'bg-primary/10 text-primary shadow-sm'
//                           : 'hover:bg-muted/50 text-muted-foreground'
//                       }`}
//                     >
//                       <span>{section.name}</span>
//                       <ArrowUpRight size={16} className='opacity-60' />
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// };

// export default MobileSidebar;
