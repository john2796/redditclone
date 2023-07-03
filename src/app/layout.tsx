import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reddit clone',
  description: 'A Reddit clone built with Next.js and TypeScript'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

      <body>
        {/* provider */}
        {/* navbar */}
        <div>{children}</div>
        {/* toaster handle error toast | info | message */}
      </body>
    </html>
  )
}
