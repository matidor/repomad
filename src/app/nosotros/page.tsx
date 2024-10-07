'use client'

import Image from 'next/image'

export default function Nosotros() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 py-12">
      
      <section id='nosotros' className="bg-white w-full py-16 px-4 md:px-12 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Sobre Nosotros</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Con más de 15 años de experiencia en el ámbito de la construcción, en MAD Arquitectura transformamos ideas en realidad. 
            Nos especializamos en proyectos civiles y comerciales en la costa atlántica, con un enfoque en la excelencia, precisión y atención al detalle.
          </p>
        </div>
      </section>

      
      <section className="max-w-5xl mx-auto mt-12 px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">Nuestra Filosofía</h2>
        <p className="text-lg text-gray-600 mb-12">
          Creemos en la importancia de un trabajo bien hecho y en el valor de crear espacios únicos y funcionales. Desde el diseño hasta la entrega final, nuestro equipo está comprometido en cada fase del proyecto, garantizando que cada cliente obtenga resultados excepcionales.
        </p>
        <Image
          src="/images/2.png"
          alt="Equipo de MAD Arquitectura"
          width={1200}
          height={800}
          className="rounded-lg shadow-lg"
        />
      </section>

      
      <section className="bg-white w-full py-16 mt-12 px-4 md:px-12 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Profesionalismo</h3>
              <p className="text-gray-600">
                Nos enorgullece nuestro enfoque profesional y meticuloso en cada proyecto, asegurando la entrega de resultados de alta calidad.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Transparencia</h3>
              <p className="text-gray-600">
                Mantenemos una comunicación abierta y clara con nuestros clientes, informando de cada paso y manteniendo la confianza en cada etapa del proceso.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovación</h3>
              <p className="text-gray-600">
                Estamos en constante búsqueda de nuevas ideas y soluciones innovadoras que se adapten a las necesidades específicas de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
