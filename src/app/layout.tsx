import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Providers } from '@/components/Providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Adarsh Kumar | Senior Staff Software Engineer',
  description:
    'Software engineer with 10+ years building financial platforms, payment systems, and distributed systems at scale across Southeast Asia. Specialized in platform reliability, high-throughput backend services, and engineering leadership.',
  keywords: [
    'Senior Staff Engineer',
    'Software Engineer',
    'Distributed Systems',
    'Fintech',
    'Payment Systems',
    'Platform Engineering',
    'Adarsh Kumar',
  ],
  authors: [{ name: 'Adarsh Kumar' }],
  openGraph: {
    title: 'Adarsh Kumar | Senior Staff Software Engineer',
    description:
      'Engineering financial infrastructure that serves millions across Southeast Asia.',
    url: 'https://itskumaradarsh.github.io',
    siteName: 'Adarsh Kumar',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adarsh Kumar | Senior Staff Software Engineer',
    description:
      'Engineering financial infrastructure that serves millions across Southeast Asia.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://itskumaradarsh.github.io'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
