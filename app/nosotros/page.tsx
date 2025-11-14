"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye, FaHeart, FaLightbulb, FaHandshake, FaUsers, FaTrophy, FaRocket, FaShieldAlt } from 'react-icons/fa'
import Footer from '@/components/Footer'

export default function Nosotros() {
  const [isQuienesVisible, setIsQuienesVisible] = useState(false)
  const [isVisionVisible, setIsVisionVisible] = useState(false)
  const [isValoresVisible, setIsValoresVisible] = useState(false)
  const [isPropositoVisible, setIsPropositoVisible] = useState(false)
  const [isCtaVisible, setIsCtaVisible] = useState(false)
  
  const quienesRef = useRef(null)
  const visionRef = useRef(null)
  const valoresRef = useRef(null)
  const propositoRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const observerOptions = { threshold: 0.05, rootMargin: '50px' }

    const observers = [
      { ref: quienesRef, setter: setIsQuienesVisible },
      { ref: visionRef, setter: setIsVisionVisible },
      { ref: valoresRef, setter: setIsValoresVisible },
      { ref: propositoRef, setter: setIsPropositoVisible },
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
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image 
          src="/image2.png" 
          alt="Crédito Fácil" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-900/90 to-purple-900/80"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              CRÉDITO FÁCIL
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 font-light">
              Construyendo sueños, impulsando vidas
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quiénes somos */}
        <div ref={quienesRef} className="py-20">
          <div className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isQuienesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="order-2 md:order-1">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                Nuestra Historia
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                ¿Quiénes Somos?
              </h2>
              <div className="prose prose-lg">
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  <span className="font-bold text-blue-600">Crédito Fácil</span> es más que una institución financiera. Somos un equipo comprometido con el desarrollo económico de las familias peruanas.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Desde nuestros inicios, hemos trabajado incansablemente para ofrecer soluciones financieras accesibles, rápidas y confiables que impulsen los sueños de nuestros socios.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Con presencia en todo el país, nos enorgullece ser el aliado financiero de miles de emprendedores, familias y negocios que confían en nosotros día a día.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/image3.png" 
                  alt="Nuestra empresa" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visión y Misión con diseño dividido */}
        <div ref={visionRef} className="py-20">
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            {/* Misión */}
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-12 text-white overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <FaEye className="text-4xl text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6">Nuestra Misión</h3>
                <p className="text-lg text-white/95 leading-relaxed">
                  Brindar soluciones financieras accesibles y personalizadas que impulsen el crecimiento económico de nuestros socios, promoviendo la inclusión financiera y el desarrollo sostenible de las comunidades donde operamos.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 md:p-12 text-white overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <FaRocket className="text-4xl text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6">Nuestra Visión</h3>
                <p className="text-lg text-white/95 leading-relaxed">
                  Ser la institución financiera líder en el Perú, reconocida por la excelencia en nuestro servicio, la confianza de nuestros socios y nuestro compromiso con el desarrollo integral de las familias peruanas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div ref={valoresRef} className={`py-20 bg-gradient-to-br from-gray-50 to-indigo-50 transition-all duration-1000 ${isValoresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-sm">
                Lo que nos define
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Nuestros Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principios que guían cada una de nuestras acciones
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <FaHeart className="text-4xl text-white" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4">Compromiso</h4>
                <p className="text-gray-600 leading-relaxed">Dedicados al bienestar y crecimiento de nuestros socios.</p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <FaShieldAlt className="text-4xl text-white" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4">Confianza</h4>
                <p className="text-gray-600 leading-relaxed">Transparencia y honestidad en todas nuestras operaciones.</p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <FaLightbulb className="text-4xl text-white" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4">Innovación</h4>
                <p className="text-gray-600 leading-relaxed">Soluciones modernas adaptadas a las necesidades actuales.</p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <FaHandshake className="text-4xl text-white" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4">Cercanía</h4>
                <p className="text-gray-600 leading-relaxed">Atención personalizada que hace la diferencia.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestro Propósito e Inspiración */}
        <div ref={propositoRef} className="py-20">
          <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 md:p-16 transition-all duration-1000 ${isPropositoVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <FaTrophy className="text-2xl text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900">Nuestro Propósito</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Transformar vidas a través del acceso a servicios financieros justos y oportunos, siendo el puente entre los sueños y su realización.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Creemos que cada persona merece la oportunidad de crecer, prosperar y alcanzar sus metas sin barreras financieras.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <FaUsers className="text-2xl text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900">Nuestra Inspiración</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nos inspiran las historias de superación de nuestros socios: emprendedores que construyen negocios, familias que logran sus metas y comunidades que crecen juntas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cada crédito otorgado es una nueva historia de éxito que nos motiva a seguir adelante.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen final con mensaje */}
        <div className="py-20">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/image2.png" 
              alt="Equipo Crédito Fácil" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-10 md:p-14">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Juntos hacemos la diferencia
                </h3>
                <p className="text-xl text-white/95 max-w-2xl">
                  Porque en Crédito Fácil, tu éxito es nuestro éxito
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="py-20">
          <div className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl transition-all duration-1000 ${isCtaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`} style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              ¿Listo para ser parte de nuestra historia?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Únete a miles de personas que ya confían en Crédito Fácil
            </p>
            <a 
              href="https://wa.me/51905465005" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
            >
              <span>Contáctanos Ahora</span>
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
