"use client"

import { useState, useEffect, useRef } from 'react'
import { FaCalculator, FaMoneyBillWave, FaCalendarAlt, FaPercentage } from 'react-icons/fa'

export default function CalculadoraCredito() {
  const [monto, setMonto] = useState(10000)
  const [plazo, setPlazo] = useState(12)
  const [tasa, setTasa] = useState(15)
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
      const sectionEl = sectionRef.current
      if (sectionEl) {
        observer.unobserve(sectionEl)
      }
    }
  }, [])

  // Cálculo de la cuota mensual usando la fórmula de amortización francesa
  const calcularCuota = () => {
    const tasaMensual = tasa / 100 / 12
    const cuota = monto * (tasaMensual * Math.pow(1 + tasaMensual, plazo)) / (Math.pow(1 + tasaMensual, plazo) - 1)
    return cuota
  }

  const cuotaMensual = calcularCuota()
  const totalPagar = cuotaMensual * plazo
  const interesTotal = totalPagar - monto

  return (
    <section ref={sectionRef} id="calculadora" className="py-12 md:py-24 bg-gradient-to-br from-primary-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-white font-bold mb-4 md:mb-6 shadow-xl text-sm md:text-base">
            <FaCalculator className="text-lg md:text-2xl" />
            <span className="tracking-wider">SIMULADOR DE CRÉDITO</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 drop-shadow-2xl px-4">
            Calculadora de Créditos
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-light px-4">
            Simula tu crédito y descubre cuánto pagarías mensualmente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Calculadora */}
          <div 
            className={`bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 backdrop-blur-xl bg-opacity-98 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-3'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            <div className="space-y-6 md:space-y-8">
              {/* Monto */}
              <div>
                <label className="flex items-center gap-2 md:gap-3 text-gray-700 font-bold mb-3 md:mb-4 text-base md:text-lg">
                  <div className="bg-gradient-to-r from-primary-500 to-blue-600 p-2 md:p-3 rounded-lg md:rounded-xl text-white">
                    <FaMoneyBillWave className="text-lg md:text-xl" />
                  </div>
                  <span className="text-sm md:text-lg">Monto del Crédito</span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={monto}
                  onChange={(e) => setMonto(Number(e.target.value))}
                  className="w-full h-2 md:h-3 bg-gradient-to-r from-primary-200 to-blue-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between items-center mt-3 md:mt-4">
                  <span className="text-xs md:text-sm text-gray-500 font-semibold">S/ 1,000</span>
                  <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                    S/ {monto.toLocaleString()}
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 font-semibold">S/ 100,000</span>
                </div>
              </div>

              {/* Plazo */}
              <div>
                <label className="flex items-center gap-2 md:gap-3 text-gray-700 font-bold mb-3 md:mb-4 text-base md:text-lg">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 md:p-3 rounded-lg md:rounded-xl text-white">
                    <FaCalendarAlt className="text-lg md:text-xl" />
                  </div>
                  <span className="text-sm md:text-lg">Plazo en Meses</span>
                </label>
                <input
                  type="range"
                  min="6"
                  max="60"
                  step="6"
                  value={plazo}
                  onChange={(e) => setPlazo(Number(e.target.value))}
                  className="w-full h-2 md:h-3 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between items-center mt-3 md:mt-4">
                  <span className="text-xs md:text-sm text-gray-500 font-semibold">6 meses</span>
                  <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    {plazo} meses
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 font-semibold">60 meses</span>
                </div>
              </div>

              {/* Tasa */}
              <div>
                <label className="flex items-center gap-2 md:gap-3 text-gray-700 font-bold mb-3 md:mb-4 text-base md:text-lg">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 md:p-3 rounded-lg md:rounded-xl text-white">
                    <FaPercentage className="text-lg md:text-xl" />
                  </div>
                  <span className="text-sm md:text-lg">Tasa de Interés Anual</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="1"
                  value={tasa}
                  onChange={(e) => setTasa(Number(e.target.value))}
                  className="w-full h-2 md:h-3 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between items-center mt-3 md:mt-4">
                  <span className="text-xs md:text-sm text-gray-500 font-semibold">10%</span>
                  <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                    {tasa}% TEA
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 font-semibold">100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div 
            className={`space-y-4 md:space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-3'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border-2 md:border-4 border-white/50">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
                Resumen de tu Crédito
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                {/* Cuota Mensual */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl md:rounded-2xl p-5 md:p-6 text-white shadow-xl">
                  <div className="text-xs md:text-sm font-semibold mb-2 opacity-90">Cuota Mensual</div>
                  <div className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                    S/ {cuotaMensual.toFixed(2)}
                  </div>
                </div>

                {/* Total a Pagar */}
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl md:rounded-2xl p-5 md:p-6 text-white shadow-xl">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                    <span className="text-xs md:text-sm font-semibold opacity-90">Total a Pagar</span>
                    <span className="text-xl md:text-2xl font-bold">S/ {totalPagar.toFixed(2)}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-xs md:text-sm font-semibold opacity-90">Interés Total</span>
                    <span className="text-xl md:text-2xl font-bold text-amber-300">S/ {interesTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Detalles */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-5 md:p-6 border-2 border-blue-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                        {plazo}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 font-semibold mt-1">Meses</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                        {tasa}%
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 font-semibold mt-1">TEA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-6 md:mt-8 bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 hover:from-primary-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold py-4 md:py-5 px-6 md:px-8 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-base md:text-lg">
                ¡Solicitar Este Crédito Ahora!
              </button>
            </div>

            {/* Info adicional */}
            <div className="bg-white/90 backdrop-blur-xl rounded-xl md:rounded-2xl p-5 md:p-6 shadow-xl">
              <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                <span className="font-bold text-gray-800">Nota:</span> Los valores mostrados son referenciales. 
                La tasa final puede variar según tu perfil crediticio. 
                Comunícate con nosotros para una cotización personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
          transition: all 0.3s ease;
        }
        
        @media (min-width: 768px) {
          .slider::-webkit-slider-thumb {
            width: 28px;
            height: 28px;
          }
        }
        
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.7);
        }
        
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
          transition: all 0.3s ease;
        }
        
        @media (min-width: 768px) {
          .slider::-moz-range-thumb {
            width: 28px;
            height: 28px;
          }
        }
        
        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.7);
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
