import { Github, Linkedin } from 'lucide-react';

export default function SocialLink() {
  return (
    <div className='flex gap-4'>
      <a href='https://github.com/Rakezt'>
        <Github size={20} />
      </a>
      <a href='https://www.linkedin.com/in/lrakeshsingh/'>
        <Linkedin size={20} />
      </a>
    </div>
  );
}
