import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Survey Page',
  description: 'QSTN survey marketplace Draft',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar></Navbar>
      <main className={inter.className}>{children}</main>
    </html>
  )
}
