import { skills } from '@/data/skills';
import SkillBadge from '@/components/shared/SkillBadge';
import PageNavigation from '@/components/shared/PageNavigation';
import { SectionTitle } from '@/components/shared/SectionTitle';

export default function SkillsPage() {
  return (
    <div className='max-w-4xl mx-auto'>
      <SectionTitle
        title='Skills & Tools'
        subTitle='Learned by coding all night and debugging all day!'
      />

      <p className='text-muted-foreground mt-6 mb-10 max-w-3xl'>
        I build fast, scalable, and real-time web applications using React,
        Next.js, and TypeScript on the frontend, paired with Node.js, Express,
        and MongoDB on the backend. From clean UI systems with Tailwind, MUI,
        and shadcn to secure APIs, JWT auth, and WebSocket-powered features, I
        focus on performance, reliability, and seamless user experience—backed
        by modern tooling like Docker, AWS, CI/CD, and Git.
      </p>

      <div className='flex flex-wrap gap-3 mt-10'>
        {skills.flatMap((group) =>
          group.items.map((skill) => <SkillBadge key={skill} label={skill} />),
        )}
      </div>

      <PageNavigation />
    </div>
  );
}
