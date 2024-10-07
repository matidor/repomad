import React from 'react'
import Image from 'next/image'

const servicios = [
  {
    titulo: "Diseño y Gestión de Proyectos",
    descripcion: "Ofrecemos un servicio integral de diseño y dirección de proyectos de construcción, asegurando que cada detalle se ejecute a la perfección y cumpla con las expectativas de nuestros clientes."
  },
  {
    titulo: "Cabañas de Madera Personalizadas",
    descripcion: "Creamos cabañas de madera únicas que combinan estética y funcionalidad, ideales para disfrutar de la naturaleza en la costa atlántica. Cada cabaña se adapta a las necesidades y gustos de nuestros clientes."
  },
  {
    titulo: "Asesoramiento en Trámites Municipales",
    descripcion: "Facilitamos el proceso de construcción al encargarnos de los trámites municipales necesarios, garantizando que todo esté en regla y conforme a la normativa local."
  },
  {
    titulo: "Movimiento de Suelos y Preparación de Terrenos",
    descripcion: "Realizamos el movimiento de suelos necesario para preparar el terreno de su proyecto, asegurando una base sólida para la construcción."
  },
  {
    titulo: "Locales Comerciales a Medida",
    descripcion: "Diseñamos y construimos locales comerciales que se adaptan a la identidad de su marca y maximizan la experiencia del cliente, desde la planificación hasta la ejecución."
  },
  {
    titulo: "Planificación e Instalación de Gas",
    descripcion: "Nos encargamos de la planificación y la instalación de sistemas de gas, garantizando seguridad y eficiencia en todos nuestros proyectos."
  },
  {
    titulo: "Construcción General",
    descripcion: "Ofrecemos servicios de construcción general, abarcando desde obras pequeñas hasta grandes proyectos, siempre con la misma calidad y atención al detalle."
  },
  {
    titulo: "Obras Llave en Mano",
    descripcion: "Entregamos proyectos llave en mano, donde nos encargamos de todo el proceso de construcción, para que nuestros clientes solo tengan que disfrutar de su nuevo espacio."
  },
  {
    titulo: "Obras Sanitarias y Eléctricas",
    descripcion: "Implementamos sistemas sanitarios y eléctricos de alta calidad, asegurando que cada obra cuente con las instalaciones necesarias para un funcionamiento óptimo."
  }
]

export default function Servicios() {
  return (
    <section id="servicios" className="relative py-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/serviciosmad.jpg"
          alt="Foto servicios construccion"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Servicios de MAD Arquitectura</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-white bg-opacity-90 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{servicio.titulo}</h3>
                <p className="text-gray-600">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}