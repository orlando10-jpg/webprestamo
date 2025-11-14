"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FaBriefcase, FaUsers, FaRocket, FaHeart, FaGraduationCap, FaHandshake, FaLightbulb, FaChartLine } from 'react-icons/fa'
import Footer from '@/components/Footer'

export default function TrabajaConNosotros() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero con diseño moderno */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0yNGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              <FaBriefcase className="text-lg" />
              <span>Únete a nuestro equipo</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Trabaja con Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
              Sé parte de un equipo que está transformando el futuro financiero del Perú
            </p>
            <a 
              href="#vacantes"
              className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
            >
              <span>Ver Vacantes Disponibles</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decoración ondulada */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 8C120 16 240 32 360 42C480 52 600 56 720 52C840 48 960 36 1080 32C1200 28 1320 32 1380 34L1440 36V100H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Por qué trabajar con nosotros */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            ¿Por qué unirte a Crédito Fácil?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los beneficios de formar parte de nuestro equipo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="group">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crecimiento Profesional</h3>
              <p className="text-gray-700 leading-relaxed">
                Oportunidades constantes de desarrollo y capacitación para impulsar tu carrera.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ambiente Colaborativo</h3>
              <p className="text-gray-700 leading-relaxed">
                Trabaja en un entorno positivo donde el trabajo en equipo es fundamental.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Capacitación Continua</h3>
              <p className="text-gray-700 leading-relaxed">
                Programas de formación y talleres especializados para tu desarrollo.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Beneficios Competitivos</h3>
              <p className="text-gray-700 leading-relaxed">
                Paquete de compensación atractivo y beneficios para tu bienestar.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovación</h3>
              <p className="text-gray-700 leading-relaxed">
                Impulsa tus ideas y contribuye a proyectos innovadores que marcan la diferencia.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaHandshake className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto Social</h3>
              <p className="text-gray-700 leading-relaxed">
                Contribuye al desarrollo económico de miles de familias peruanas.
              </p>
            </div>
          </div>
        </div>

        {/* Imagen inspiracional */}
        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-20">
          <Image 
            src="/image3.png" 
            alt="Equipo Crédito Fácil" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/70 flex items-center justify-center">
            <div className="text-center px-6">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
                &ldquo;Juntos construimos el futuro&rdquo;
              </h3>
              <p className="text-xl text-white/95 max-w-2xl mx-auto">
                En Crédito Fácil, cada miembro del equipo es parte esencial de nuestra misión
              </p>
            </div>
          </div>
        </div>

        {/* Vacantes disponibles */}
        <div id="vacantes" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Vacantes Disponibles
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra la oportunidad perfecta para ti
            </p>
          </div>

          <div className="space-y-6">
            {/* Vacante 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-indigo-400 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold">
                      Tiempo Completo
                    </span>
                    <span className="text-gray-500">Lima, Perú</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Asesor de Créditos</h3>
                  <p className="text-gray-600 mb-4">
                    Buscamos profesionales apasionados por las ventas y el servicio al cliente para unirse a nuestro equipo comercial.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Ventas</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Atención al cliente</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Excel</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/51905465005?text=Hola,%20estoy%20interesado%20en%20la%20vacante%20de%20Asesor%20de%20Créditos"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center whitespace-nowrap"
                >
                  Postular Ahora
                </a>
              </div>
            </div>

            {/* Vacante 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-bold">
                      Tiempo Completo
                    </span>
                    <span className="text-gray-500">Lima, Perú</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Analista de Riesgos</h3>
                  <p className="text-gray-600 mb-4">
                    Únete a nuestro equipo de análisis y evaluación crediticia para garantizar decisiones financieras sólidas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Análisis de datos</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Excel avanzado</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Finanzas</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/51905465005?text=Hola,%20estoy%20interesado%20en%20la%20vacante%20de%20Analista%20de%20Riesgos"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center whitespace-nowrap"
                >
                  Postular Ahora
                </a>
              </div>
            </div>

            {/* Vacante 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">
                      Medio Tiempo
                    </span>
                    <span className="text-gray-500">Provincias</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Promotor de Servicios Financieros</h3>
                  <p className="text-gray-600 mb-4">
                    Oportunidad para personas dinámicas que quieran promover nuestros servicios en diferentes regiones del país.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Ventas</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Comunicación</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">Movilidad</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/51905465005?text=Hola,%20estoy%20interesado%20en%20la%20vacante%20de%20Promotor%20de%20Servicios"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center whitespace-nowrap"
                >
                  Postular Ahora
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <FaRocket className="text-4xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ¿No encontraste una vacante que se ajuste a ti?
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Envíanos tu CV y te contactaremos cuando tengamos una oportunidad que se ajuste a tu perfil
          </p>
          <a 
            href="https://wa.me/51905465005?text=Hola,%20me%20gustaría%20enviar%20mi%20CV%20para%20futuras%20oportunidades"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
          >
            <span>Enviar CV</span>
          </a>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
