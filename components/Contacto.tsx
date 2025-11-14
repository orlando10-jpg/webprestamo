"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'

export default function Contacto() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      const sectionEl = sectionRef.current
      if (sectionEl) {
        observer.unobserve(sectionEl)
      }
    }
  }, [])
  return (
    <section ref={sectionRef} id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
              Estamos para ti
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary-800 to-blue-900 mb-4 md:mb-6">
            Contactanos
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Estamos aqui para ayudarte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            className={`flex justify-center items-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-90'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            <Image 
              src="/image2.png" 
              alt="Contacto" 
              width={1000}
              height={1000}
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-pointer"
              priority
            />
          </div>

          <div 
            className={`bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-90'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            <form className="space-y-5 md:space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm md:text-base font-bold text-gray-700 mb-3">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-primary-600 to-blue-600 rounded-full"></span>
                  Nombre completo
                </label>
                <input type="text" className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-gray-200 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm md:text-base font-medium hover:border-primary-300" placeholder="Tu nombre" />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm md:text-base font-bold text-gray-700 mb-3">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
                  Email
                </label>
                <input type="email" className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-gray-200 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm md:text-base font-medium hover:border-primary-300" placeholder="tu@email.com" />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm md:text-base font-bold text-gray-700 mb-3">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                  Mensaje
                </label>
                <textarea rows={5} className="w-full px-4 md:px-5 py-3 md:py-4 border-2 border-gray-200 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 resize-none text-sm md:text-base font-medium hover:border-primary-300" placeholder="En que podemos ayudarte"></textarea>
              </div>
              
              <button type="submit" className="group relative w-full bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 hover:from-primary-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden text-base md:text-lg">
                <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FaPaperPlane className="text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  Enviar mensaje
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}