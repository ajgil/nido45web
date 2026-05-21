import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { GlobalAudioPlayer } from '@/components/global-audio-player'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'NIDO45 | Casas Modulares en 45 Días',
  description: 'Casas modulares prefabricadas en Andalucía, Canarias y Baleares. Certificación CE+ISO. Desde 13m² hasta 80m². Envío en 45 días, instalación en horas.',
  keywords: 'casas modulares, casas prefabricadas, container house, casas contenedor, Andalucía, Canarias, Baleares, NIDO45',
  authors: [{ name: 'NIDO45' }],
  openGraph: {
    title: 'NIDO45 | Casas Modulares en 45 Días',
    description: 'Casas modulares prefabricadas con certificación CE+ISO. Distribuidor exclusivo en Andalucía, Canarias y Baleares.',
    url: 'https://nido45.es',
    siteName: 'NIDO45',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a365d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>
          {children}
          <GlobalAudioPlayer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
