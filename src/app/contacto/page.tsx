'use client'

import React, { useState } from 'react'

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
}

export default function ContactoPage() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }))
    }
  }

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {}
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es requerido'
    }
    if (!formData.email.trim()) {
      errors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El email no es válido'
    }
    if (!formData.telefono.trim()) {
      errors.telefono = 'El teléfono es requerido'
    }
    if (!formData.mensaje.trim()) {
      errors.mensaje = 'El mensaje es requerido'
    }
    return errors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true)
      setSubmitStatus(null)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setSubmitStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.' })
          setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
          setErrors({})
        } else {
          throw new Error('Error en la respuesta del servidor')
        }
      } catch (error) {
        console.error('Error al enviar el mensaje:', error)
        setSubmitStatus({ type: 'error', message: 'Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo más tarde.' })
      } finally {
        setIsSubmitting(false)
      }
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <section id='contacto' className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-center">Contáctanos</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 text-center">
            ¿Listo para comenzar tu proyecto? Contáctanos hoy mismo y descubre cómo podemos ayudarte a hacer realidad tu visión.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8" noValidate>
            <div className="mb-6">
              <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.nombre ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                placeholder="Tu nombre"
                required
                aria-invalid={errors.nombre ? 'true' : 'false'}
                aria-describedby={errors.nombre ? 'nombre-error' : undefined}
              />
              {errors.nombre && <p id="nombre-error" className="text-red-500 text-xs italic mt-1">{errors.nombre}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                placeholder="tu@email.com"
                required
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="telefono" className="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.telefono ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                placeholder="Tu número de teléfono"
                required
                aria-invalid={errors.telefono ? 'true' : 'false'}
                aria-describedby={errors.telefono ? 'telefono-error' : undefined}
              />
              {errors.telefono && <p id="telefono-error" className="text-red-500 text-xs italic mt-1">{errors.telefono}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.mensaje ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                rows={4}
                placeholder="Tu mensaje"
                required
                aria-invalid={errors.mensaje ? 'true' : 'false'}
                aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
              ></textarea>
              {errors.mensaje && <p id="mensaje-error" className="text-red-500 text-xs italic mt-1">{errors.mensaje}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-live="polite"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {submitStatus && (
              <div 
                className={`mt-4 p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                role="alert"
                aria-live="assertive"
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}