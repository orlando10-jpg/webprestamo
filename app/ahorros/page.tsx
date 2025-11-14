"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaPiggyBank, FaChartLine, FaLock, FaCoins } from 'react-icons/fa'
import Footer from '@/components/Footer'

export default function Ahorros() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isProductsVisible, setIsProductsVisible] = useState(false)
  const [isReqVisible, setIsReqVisible] = useState(false)
  const [isCtaVisible, setIsCtaVisible] = useState(false)
  
  const heroRef = useRef(null)
  const productsRef = useRef(null)
  const reqRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '50px'
    }

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsHeroVisible(true)
      })
    }, observerOptions)

    const productsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsProductsVisible(true)
      })
    }, observerOptions)

    const reqObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsReqVisible(true)
      })
    }, observerOptions)

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsCtaVisible(true)
      })
    }, observerOptions)

    if (heroRef.current) heroObserver.observe(heroRef.current)
    if (productsRef.current) productsObserver.observe(productsRef.current)
    if (reqRef.current) reqObserver.observe(reqRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      const heroEl = heroRef.current
      const productsEl = productsRef.current
      const reqEl = reqRef.current
      const ctaEl = ctaRef.current
      
      if (heroEl) heroObserver.unobserve(heroEl)
      if (productsEl) productsObserver.unobserve(productsEl)
      if (reqEl) reqObserver.unobserve(reqEl)
      if (ctaEl) ctaObserver.unobserve(ctaEl)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Imagen y mensaje lado a lado */}
        <div ref={heroRef} className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen izquierda */}
          <div className={`relative w-full h-64 md:h-96 lg:h-[450px] transition-all duration-1000 hover:scale-105 ${isHeroVisible ? 'opacity-100 -translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-90'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <Image 
              src="/image2.png" 
              alt="Ahorros" 
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mensaje derecha */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isHeroVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-90'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              Levántate, sonríe y sigue adelante
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Si has tomado la decisión de empezar a ahorrar, lo mejor que puedes hacer es crear una cuenta de ahorros en Cooperativa Santa Isabel para que tu dinero esté seguro.
            </p>
            <a 
              href="https://wa.me/51905465005" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <FaPiggyBank className="text-xl" />
              <span>Empieza a ahorrar aquí</span>
            </a>
          </div>
        </div>

        {/* Título sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Todo lo que necesitas saber de Ahorros
          </h2>
        </div>

        {/* Productos de Ahorro */}
        <div ref={productsRef} className="mb-16">
          <div className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-green-100 transition-all duration-1000 ${isProductsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-white">1</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                  Nuestros Productos de Ahorro
                </h3>
              </div>
            </div>

            {/* Ahorro Libre */}
            <div className="mb-10">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 md:p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaCoins className="text-green-600 text-3xl" />
                  <h4 className="text-2xl font-black text-gray-900">AHORRO LIBRE</h4>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  No tienes pretextos para ahorrar de verdad. Con ahorro libre obtienes alta rentabilidad, plazos acorde a tus necesidades y preferencias, sin pagar mantenimiento, realizando operaciones con costo cero y administrando tu dinero de manera fácil y sin problemas.
                </p>
                
                <div className="bg-white rounded-xl p-6">
                  <h5 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Beneficios:
                  </h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-600 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Préstamos rápidos y simples.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-600 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Puedes usar el dinero en lo que desees.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-600 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Cero costos en mantenimiento.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-600 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Dinero siempre a tu alcance cuando lo necesites.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Depósito a Plazo Fijo */}
            <div className="mb-10">
              <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-6 md:p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaLock className="text-teal-600 text-3xl" />
                  <h4 className="text-2xl font-black text-gray-900">DEPÓSITO A PLAZO FIJO</h4>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Descubre la manera más segura para rentabilizar tu dinero, una opción sencilla de obtener mayores beneficios en poco tiempo y en el plazo que más se adapte a tus necesidades.
                </p>
                
                <div className="bg-white rounded-xl p-6">
                  <h5 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Beneficios:
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-teal-600 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Tu dinero crece más y seguro con nosotros.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-teal-600 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Elige el plazo que más te convenga.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-teal-600 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Tasas preferenciales de acuerdo a tus depósitos realizado.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-teal-600 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Los socios que se encuentran al día en sus aportaciones pueden solicitar créditos o avalar préstamos.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-teal-600 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Tasas preferenciales de acuerdo con tus aportaciones.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-teal-600 text-lg mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Los aportes son derivados a tu propia cuenta de aportaciones.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aportaciones */}
            <div>
              <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaChartLine className="text-emerald-600 text-3xl" />
                  <h4 className="text-2xl font-black text-gray-900">APORTACIONES</h4>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Las aportaciones conforman el capital social del patrimonio de la cooperativa y es el deber del socio cumplir con dichas aportaciones para el correcto funcionamiento de Santa Isabel. Aportando se cumple la participación del socio en la cooperativa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Requisitos */}
        <div ref={reqRef} className="mb-16">
          <div className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-emerald-100 transition-all duration-1000 ${isReqVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-white">2</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                  Sobre los Requisitos
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-green-50 p-4 rounded-xl">
                <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">DNI del titular</span>
              </div>
              <div className="flex items-start gap-4 bg-green-50 p-4 rounded-xl">
                <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Copia del último recibo de luz o agua del domicilio.</span>
              </div>
              <div className="flex items-start gap-4 bg-green-50 p-4 rounded-xl">
                <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Presentar documentos de negocio como boletas o recibos que sustenten ingresos.</span>
              </div>
              <div className="flex items-start gap-4 bg-green-50 p-4 rounded-xl">
                <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Otros que sean requeridos por el asesor de negocios</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div ref={ctaRef} className={`bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-10 md:p-14 text-center transition-all duration-1000 ${isCtaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
          <div className="flex items-start gap-6 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto">
              <span className="text-3xl font-black text-white">3</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            ¿Aún no eres socio de Cooperativa Santa Isabel?
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Te ayudamos a encontrar la mejor cuenta para ti.
          </p>
          <a 
            href="https://wa.me/51905465005" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-green-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
          >
            <FaPiggyBank className="text-2xl" />
            <span>Abre tu Cuenta de Ahorros</span>
          </a>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
