"use client"

import Image from 'next/image'
import { FaCheckCircle, FaFileAlt, FaCalculator, FaClock } from 'react-icons/fa'
import Footer from '@/components/Footer'

export default function CreditoIndividual() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary-800 to-blue-900 mb-4">
            Crédito Individual
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            La mejor opción para financiar tus proyectos personales o de negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          <div className="relative w-full h-64 md:h-96 lg:h-[450px]">
            <Image 
              src="/image2.png" 
              alt="Crédito Individual" 
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-blue-600 rounded-full"></span>
                ¿Qué es el Crédito Individual?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Es un préstamo personal diseñado especialmente para ti, que te permite alcanzar tus metas y objetivos financieros de manera rápida y segura.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Ya sea que necesites capital para tu negocio, realizar mejoras en tu hogar, cubrir gastos educativos o cualquier proyecto personal, nuestro Crédito Individual te brinda la flexibilidad y rapidez que necesitas.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Con <span className="font-bold text-primary-600">tasas competitivas</span>, <span className="font-bold text-primary-600">plazos flexibles</span> y un <span className="font-bold text-primary-600">proceso de aprobación ágil</span>, ponemos tu bienestar financiero en primer lugar.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-blue-600 rounded-full"></span>
              Características
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">Montos desde S/ 1,000 hasta S/ 100,000</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">Plazos flexibles de 6 a 60 meses</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">Tasas de interés competitivas</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">Aprobación rápida en 24 horas</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">Sin penalidad por pago anticipado</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
              Requisitos
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">DNI vigente</p>
              </div>
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">Recibo de servicios (luz, agua o teléfono)</p>
              </div>
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">Comprobante de ingresos</p>
              </div>
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">No tener deudas en el sistema financiero</p>
              </div>
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">Mayor de 18 años</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">
            ¿Por qué elegir nuestro Crédito Individual?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <FaClock className="text-4xl text-amber-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Rapidez</h3>
              <p className="text-white/90">Aprobación en menos de 24 horas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <FaCalculator className="text-4xl text-amber-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Flexibilidad</h3>
              <p className="text-white/90">Cuotas adaptadas a tu presupuesto</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <FaCheckCircle className="text-4xl text-amber-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Confianza</h3>
              <p className="text-white/90">Más de 10,000 clientes satisfechos</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/51905465005" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-700 hover:via-green-600 hover:to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
          >
            <span>Solicitar Crédito Individual</span>
          </a>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}

