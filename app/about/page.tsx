import PageNavigation from '@/components/shared/PageNavigation';
import { SectionTitle } from '@/components/shared/SectionTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function About() {
  return (
    <div className='max-w-4xl mx-auto'>
      <SectionWrapper>
        <SectionTitle
          title='About L Rakesh Singh'
          subTitle='    More than just a title—let’s dive deeper!'
        />

        <p className='text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8'>
          I am a Software Engineer focused on building modern full-stack web
          applications. I enjoy developing responsive and scalable solutions
          using technologies such as Next.js, React.js, TypeScript, Redux,
          Tailwind CSS. My interest in technology started with a curiosity about
          solving real-world problems through software, which quickly evolved
          into a passion for creating intuitive and user-centric digital
          experiences. I am currently expanding my backend development skills
          with Node.js, Express, Socket.IO and Mongo DB to build powerful and
          reliable server-side systems. I thrive in collaborative environments,
          enjoy learning new tools and technologies, and aim to contribute to
          impactful projects that create meaningful value for users.
        </p>

        <PageNavigation />
      </SectionWrapper>
    </div>
  );
}
