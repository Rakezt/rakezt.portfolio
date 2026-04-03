import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/zHeader';
import { ThemeProvider } from 'next-themes';
import CommandMenu from '@/components/shared/CommandMenu';
import PageWrapper from '@/components/shared/PageWrapper';
import ScrollToTop from '@/components/shared/ScrollToTop';

export const metadata: Metadata = {
  title: 'Rakezt | Full Stack Developer',
  description:
    'Full Stack Developer portfolio of Rakezt specializing in React, Next.js, Node.js, and modern scalable web applications.',

  metadataBase: new URL('https://lrakeztportfolio.netlify.app'),

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
  },
  verification: {
    google: 'UWwIyHYA7yZuPrCSAi-adc0thxjBdjoRTMkpqnfSv_4',
  },

  openGraph: {
    title: 'Rakezt Portfolio',
    description: 'Full Stack Developer - React, Next.js projects',
    url: 'https://lrakeztportfolio.netlify.app',
    siteName: 'Rakezt Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Rakezt Portfolio',
    description: 'Check out my developer portfolio',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ScrollToTop />
          <Header />
          <CommandMenu />
          <div className='flex'>
            <div className='hidden md:block'>
              <Sidebar />
            </div>
            <main className='flex-1 md:ml-64 md:py-12 md:px-6 py-8 px-4'>
              <PageWrapper>
                <div className='max-w-5xl mx-auto w-full'>{children}</div>
              </PageWrapper>
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
