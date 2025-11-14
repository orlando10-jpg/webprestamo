"use client"

import { useState } from 'react'
import { FaChevronDown, FaQuestionCircle, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import Footer from '@/components/Footer'

export default function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      category: "Créditos",
      questions: [
        {
          question: "¿Qué requisitos necesito para solicitar un crédito?",
          answer: "Los requisitos básicos incluyen: DNI vigente, tener entre 18 y 70 años, comprobante de ingresos o actividad económica, recibo de servicios (luz o agua) y referencias personales. Los requisitos específicos pueden variar según el tipo de crédito que solicites."
        },
        {
          question: "¿Cuánto tiempo tarda la aprobación de un crédito?",
          answer: "Nuestro proceso de evaluación es rápido y eficiente. En la mayoría de casos, la aprobación se realiza dentro de las 24 horas hábiles. Una vez aprobado, el desembolso se realiza de forma inmediata."
        },
        {
          question: "¿Puedo solicitar un crédito si estoy en centrales de riesgo?",
          answer: "Evaluamos cada caso de manera individual. Aunque es importante tener un buen historial crediticio, consideramos múltiples factores en nuestra evaluación. Te recomendamos acercarte a nuestras oficinas para una evaluación personalizada."
        },
        {
          question: "¿Qué montos de crédito puedo solicitar?",
          answer: "Los montos varían según el tipo de crédito: Crédito Individual desde S/.500 hasta S/.20,000, Crédito Grupal desde S/.800 hasta S/.5,000, y Crédito con Garantía según el valor de tu depósito a plazo fijo."
        }
      ]
    },
    {
      category: "Ahorros",
      questions: [
        {
          question: "¿Cuál es el monto mínimo para abrir una cuenta de ahorros?",
          answer: "Puedes abrir tu cuenta de ahorro libre con tan solo S/.10. No cobramos comisiones por mantenimiento y tu dinero está siempre disponible cuando lo necesites."
        },
        {
          question: "¿Qué beneficios tiene el depósito a plazo fijo?",
          answer: "Los depósitos a plazo fijo ofrecen tasas de interés preferenciales, seguridad garantizada, y la posibilidad de usar tu depósito como garantía para solicitar créditos con tasas más bajas."
        },
        {
          question: "¿Puedo retirar mi dinero en cualquier momento?",
          answer: "En el caso de ahorros libres, sí, puedes retirar tu dinero cuando lo necesites. Para depósitos a plazo fijo, el dinero está disponible al vencimiento del plazo acordado. En caso de retiro anticipado, se aplican las condiciones establecidas en el contrato."
        }
      ]
    },
    {
      category: "SOAT",
      questions: [
        {
          question: "¿Qué cubre el SOAT?",
          answer: "El SOAT cubre gastos médicos y de sepelio por accidentes de tránsito, tanto para el conductor, pasajeros y terceros afectados. Incluye atención médica, hospitalización, rehabilitación, medicamentos y gastos de sepelio."
        },
        {
          question: "¿Cuánto tiempo tengo para adquirir el SOAT?",
          answer: "Debes adquirir tu SOAT antes de que venza el anterior. Circular sin SOAT es una infracción grave que puede resultar en multas y la retención de tu vehículo."
        },
        {
          question: "¿Puedo usar mi SOAT en cualquier clínica?",
          answer: "Sí, puedes atenderte en cualquier clínica u hospital que forme parte de la red de atención del SOAT. La atención es inmediata presentando tu DNI y placa del vehículo."
        }
      ]
    },
    {
      category: "Pagos y Plazos",
      questions: [
        {
          question: "¿Qué métodos de pago están disponibles?",
          answer: "Puedes realizar tus pagos en nuestras oficinas en efectivo, mediante transferencia bancaria, o a través de agentes autorizados. También aceptamos pagos con cargo automático a tu cuenta de ahorros."
        },
        {
          question: "¿Puedo adelantar el pago de mi crédito?",
          answer: "Sí, puedes realizar pagos adelantados sin penalidad. Esto te permite reducir el monto de intereses a pagar y liquidar tu crédito antes del plazo establecido."
        },
        {
          question: "¿Qué pasa si me atraso en un pago?",
          answer: "Te recomendamos comunicarte con nosotros lo antes posible. Aplicamos intereses moratorios por pagos atrasados y esto puede afectar tu historial crediticio. Sin embargo, podemos ayudarte a encontrar una solución según tu situación."
        }
      ]
    },
    {
      category: "General",
      questions: [
        {
          question: "¿Dónde están ubicadas sus oficinas?",
          answer: "Contamos con múltiples agencias en Lima y provincias. Puedes encontrar la oficina más cercana a ti en nuestra sección de contacto o llamando a nuestro número de atención al cliente."
        },
        {
          question: "¿Cuál es el horario de atención?",
          answer: "Nuestro horario de atención es de lunes a viernes de 9:00 AM a 6:00 PM, y sábados de 9:00 AM a 1:00 PM. Para consultas urgentes, puedes contactarnos vía WhatsApp."
        },
        {
          question: "¿Mis ahorros están seguros?",
          answer: "Sí, todos los depósitos en Crédito Fácil están protegidos y respaldados. Operamos bajo estrictas normativas financieras para garantizar la seguridad de tu dinero."
        }
      ]
    }
  ]

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Círculos decorativos */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <FaQuestionCircle className="text-6xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-8">
              Encuentra respuestas rápidas a las dudas más comunes sobre nuestros productos y servicios
            </p>
          </div>
        </div>

        {/* Onda inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L48 10C96 20 192 40 288 45C384 50 480 40 576 35C672 30 768 30 864 35C960 40 1056 50 1152 50C1248 50 1344 40 1392 35L1440 30V80H0V0Z" className="fill-slate-50"/>
          </svg>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            {/* Título de categoría */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-indigo-300 to-transparent rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                {category.category}
              </h2>
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-indigo-300 to-transparent rounded-full"></div>
            </div>

            {/* Preguntas */}
            <div className="space-y-4">
              {category.questions.map((faq, questionIndex) => {
                const index = categoryIndex * 100 + questionIndex
                const isOpen = openIndex === index

                return (
                  <div
                    key={questionIndex}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-indigo-200"
                  >
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                    >
                      <span className="text-lg md:text-xl font-bold text-gray-900 pr-4 group-hover:text-indigo-600 transition-colors">
                        {faq.question}
                      </span>
                      <FaChevronDown
                        className={`text-2xl text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent mb-6"></div>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Sección de contacto */}
        <div className="mt-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 rounded-3xl p-10 md:p-14 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              ¿No encontraste tu respuesta?
            </h2>
            <p className="text-xl text-white/95">
              Estamos aquí para ayudarte. Contáctanos por el medio que prefieras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/51905465005"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-4xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-white/90 text-sm">905 465 005</p>
              </div>
            </a>

            {/* Teléfono */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaPhone className="text-4xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Llámanos</h3>
                <p className="text-white/90 text-sm">(01) 234-5678</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-4xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-white/90 text-sm">info@creditofacil.pe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
