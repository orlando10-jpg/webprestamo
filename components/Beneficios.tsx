"use client"

import { useState, useEffect, useRef } from 'react'
import { FaCheckCircle, FaShieldAlt, FaClock, FaHandHoldingUsd } from 'react-icons/fa'

export default function Beneficios() {
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const beneficios = [
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "100% Seguro",
      description: "Tu dinero protegido con los más altos estándares de seguridad",
      gradient: "from-blue-500 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      icon: <FaClock className="text-5xl" />,
      title: "Respuesta Rápida",
      description: "Aprobación en 24 horas o menos",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-100",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      icon: <FaHandHoldingUsd className="text-5xl" />,
      title: "Tasas Preferenciales",
      description: "Las mejores tasas del mercado para nuestros socios",
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-100",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      icon: <FaCheckCircle className="text-5xl" />,
      title: "Sin Complicaciones",
      description: "Proceso simple y requisitos mínimos",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-100",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600"
    }
  ]

  return (
    <section ref={sectionRef} id="beneficios" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
              Ventajas Exclusivas
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary-800 to-blue-900 mb-6">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Somos tu mejor aliado financiero
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => {
            const directions = ['translate-x-[-100px]', 'translate-y-[-100px]', 'translate-x-[100px]', 'translate-y-[100px]']
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0' : `opacity-0 ${directions[index]} scale-90 rotate-3`
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
              {/* Card glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${beneficio.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500`}></div>
              
              {/* Card content */}
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full border border-gray-100">
                {/* Icon container */}
                <div className="mb-6 flex justify-center">
                  <div className={`${beneficio.iconBg} p-5 rounded-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}>
                    {/* Icon glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${beneficio.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                    <div className="relative">
                      {beneficio.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${beneficio.gradient} group-hover:scale-105 transition-transform duration-300`}>
                  {beneficio.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base">
                  {beneficio.description}
                </p>

                {/* Decorative bottom element */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${beneficio.gradient} group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
              </div>
            </div>
            )
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 mb-2">
              10K+
            </div>
            <p className="text-gray-600 font-semibold">Socios Activos</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
              98%
            </div>
            <p className="text-gray-600 font-semibold">Satisfacción</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
              15+
            </div>
            <p className="text-gray-600 font-semibold">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">
              24h
            </div>
            <p className="text-gray-600 font-semibold">Tiempo de Respuesta</p>
          </div>
        </div>
      </div>
    </section>
  )
}
