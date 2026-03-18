'use client';
const Footer = () => {
  return (
    <footer className='border-t m-10 pt-5 text-center text-sm text-muted-foreground'>
      ©{new Date().getFullYear()} - Built with Next.js, shadcn/ui and Tailwind
      CSS
    </footer>
  );
};
export default Footer;
