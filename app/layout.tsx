import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import ModalProvider from '@/Providers/ModalProvider'

import './globals.css'
import ToastProvider from '@/Providers/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Admin',
  description: 'Ecommerce Admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          <ModalProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>

  )
}
