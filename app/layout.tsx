import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alsatech - Desarrollo de Software Empresarial a la Medida',
  description: 'Transformamos ideas en software empresarial. Desarrollo de software a la medida para empresas que buscan digitalizar y optimizar sus procesos. Implementaciones de 60-90 días con calidad enterprise.',
  keywords: ['desarrollo de software', 'software empresarial', 'software a la medida', 'desarrollo web', 'aplicaciones móviles', 'inteligencia artificial', 'business intelligence', 'Culiacán', 'Sinaloa', 'México'],
  authors: [{ name: 'Alsatech' }],
  openGraph: {
    title: 'Alsatech - Desarrollo de Software Empresarial a la Medida',
    description: 'Transformamos ideas en software empresarial. Implementaciones de 60-90 días con calidad enterprise.',
    url: 'https://alsatechologies.com',
    siteName: 'Alsatech',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alsatech - Desarrollo de Software Empresarial',
    description: 'Transformamos ideas en software empresarial. Implementaciones de 60-90 días con calidad enterprise.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-bg-primary text-text">
        {children}
      </body>
    </html>
  )
}
