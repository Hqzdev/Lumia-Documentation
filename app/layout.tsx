"use client"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import { useState } from "react"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <title>Lumia • Documentation</title>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold  bg-gradient-to-r from-blue-500  to-indigo-600 text-transparent bg-clip-text">
              Lumia AI
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="text-purple-600 border-purple-200 hover:bg-purple-50"
                asChild
              >
                <Link href="https://github.com/Hqzdev/nextjs-ai" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button size="sm" className="bg-white text-purple-600 hover:bg-purple-50">
                Get Started
              </Button>
            </div>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks mobile />
            </nav>
            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="text-purple-600 border-purple-200 hover:bg-purple-50 justify-center"
                asChild
              >
                <Link href="https://github.com/vercel/ai" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-white text-purple-600 hover:bg-purple-50 justify-center"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLinks({ mobile = false }) {
  const links = [
    { href: "/installation", label: "Installation" },
    { href: "/api", label: "API" },
    { href: "/examples", label: "Examples" },
    { href: "/tutorials", label: "Tutorials" },
  ]

  return links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`text-gray-700 hover:text-purple-600 font-medium ${mobile ? "text-lg py-2" : ""}`}
    >
      {link.label}
    </Link>
  ))
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© {new Date().getFullYear()} Lumia AI. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              Terms
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              Privacy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}



import './globals.css'

