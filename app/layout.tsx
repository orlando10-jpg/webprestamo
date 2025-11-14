import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cooperativa de Préstamos - Tu Aliado Financiero',
  description: 'Ofrecemos préstamos personales, microcréditos y soluciones financieras con las mejores tasas del mercado. Confía en nosotros para hacer crecer tu negocio.',
  keywords: 'préstamos, créditos, microcréditos, cooperativa, ahorro, financiamiento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
