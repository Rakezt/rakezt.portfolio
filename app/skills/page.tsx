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
        As a full-stack Software Engineer, I specialize in building scalable web
        applications using modern technologies such as Next.js, React, and
        Tailwind CSS.
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
