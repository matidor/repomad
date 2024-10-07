import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const MontserratFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'MAD Arquitectura - Construcción de Proyectos en Villa Gesell y Costa Atlántica',
  description: 'Diseño y Construcción de Excelencia para Tus Proyectos Arquitectónicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={MontserratFont.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-4">MAD Arquitectura</h3>
                <p className="text-gray-400">Excelencia en diseño y construcción en la Costa Atlántica.</p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
                <nav className="flex flex-col space-y-2">
                  <Link href="/" className="text-gray-400 hover:text-white transition duration-300">Inicio</Link>
                  <Link href="#nosotros" className="text-gray-400 hover:text-white transition duration-300">Nosotros</Link>
                  <Link href="#servicios" className="text-gray-400 hover:text-white transition duration-300">Servicios</Link>
                  <Link href="#contacto" className="text-gray-400 hover:text-white transition duration-300">Contacto</Link>
                </nav>
              </div>
              <div className="w-full md:w-1/3 flex flex-col md:flex-row justify-end items-center">
                <div className="mb-4 md:mb-0 md:mr-8">
                  <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com/profile.php?id=61564215882833"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition duration-300"
                      aria-label="Síguenos en Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://instagram.com/estudiomadarquitectura"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition duration-300"
                      aria-label="Síguenos en Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Image
                    src="/images/logo.png"
                    alt="Logo de MAD Arquitectura"
                    width={120}
                    height={120}
                    className="max-w-[120px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} MAD Arquitectura. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}