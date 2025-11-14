"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Créditos que Impulsan",
      subtitle: "tus Sueños",
      description: "Accede a financiamiento rápido y seguro para tus proyectos personales y empresariales",
      cta: "Solicita tu Crédito",
      image: "/ejemplo1.png"
    },
    {
      title: "Ahorra con Confianza,",
      subtitle: "Crece con Seguridad",
      description: "Las mejores tasas de interés para que tu dinero crezca de forma segura",
      cta: "Conoce más",
      image: "/ejemplo2.png"
    },
    {
      title: "Tu Socio Financiero",
      subtitle: "de Confianza",
      description: "Más de 20 años brindando soluciones financieras a familias y empresas",
      cta: "Únete Ahora",
      image: "/ejemplo3.png"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#0a4d68] via-[#088395] to-[#05BFDB]">
      {/* Animated Shapes - Solo una vez, no por slide */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      
      {/* Grid Pattern Overlay - Solo una vez */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Decorative Accent Line - Solo una vez */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-yellow-400 to-cyan-400"></div>

      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center lg:items-center py-8 lg:py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

                <div className="max-w-2xl z-10 text-center lg:text-left relative">
                  <div className="mb-3 sm:mb-4 inline-block animate-fade-in-down">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest rounded-lg shadow-xl">
                      Haz crecer tu imperio
                    </div>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-2 sm:mb-3 leading-tight drop-shadow-2xl animate-fade-in-up animation-delay-200">{slide.title}</h1>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 leading-tight bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-transparent bg-clip-text drop-shadow-lg animate-fade-in-up animation-delay-400">{slide.subtitle}</h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 mb-6 sm:mb-7 lg:mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-600">{slide.description}</p>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-7 lg:mb-12 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
                    <button className="group relative bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-700 hover:via-red-800 hover:to-red-700 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 md:py-5 rounded-2xl font-bold text-base sm:text-lg md:text-xl transition-all duration-300 shadow-2xl hover:shadow-red-600/50 hover:scale-105 overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative z-10">{slide.cta}</span>
                    </button>
                    <button className="bg-white/15 backdrop-blur-md hover:bg-white border-2 border-white/90 text-white hover:text-cyan-800 px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 md:py-5 rounded-2xl font-bold text-base sm:text-lg md:text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105">
                      <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 md:gap-6 lg:gap-8 pt-5 sm:pt-6 lg:pt-8 border-t-2 border-white/30 justify-center lg:justify-start pb-0 animate-fade-in animation-delay-1000">
                    <div className="flex items-center gap-3 justify-center lg:justify-start group animate-slide-in-left animation-delay-1200">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div>
                        <p className="text-white font-extrabold text-sm sm:text-base md:text-lg lg:text-xl">100% Seguro</p>
                        <p className="text-cyan-200 text-xs sm:text-sm md:text-base font-semibold">Certificado SBS</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-center lg:justify-start group animate-slide-in-left animation-delay-1400">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <p className="text-white font-extrabold text-sm sm:text-base md:text-lg lg:text-xl">Aprobación Rápida</p>
                        <p className="text-cyan-200 text-xs sm:text-sm md:text-base font-semibold">En 24 horas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-center lg:justify-start group animate-slide-in-left animation-delay-1600">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                      </div>
                      <div>
                        <p className="text-white font-extrabold text-sm sm:text-base md:text-lg lg:text-xl">+20 Años</p>
                        <p className="text-cyan-200 text-xs sm:text-sm md:text-base font-semibold">De experiencia</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative hidden lg:block z-10 animate-fade-in-right animation-delay-600">
                  <div className="relative w-full h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 to-yellow-200/20 rounded-3xl backdrop-blur-sm transform rotate-3 transition-transform duration-500"></div>
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                      {index === currentSlide && (
                        <Image 
                          src={slide.image} 
                          alt={slide.title} 
                          fill 
                          className="object-contain object-center" 
                          style={{ filter: 'brightness(1.1)' }} 
                          priority={index === 0}
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
                      <div className="absolute top-6 right-6 bg-yellow-400 text-cyan-900 px-6 py-3 rounded-full font-bold shadow-lg">
                        <span className="text-sm">Aprobación en 24h</span>
                      </div>
                      <div className="absolute bottom-6 right-6 bg-yellow-400 text-cyan-900 px-4 py-2 font-bold text-2xl shadow-lg">
                        Supercrédito
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                          <p className="text-cyan-900 font-bold text-lg">+15,000</p>
                          <p className="text-gray-600 text-sm">Clientes satisfechos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 sm:left-auto sm:right-12 sm:translate-x-0 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-10 sm:w-12 h-2 bg-yellow-400' : 'w-2 h-2 bg-white/50'}`} 
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
