"use client"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Menu, X, ChevronDown } from "lucide-react"
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
            <main className="flex-1 pt-[104px] transition-all duration-300">
              {children}
            </main>
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
              asChild
            >
              <Link href="https://lurenai.vercel.app" target="_blank" rel="noopener noreferrer">
                Get Started
              </Link>
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="absolute inset-0 bg-white">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="text-2xl font-bold">
                Lumia AI
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <NavLinks mobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavLinks({ mobile = false }) {
  const [showAdvancedMenu, setShowAdvancedMenu] = useState(false)
  const [showResourcesMenu, setShowResourcesMenu] = useState(false)

  const links = [
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "https://github.com/Hqzdev/nextjs-ai", label: "GitHub", external: true },
    { href: "https://lurenai.vercel.app", label: "Get Started", external: true },
  ]

  const advancedLinks = [
    { href: "/api-reference", label: "API Reference" },
    { href: "/integrations", label: "Integrations" },
    { href: "/examples", label: "Examples" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/release-notes", label: "Release Notes" },
  ]

  const resourcesLinks = [
    { href: "/documentation", label: "Documentation" },
    { href: "/blog", label: "Blog" },
    { href: "/community", label: "Community" },
    { href: "/support", label: "Support" },
  ]

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${mobile ? "text-lg py-2" : ""}`}
        >
          {link.label}
        </Link>
      ))}
      
      {/* Advanced Menu */}
      <div className="relative">
        <button
          onClick={() => setShowAdvancedMenu(!showAdvancedMenu)}
          className={`text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1 ${mobile ? "text-lg py-2" : ""}`}
        >
          Advanced
          <ChevronDown className={`h-4 w-4 transition-transform ${showAdvancedMenu ? 'rotate-180' : ''}`} />
        </button>
        <div className={`${mobile ? 'pl-4 mt-2' : 'absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl border border-gray-200/60 overflow-hidden'} transition-all duration-300 ease-in-out ${
          showAdvancedMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          {advancedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block ${mobile ? 'py-2' : 'px-4 py-2 hover:bg-gray-50'} text-gray-700 hover:text-blue-600 transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Resources Menu */}
      <div className="relative">
        <button
          onClick={() => setShowResourcesMenu(!showResourcesMenu)}
          className={`text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1 ${mobile ? "text-lg py-2" : ""}`}
        >
          Resources
          <ChevronDown className={`h-4 w-4 transition-transform ${showResourcesMenu ? 'rotate-180' : ''}`} />
        </button>
        <div className={`${mobile ? 'pl-4 mt-2' : 'absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl border border-gray-200/60 overflow-hidden'} transition-all duration-300 ease-in-out ${
          showResourcesMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          {resourcesLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block ${mobile ? 'py-2' : 'px-4 py-2 hover:bg-gray-50'} text-gray-700 hover:text-blue-600 transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}


import './globals.css'

