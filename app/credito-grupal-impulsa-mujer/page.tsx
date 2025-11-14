"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaUsers, FaHandHoldingHeart } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import Footer from '@/components/Footer'

export default function CreditoGrupalImpulsaMujer() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isBenefitsVisible, setIsBenefitsVisible] = useState(false)
  const [isInfoVisible, setIsInfoVisible] = useState(false)
  const [isCtaVisible, setIsCtaVisible] = useState(false)
  
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const infoRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const observerOptions = { threshold: 0.05, rootMargin: '50px' }
    const observers = [
      { ref: heroRef, setter: setIsHeroVisible },
      { ref: benefitsRef, setter: setIsBenefitsVisible },
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
    <main className="min-h-screen bg-white">
      {/* Hero Section con imagen de fondo */}
      <div className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide border border-white/30">
                Programa Especial para Mujeres
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Impulsa Mujer
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed">
              Crédito Grupal diseñado para mujeres emprendedoras que quieren crecer juntas
            </p>
            <a 
              href="https://wa.me/51905465005" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
            >
              <FaHandHoldingHeart className="text-2xl" />
              <span>Únete Ahora</span>
            </a>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        {/* Imagen y descripción */}
        <div ref={heroRef} className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative order-2 md:order-1">
            <div className="relative w-full h-80 md:h-96 lg:h-[450px] transition-transform duration-300 hover:scale-105">
              <Image 
                src="/image3.png" 
                alt="Crédito Grupal Impulsa Mujer" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              ¿Qué es <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Impulsa Mujer</span>?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Un programa de crédito grupal diseñado especialmente para grupos de 5 a 20 mujeres emprendedoras que desean impulsar sus negocios con el respaldo de la garantía solidaria.
            </p>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border-l-4 border-pink-600">
              <p className="text-gray-800 font-semibold">
                ✨ Más de 5,000 mujeres ya transformaron sus vidas con este programa
              </p>
            </div>
          </div>
        </div>

        {/* Características principales en cards horizontales */}
        <div ref={benefitsRef} className="mb-20">
          <h2 className={`text-3xl md:text-4xl font-black text-center text-gray-900 mb-12 transition-all duration-1000 ${isBenefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            Beneficios del Programa
          </h2>
          
          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isBenefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="bg-white border-2 border-pink-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apoyo Grupal</h3>
              <p className="text-gray-600">Red de mujeres emprendedoras que se apoyan mutuamente para crecer juntas.</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FaHandHoldingHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capacitación Gratis</h3>
              <p className="text-gray-600">Talleres de gestión empresarial y desarrollo personal sin costo adicional.</p>
            </div>

            <div className="bg-white border-2 border-indigo-200 rounded-2xl p-8 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tasas Preferenciales</h3>
              <p className="text-gray-600">Condiciones especiales y tasas de interés competitivas para mujeres.</p>
            </div>
          </div>
        </div>

        {/* Sección de información en tabs visuales */}
        <div ref={infoRef} className="mb-20">
          <h2 className={`text-3xl md:text-4xl font-black text-center text-gray-900 mb-12 transition-all duration-1000 ${isInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            Todo lo que necesitas saber para ser parte de IMPULSA MUJER
          </h2>

          <div className="space-y-6">
            {/* Beneficios */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black mb-6">Sobre los Beneficios</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-white text-lg mt-1 flex-shrink-0" />
                      <p className="text-white/95 text-lg">Préstamos catorcenales a partir de S/.800 para impulsar tu negocio.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-white text-lg mt-1 flex-shrink-0" />
                      <p className="text-white/95 text-lg">Aprobación inmediata una vez presentados los documentos del grupo.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-white text-lg mt-1 flex-shrink-0" />
                      <p className="text-white/95 text-lg">Pago de cuota catorcenal (14 días) con asesoría personalizada.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-white text-lg mt-1 flex-shrink-0" />
                      <p className="text-white/95 text-lg">Crédito de fácil acceso.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-white text-lg mt-1 flex-shrink-0" />
                      <p className="text-white/95 text-lg">Participas de nuestros sorteos, beneficios y convenios institucionales.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Requisitos */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Sobre los Requisitos</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">DNI del titular.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">Copia del último recibo de luz o agua del domicilio.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">Presentar documentos de negocio como boletas o recibos que sustenten ingresos.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">Sustentar el destino del crédito solicitado.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">Otros que sean requeridos por el asesor de negocios.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unirse */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 border-2 border-purple-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                    ¿Aún no eres socia de Impulsa Mujer?
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Pues ahora tienes otra razón para unirte a Santa Isabel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div ref={ctaRef} className={`bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl transition-all duration-1000 ${isCtaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            ¿Lista para Emprender Juntas?
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Únete a miles de mujeres que ya están transformando sus vidas con Impulsa Mujer
          </p>
          <a 
            href="https://wa.me/51905465005" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
