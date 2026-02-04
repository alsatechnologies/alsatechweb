'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Detectar cuando pasamos el hero
      const heroHeight = window.innerHeight
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#industrias', label: 'Industrias' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#casos', label: 'Casos' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ]

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 96 // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 9999 }}
      className="backdrop-blur-sm border-b border-white/10 transition-all duration-300 bg-bg-primary/20"
    >
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="alsatech"
              width={180}
              height={50}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-white hover:text-accent transition-colors font-medium uppercase text-base tracking-wider cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Button - Right */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#contacto"
              onClick={(e) => handleScrollTo(e, '#contacto')}
              className="btn-primary cursor-pointer"
            >
              Obtén tu análisis inicial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-bg-primary/95 backdrop-blur-sm"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="block text-white hover:text-accent transition-colors font-medium uppercase text-sm tracking-wider py-2 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  onClick={(e) => handleScrollTo(e, '#contacto')}
                  className="btn-primary inline-block mt-4 cursor-pointer"
                >
                  Agendar Consultoría
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
