'use client';
const Footer = () => {
  return (
    <footer className='border-t my-10 pt-5 text-center text-sm text-muted-foreground '>
      ©{new Date().getFullYear()} - Designed and developed with precision using
      Next.js, TypeScript, Framer Motion, Tailwind CSS, and shadcn/ui.
    </footer>
  );
};
export default Footer;
