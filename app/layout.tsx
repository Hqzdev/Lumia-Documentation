"use client"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import { useState, ReactNode } from "react"
import AnimatedGradient from "@/components/animated-gradient"
import FloatingElements from "@/components/floating-elements"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <title>Lumia • Documentation</title>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AnimatedGradient />
          <FloatingElements />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-[104px]">{children}</main>
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[700px] z-50 bg-white/80 border-2 border-gray-200 backdrop-blur-md  rounded-3xl">
      <div className="w-full mx-auto px-4 sm:px-5 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text"
            >
              Lumia AI
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-center flex-1 ml-4">
            <div className="flex items-center justify-center space-x-5">
              <NavLinks />
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              asChild
            >
              <Link href="https://github.com/Hqzdev/nextjs-ai" target="_blank" rel="noopener noreferrer">
                
                GitHub
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl text-white hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/80 backdrop-blur-md rounded-b-3xl">
          <div className="w-full mx-auto px-4 sm:px-5 lg:px-6 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks mobile />
            </nav>
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-blue-600 transition-colors justify-center"
                asChild
              >
                <Link href="https://github.com/vercel/ai" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-3xl hover:opacity-90 transition-opacity justify-center"
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
      className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${mobile ? "text-lg py-2" : ""}`}
    >
      {link.label}
    </Link>
  ))
}


import './globals.css'

