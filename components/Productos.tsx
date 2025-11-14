"use client"

import { FaMoneyBillWave, FaUsers, FaLock, FaPiggyBank, FaCar, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

export default function Productos() {
  const productos = [
    {
      icon: <FaMoneyBillWave className="text-5xl text-primary-600" />,
      title: "Crédito Individual",
      description: "Financiamiento para tu negocio con tasas competitivas y plazos flexibles",
      link: "/credito-individual",
      lineColor: "from-cyan-500 to-cyan-700"
    },
    {
      icon: <FaUsers className="text-5xl text-pink-600" />,
      title: "Crédito Grupal Impulsa Mujer",
      description: "Empoderamiento financiero para mujeres emprendedoras",
      link: "/credito-grupal-impulsa-mujer",
      lineColor: "from-pink-400 to-pink-600"
    },
    {
      icon: <FaLock className="text-5xl text-green-600" />,
      title: "Crédito con Garantía",
      description: "Préstamos con respaldo de tus ahorros a plazo fijo",
      link: "/credito-con-garantia-a-plazo-fijo",
      lineColor: "from-green-400 to-green-600"
    },
    {
      icon: <FaPiggyBank className="text-5xl text-yellow-600" />,
      title: "Ahorros",
      description: "Cuentas de ahorro con los mejores rendimientos del mercado",
      link: "/ahorros",
      lineColor: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <FaCar className="text-5xl text-blue-600" />,
      title: "SOAT",
      description: "Seguro obligatorio para tu vehículo al mejor precio",
      link: "/soat",
      lineColor: "from-blue-400 to-blue-600"
    }
  ]

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones financieras diseñadas para ti y tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <Link
              key={index}
              href={producto.link}
              className="block bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden relative"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {producto.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {producto.title}
              </h3>
              <p className="text-gray-600 mb-6">{producto.description}</p>
              <div className="flex items-center text-primary-600 font-semibold gap-2 group-hover:gap-3 transition-all">
                <span>Más información</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${producto.lineColor} group-hover:w-full transition-all duration-500`}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
