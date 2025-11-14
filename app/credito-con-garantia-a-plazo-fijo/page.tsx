"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaShieldAlt, FaChartLine, FaLock } from 'react-icons/fa'
import Footer from '@/components/Footer'

export default function CreditoConGarantia() {
  const [isGridVisible, setIsGridVisible] = useState(false)
  const [isInfoVisible, setIsInfoVisible] = useState(false)
  const [isCtaVisible, setIsCtaVisible] = useState(false)
  
  const gridRef = useRef(null)
  const infoRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const observerOptions = { threshold: 0.05, rootMargin: '50px' }
    const observers = [
      { ref: gridRef, setter: setIsGridVisible },
      { ref: infoRef, setter: setIsInfoVisible },
      { ref: ctaRef, setter: setIsCtaVisible }
    ]

    const createdObservers = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) setter(true) })
      }, observerOptions)
      if (ref.current) observer.observe(ref.current)
      return { observer, ref }
    })

    return () => {
      createdObservers.forEach(({ observer, ref }) => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header minimalista */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaShieldAlt className="text-white text-xl sm:text-2xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                Crédito con Garantía a Plazo Fijo
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">Seguridad y respaldo para tus proyectos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Grid de 2 columnas - Imagen y contenido */}
        <div ref={gridRef} className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 ${isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
          {/* Columna izquierda - Contenido */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es este crédito?</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Es un préstamo respaldado por tu depósito a plazo fijo en nuestra cooperativa. 
                Accede a financiamiento inmediato sin perder los beneficios de tu ahorro.
              </p>
            </div>

            {/* Beneficios destacados */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Ventajas principales</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-green-600 text-sm" />
                  </div>
                  <span className="text-gray-700">Aprobación inmediata</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-green-600 text-sm" />
                  </div>
                  <span className="text-gray-700">Tasas de interés preferenciales</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-green-600 text-sm" />
                  </div>
                  <span className="text-gray-700">Tu ahorro sigue generando rendimientos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-green-600 text-sm" />
                  </div>
                  <span className="text-gray-700">Sin comisiones ocultas</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-black text-blue-600">90%</p>
                <p className="text-sm text-gray-600 mt-1">Del depósito</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-black text-blue-600">24h</p>
                <p className="text-sm text-gray-600 mt-1">Aprobación</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-black text-blue-600">0%</p>
                <p className="text-sm text-gray-600 mt-1">Comisiones</p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="lg:order-last order-first">
            <div className="relative w-full h-96 lg:h-full min-h-[400px] transition-transform duration-300 hover:scale-105">
              <Image 
                src="/image2.png" 
                alt="Crédito con Garantía a Plazo Fijo" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Sección de información detallada */}
        <div ref={infoRef} className="mb-16">
          <h2 className={`text-3xl font-black text-gray-900 mb-8 text-center transition-all duration-1000 ${isInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            Información Detallada
          </h2>

          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            {/* Card 1 - Beneficios */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-100 hover:border-blue-300 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sobre los Beneficios</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Acceso hasta el 90% del valor de tu depósito a plazo fijo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Tasas de interés competitivas y preferenciales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Tu ahorro sigue generando rendimientos mientras usas el crédito</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Proceso de aprobación inmediato y sin complicaciones</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Requisitos */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-100 hover:border-blue-300 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <FaLock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sobre los Requisitos</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>DNI del titular del depósito</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Certificado de depósito a plazo fijo vigente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Solicitud de crédito firmada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Ser socio de la cooperativa Santa Isabel</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Unirse */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-lg text-white">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">¿Aún no tienes un depósito?</h3>
              <p className="text-white/90 mb-6">
                Abre tu depósito a plazo fijo con nosotros y accede a este beneficio exclusivo.
              </p>
              <a 
                href="https://wa.me/51905465005" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Más Información
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 md:p-14 text-center transition-all duration-1000 ${isCtaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            ¿Listo para solicitar tu crédito?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Aprovecha tu depósito a plazo fijo y obtén el financiamiento que necesitas
          </p>
          <a 
            href="https://wa.me/51905465005" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Solicitar Ahora</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
