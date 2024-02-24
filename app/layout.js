import { rubik, robotoMono } from '@/app/ui/fonts'
import './globals.css'

export const metadata = {
  title: 'Oscar Sancho',
  description:
    'Portafolio de Oscar Sancho, Full Stack Developer. Construido con Next.js 14.',
  metadataBase: new URL('https://oscarsancho-portfolio.vercel.app/'),
  keywords:
    'Moru App, Full Stack, Developer, JavaScript, React, Next.js, Next 14, Next.js 14, Tailwind CSS, TypeScript, Node.js, React, Redux, Sequelize, PostgreSQL, SQL, HTML, CSS',
  openGraph: {
    type: 'website',
    url: 'https://oscarsancho-portfolio.vercel.app/',
    title: 'Óscar Sancho',
    description: 'Portafolio de Oscar Sancho, Full Stack Developer. Construido con Next.js 14.',
    siteName: 'Oscasr Sancho Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  )
}
