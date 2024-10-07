'use client'

import { MessageCircle, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Servicios from './servicios/page'
import Contacto from './contacto/page'
import Nosotros from './nosotros/page'
import { useState, useEffect } from 'react'


export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="relative">
      <div className="relative h-screen">
        <Image
          src="/images/casabosque.jpg"
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-1" />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
          <div className="max-w-5xl text-center px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-12 text-white">
              MAD Arquitectura y Construcción Diseño, Construcción y Remodelación. Obras Civiles y Comerciales en Villa Gesell, Pinamar y la Costa Atlántica.
            </h1>
            <p className="text-lg md:text-2xl mb-12 text-white">
              Con más de 15 años de experiencia, en MAD Arquitectura transformamos tus ideas en realidad. Ofrecemos soluciones integrales de construcción y remodelación, con un equipo de profesionales comprometidos en garantizar resultados de alta calidad en cada proyecto. Nos especializamos en proyectos de viviendas, locales comerciales y reformas en las zonas de Villa Gesell, Pinamar, Mar de las Pampas y la Costa Atlántica.
            </p>
            <Link href="#contacto" className="inline-block bg-white text-[#212529] py-4 px-8 rounded-lg text-lg font-semibold hover:bg-[#E9ECEF] transition duration-300">
              Contáctanos y Confía en Nosotros para Tu Proyecto
            </Link>
          </div>
        </div>
      </div>

      <Nosotros/>

      <Servicios />

      <Contacto />

      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-4 z-20">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp size={24} />
          </button>
        )}
        <a
          href="https://wa.me/2255628257"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </main>
  )
}