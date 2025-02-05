import "./globals.css"
import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import Link from "next/link"
import type React from "react" // Added import for React

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "600", "700"] })

export const metadata: Metadata = {
  title: "Elegance Beauty Boutique",
  description: "Discover timeless beauty with our curated collection of premium cosmetics",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} bg-elegance-cream min-h-screen flex flex-col`}>
        <header className="bg-elegance-charcoal text-elegance-cream p-4">
          <nav className="container mx-auto flex flex-wrap justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-elegance-gold">
              Elegance Beauty Boutique
            </Link>
            <ul className="flex flex-wrap space-x-4 sm:space-x-6">
              <li>
                <Link href="/" className="hover:text-elegance-gold transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-elegance-gold transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-elegance-gold transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/beauty-tips" className="hover:text-elegance-gold transition duration-300">
                  Beauty Tips
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-elegance-gold transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-elegance-charcoal text-elegance-cream p-4 text-center">
          <p>&copy; 2023 Elegance Beauty Boutique. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

