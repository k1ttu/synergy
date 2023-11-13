import { Inter } from 'next/font/google'
import './globals.css'
import Navbar3 from '@/components/navbar'
import Footer from '@/components/footer'
import backgroundImage from '@/components/background.jpeg'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Synergy',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className} style={
        {
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height:"100vh",
          width:"100vw"
        }
      }>
        <Navbar3/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
