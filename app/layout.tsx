import './globals.css'
import { Merriweather } from 'next/font/google'

const merri = Merriweather({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
  title: 'Introspect',
  description: 'Self Evaluation app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={merri.className}> 
      <body className='text-slate-600'>{children}</body>
    </html>
  )
}
