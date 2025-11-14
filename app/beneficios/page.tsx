"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaUserFriends, FaGift, FaShieldAlt, FaHeart, FaStar, FaTrophy } from 'react-icons/fa'
import Footer from '@/components/Footer'

export default function Beneficios() {
  const [isCardsVisible, setIsCardsVisible] = useState(false)
  const [isMoreVisible, setIsMoreVisible] = useState(false)
  const [isCtaVisible, setIsCtaVisible] = useState(false)
  
  const cardsRef = useRef(null)
  const moreRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const observerOptions = { threshold: 0.05, rootMargin: '50px' }

    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setIsCardsVisible(true) })
    }, observerOptions)

    const moreObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setIsMoreVisible(true) })
    }, observerOptions)

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setIsCtaVisible(true) })
    }, observerOptions)

    if (cardsRef.current) cardsObserver.observe(cardsRef.current)
    if (moreRef.current) moreObserver.observe(moreRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current)
      if (moreRef.current) moreObserver.unobserve(moreRef.current)
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current)
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero con wave */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 pb-32 pt-20 overflow-hidden">
        {/* Patrón decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Nuestros Beneficios
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Disfruta de ventajas exclusivas al ser parte de nuestra familia
          </p>
        </div>

        {/* Wave decorativa */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 80C1200 70 1320 50 1380 40L1440 30V120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20">
        
        {/* Cards de beneficios principales con imágenes */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Beneficio 1 */}
          <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-1000 ${isCardsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/image2.png" 
                alt="Tasas Preferenciales" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <FaStar className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Tasas Preferenciales</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Accede a tasas de interés competitivas y especiales diseñadas exclusivamente para nuestros socios.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Descuentos por pronto pago</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Tasas especiales para antiguos socios</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Beneficio 2 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/image3.png" 
                alt="Sorteos Mensuales" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <FaGift className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Sorteos Mensuales</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Participa en sorteos exclusivos todos los meses y gana increíbles premios.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Premios en efectivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Electrodomésticos y más</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Beneficio 3 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/image2.png" 
                alt="Convenios Institucionales" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <FaUserFriends className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Convenios Institucionales</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Disfruta de descuentos y beneficios en nuestras empresas aliadas a nivel nacional.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Descuentos en salud y educación</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Beneficios en comercios asociados</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Beneficio 4 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/image3.png" 
                alt="Seguridad y Confianza" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <FaShieldAlt className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Seguridad y Confianza</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Tu dinero está protegido con los más altos estándares de seguridad financiera.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Respaldo de la SBS</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Atención personalizada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Beneficios adicionales en lista */}
        <div ref={moreRef} className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 md:p-14 mb-16 transition-all duration-1000 ${isMoreVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">
            Más Beneficios Exclusivos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <FaTrophy className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Programas de Lealtad</h3>
              <p className="text-gray-600">Acumula puntos y canjéalos por beneficios exclusivos.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bienestar Familiar</h3>
              <p className="text-gray-600">Seguros y protección para toda tu familia.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Asesoría Financiera</h3>
              <p className="text-gray-600">Recibe orientación personalizada para tus finanzas.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl transition-all duration-1000 ${isCtaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            ¿Listo para disfrutar de todos los beneficios?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a nuestra cooperativa y empieza a aprovechar todas las ventajas hoy mismo
          </p>
          <a 
            href="https://wa.me/51905465005" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
          >
            <FaGift className="text-2xl" />
            <span>Únete Ahora</span>
          </a>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
