"use client"

import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Créditos</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Ahorros</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">SOAT</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Nosotros</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Quiénes somos</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Agencias</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Trabaja con nosotros</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Preguntas frecuentes</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Términos y condiciones</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
                <FaYoutube />
              </a>
              <a href="https://wa.me/51905465005" className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Cooperativa de Crédito. Todos los derechos reservados. Diseño por ModerStudio 💙</p>
        </div>
      </div>
    </footer>
  )
}
