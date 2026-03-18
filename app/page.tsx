import PageNavigation from '@/components/shared/PageNavigation';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { RESUME_LINK } from '@/lib/constants';
import { Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='max-w-4xl mx-auto'>
      <SectionTitle
        title='L Rakesh Singh'
        subTitle='      Crafting code and solving real-world problems.'
      />

      <p className='text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8'>
        I’m a full-stack Software Engineer who enjoys building modern web
        applications with technologies like Next.js, React, TypeScript, Tailwind
        CSS, Node.js, Express, and MongoDB. I focus on creating scalable,
        responsive, and user-friendly solutions while leveraging DevOps
        practices to improve development workflows and deliver reliable
        software.
      </p>

      <div className='flex items-center gap-6'>
        <Button
          asChild
          className='bg-primary text-[hsl(var(--accent))] hover:bg-primary/90'
        >
          <a href={RESUME_LINK} target='_blank'>
            <ArrowUpRight className='ml-2 h-4 w-4' />
            Get Resume
          </a>
        </Button>

        <Link
          href='mailto:rakezt.k@email.com'
          className='flex items-center gap-2 text-muted-foreground hover:text-primary'
        >
          <Mail size={18} />
          Send Mail
        </Link>
      </div>
      <PageNavigation />
    </div>
  );
}
