import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isles Of The Arcane',
  description: 'Isles of the Arcane is an exhilarating MOBA hero shooter game set in the mystical world of Pirate Nation. Developed as a mod by Meraki OnChain Devs, it combines intense team-based battles with strategic hero abilities, offering players a unique blend of action and fantasy. Choose your hero, master powerful spells, and compete in thrilling pirate-themed arenas. Dive into a universe of magic, adventure, and tactical combat in Isles of the Arcane!',
  keywords: ['MOBA', 'hero shooter', 'Pirate Nation', 'Proof of Play', 'Isles of the Arcane', 'multiplayer game', 'fantasy action', 'tactical combat', 'pirate game', 'Meraki OnChain Devs'],
  openGraph: {
    title: 'Isles Of The Arcane',
    description: 'An exhilarating MOBA hero shooter set in Pirate Nation. Choose your hero, master spells, and dive into tactical combat!',
    url: 'https://islesofthearcane.com',
    type: 'website',
    images: [
      {
        url: 'https://islesofthearcane.com/images/background2.png',
        width: 1200,
        height: 630,
        alt: 'Isles of the Arcane - MOBA Hero Shooter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isles Of The Arcane',
    description: 'Dive into the mystical world of Pirate Nation with Isles of the Arcane, an action-packed MOBA hero shooter game.',
    images: ['https://islesofthearcane.com/images/background2.png'],
  },
  canonical: 'https://islesofthearcane.com',
  author: 'Meraki OnChain Devs',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a1a1a',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
