import type { Metadata } from 'next';
import Script from 'next/script';
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
    'I build the systems that move money — payment rails, ledger systems, and high-throughput core infrastructure. A decade scaling distributed fintech platforms processing billions in transactions for 500K+ users across five regulated Southeast Asian markets. Relocating to the UK; open to Senior, Staff, and Principal Engineer roles in Payments, Fintech, and high-scale platform teams.',
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
      'I build the systems that move money — payment rails, ledgers, and high-throughput core infrastructure serving millions across Southeast Asia.',
    url: 'https://itskumaradarsh.github.io',
    siteName: 'Adarsh Kumar',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adarsh Kumar | Senior Staff Software Engineer',
    description:
      'I build the systems that move money — payment rails, ledgers, and high-throughput core infrastructure serving millions across Southeast Asia.',
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white antialiased`}
      >
        <Providers>{children}</Providers>
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "7bf53ded20364bbca3ef80391df724c5"}'
        />
      </body>
    </html>
  );
}
