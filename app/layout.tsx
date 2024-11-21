import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather Dashboard',
  description: 'Check the weather for any location',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#13111C]`}>
        <div className="mx-auto w-full max-w-2xl p-4">
          {children}
        </div>
      </body>
    </html>
  )
}