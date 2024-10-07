'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'servicios', 'contacto']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const navItems = [
    { name: 'Inicio', path: 'inicio', action: () => scrollToSection('inicio') },
    { name: 'Nosotros', path: 'nosotros', action: () => scrollToSection('nosotros') },
    { name: 'Servicios', path: 'servicios', action: () => scrollToSection('servicios') },
    { name: 'Contacto', path: 'contacto', action: () => scrollToSection('contacto') },
  ]

  const isActive = (item: { path: string }) => activeSection === item.path

  return (
    <nav className="bg-[#1d1c1d] shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link href="/" className="flex items-center" aria-label="Ir a la página de inicio">
              <Image
                src="/images/logo.png"
                alt="Logo de MAD Arquitectura"
                width={160}
                height={160}
                className="mr-2"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault()
                  item.action()
                }}
                className={`text-sm font-medium ${isActive(item) ? 'text-[#f0f3f7]' : 'text-[#d0d3d6]'
                  } hover:text-[#f0f3f7] transition duration-300`}
                aria-label={`Ir a ${item.name}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              className="outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-label="Abrir menú de navegación"
            >
              <svg
                className="w-6 h-6 text-[#495057]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              item.action()
              setIsOpen(false)
            }}
            className="block w-full text-left py-2 px-4 text-sm text-[#d0d3d6] bg-[#1d1c1d] hover:bg-[#333] hover:text-white transition duration-300"
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  )
}
