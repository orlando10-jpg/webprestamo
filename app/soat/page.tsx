"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaShieldAlt, FaCar, FaHospital, FaMapMarkerAlt } from 'react-icons/fa'
import Footer from '@/components/Footer'

export default function SOAT() {
  const [isBenefitsVisible, setIsBenefitsVisible] = useState(false)
  const [isCtaVisible, setIsCtaVisible] = useState(false)
  
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const observerOptions = { threshold: 0.05, rootMargin: '50px' }

    const benefitsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setIsBenefitsVisible(true) })
    }, observerOptions)

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setIsCtaVisible(true) })
    }, observerOptions)

    if (benefitsRef.current) benefitsObserver.observe(benefitsRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      if (benefitsRef.current) benefitsObserver.unobserve(benefitsRef.current)
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current)
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Header con degradado y forma diagonal */}
      <div className="relative bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 py-20 md:py-28 overflow-hidden">
        {/* Forma diagonal inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 100L1440 100L1440 0L0 60Z" fill="white"/>
          </svg>
        </div>
        
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, white 48%, white 52%, transparent 52%)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-2xl">
            <FaCar className="text-5xl text-red-600" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
            SOAT La Positiva
          </h1>
          <p className="text-2xl text-white/95">
            Tu seguridad en cada viaje
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Todo lo que necesitas saber sobre SOAT La Positiva
          </h2>
        </div>

        {/* Beneficios */}
        <div ref={benefitsRef} className="mb-16">
          <div className={`relative transition-all duration-1000 ${isBenefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            {/* Línea vertical decorativa */}
            <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-orange-600 hidden md:block"></div>
            
            <div className="space-y-8">
              {/* Card principal */}
              <div className="md:ml-20">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                    <span className="text-3xl font-black text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4">
                      Sobre los Beneficios
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      Tu tranquilidad necesita un aliado. Adquiere tu SOAT y obtén las coberturas más completas para protegerte en momentos cruciales:
                    </p>
                  </div>
                </div>

                {/* Coberturas en cards */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 rounded-r-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <FaHospital className="text-red-600 text-2xl" />
                      Cobertura por accidente
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Se brinda toda la atención médica necesaria en caso de lesiones por accidente de tránsito. Para nuestros acompañantes, el seguro comprende la cobertura médica, así como los gastos para la rehabilitación y el traslado de las víctimas.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-600 rounded-r-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <FaShieldAlt className="text-orange-600 text-2xl" />
                      Daño a terceros
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      El seguro cubre la atención médica completa, incluyendo la hospitalización y todos los gastos necesarios para la recuperación de las víctimas.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-600 rounded-r-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                      <FaCheckCircle className="text-amber-600 text-2xl" />
                      Indemnización por invalidez
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      La compañía se responsabiliza de indemnizar por concepto de invalidez permanente o incapacidad temporal de cualquier índole a las víctimas.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 rounded-r-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Por invalidez permanente parcial
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      La compañía se responsabiliza de indemnizar por concepto de invalidez permanente o incapacidad temporal de cualquier índole a las víctimas.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-600 rounded-r-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Por invalidez permanente total
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      La compañía se responsabiliza de indemnizar por concepto de invalidez permanente o incapacidad temporal de cualquier índole a las víctimas.
                    </p>
                  </div>
                </div>

                {/* Montos indemnizatorios */}
                <div className="mt-10 bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                  <h4 className="text-2xl font-black text-gray-900 mb-6">
                    Los montos indemnizatorios son los siguientes:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-semibold">Muerte 4UIT.</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="w-3 h-3 bg-orange-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-semibold">Invalidez permanente c/u hasta 4UIT.</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="w-3 h-3 bg-amber-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-semibold">Incapacidad temporal c/u hasta 1 UIT.</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-semibold">Gastos de Atención médica c/u hasta 5UIT.</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg md:col-span-2">
                      <div className="w-3 h-3 bg-orange-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-semibold">Gastos de Sepelio c/u hasta 1UIT.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requisitos */}
              <div className="md:ml-20 mt-16">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                    <span className="text-3xl font-black text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4">
                      Sobre los Requisitos
                    </h3>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4">
                    <FaCar className="text-4xl text-orange-600" />
                    <p className="text-xl font-bold text-gray-900">
                      Debes tener vehículo propio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dónde adquirirlo */}
              <div className="md:ml-20 mt-16">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                    <span className="text-3xl font-black text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4">
                      ¿Dónde adquirirlo?
                    </h3>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Consigue tu SOAT La Positiva en cualquiera de nuestras agencias. Aquí podrás encontrar el más cercano a ti.
                  </p>
                  <a 
                    href="#agencias" 
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <FaMapMarkerAlt className="text-xl" />
                    <span>Haz click aquí para ver nuestras agencias</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div ref={ctaRef} className={`bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl transition-all duration-1000 ${isCtaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-xl">
            <FaCar className="text-4xl text-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Protege tu vehículo hoy
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Adquiere tu SOAT La Positiva y viaja con tranquilidad
          </p>
          <a 
            href="https://wa.me/51905465005" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
          >
            <span>Adquirir SOAT Ahora</span>
          </a>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
