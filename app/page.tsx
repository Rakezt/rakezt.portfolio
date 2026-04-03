import PageNavigation from '@/components/shared/PageNavigation';
import { SectionTitle } from '@/components/shared/SectionTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { RESUME_LINK } from '@/lib/constants';
import { Mail, ArrowUpRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='max-w-4xl mx-auto'>
      <SectionWrapper>
        <SectionTitle
          title='L Rakesh Singh'
          subTitle='Full Stack Developer (MERN)'
        />

        <p className='text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8'>
          Over the past 3+ years, I’ve worked on developing and optimizing web
          applications that focus on performance, scalability, and user
          experience. My core stack includes{' '}
          <strong>
            React.js, Next.js, Javascript, Express.js, Node.js, and MongoDB
          </strong>
          , where I focus on writing maintainable code and designing systems
          that scale efficiently. I’ve improved API performance, handled
          real-time features using WebSockets, and built production-level
          applications with strong backend integration.
        </p>
        <p className='text-sm text-muted-foreground mb-6'>
          Focused on delivering reliable systems, not just writing code.
        </p>

        <div className='flex items-center gap-6 flex-wrap mt-6'>
          <Button
            asChild
            className='bg-primary text-[hsl(var(--accent))] hover:bg-primary/90'
          >
            <a href={RESUME_LINK} target='_blank'>
              <ArrowUpRight className='ml-2 h-4 w-4' />
              Get Resume
            </a>
          </Button>
          <Button asChild variant='default'>
            <Link href='/projects'>
              <Briefcase className='ml-2 h-4 w-4' />
              View Projects
            </Link>
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
      </SectionWrapper>
    </div>
  );
}
