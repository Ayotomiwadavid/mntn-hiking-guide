import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Phoenix Consulting – Strategy & Business Growth Experts',
  description:
    'Phoenix Consulting is a modern business consultancy helping companies scale with strategy, insight, and measurable results. Explore our services and get in touch today.',
  keywords: [
    'consultancy',
    'business consulting',
    'strategy',
    'growth solutions',
    'management consulting',
    'professional services',
  ],
  authors: [{ name: 'David O.', url: 'https://mntn-hiking-guide-six.vercel.app/' }],
  openGraph: {
    title: 'Phoenix Consulting – Strategy & Business Growth Experts',
    description:
      'Discover Phoenix Consulting — your partner in business strategy, innovation, and sustainable growth.',
    url: 'https://mntn-hiking-guide-six.vercel.app/',
    siteName: 'Phoenix Consulting',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phoenix Consulting – Strategy & Business Growth Experts',
    description:
      'A professional one-page consultancy website designed to showcase services and expertise.',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
