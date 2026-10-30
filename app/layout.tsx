import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Onest, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const sans = Onest({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-serif', display: 'swap' })

export const metadata: Metadata = {
  title: 'thisis.sambit — Software Engineer & Founder',
  description: 'The internet headquarters of Sambit Nanda: products, tools, resources, and notes from the journey.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#0a0a0a',
}

// Runs before paint so the saved theme applies without a flash. Dark unless the visitor chose light.
const themeScript = `try{if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable} bg-background`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
