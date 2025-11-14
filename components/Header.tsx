"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiPhone, FiChevronDown, FiMail, FiX } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [productosOpen, setProductosOpen] = useState(false)
  const [nosotrosOpen, setNosotrosOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const productosSubmenu = [
    { name: 'Crédito Individual', href: '/credito-individual' },
    { name: 'Crédito Grupal Impulsa Mujer', href: '/credito-grupal-impulsa-mujer' },
    { name: 'Crédito con Garantía a Plazo Fijo', href: '/credito-con-garantia-a-plazo-fijo' },
    { name: 'Ahorros', href: '/ahorros' },
    { name: 'SOAT', href: '/soat' },
  ]

  const nosotrosSubmenu = [
    { name: 'Sobre Nosotros', href: '/nosotros' },
    { name: 'Trabaja con Nosotros', href: '/trabaja-con-nosotros' },
    { name: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-3.5 hidden md:block overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-8">
              <a href="tel:+51905465005" className="flex items-center gap-2.5 hover:text-amber-300 transition-all duration-300 group relative px-3 py-1.5 rounded-lg hover:bg-white/10">
                <div className="bg-amber-400 p-1.5 rounded-full group-hover:bg-amber-300 transition-colors">
                  <FiPhone size={14} className="text-slate-900 group-hover:rotate-12 transition-transform" />
                </div>
                <span className="font-semibold tracking-wide">Central: (01) 905 465 005</span>
              </a>
              <a href="mailto:info@cooperativa.com" className="flex items-center gap-2.5 hover:text-amber-300 transition-all duration-300 group relative px-3 py-1.5 rounded-lg hover:bg-white/10">
                <div className="bg-amber-400 p-1.5 rounded-full group-hover:bg-amber-300 transition-colors">
                  <FiMail size={14} className="text-slate-900 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-semibold tracking-wide">info@cooperativa.com</span>
              </a>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-xs font-bold tracking-widest uppercase text-amber-300">Síguenos</span>
              <div className="flex items-center gap-2">
                <a href="#" className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition-all duration-300 hover:scale-110 transform backdrop-blur-sm">
                  <FaFacebookF size={13} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-2 rounded-full transition-all duration-300 hover:scale-110 transform backdrop-blur-sm">
                  <FaInstagram size={13} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-red-600 p-2 rounded-full transition-all duration-300 hover:scale-110 transform backdrop-blur-sm">
                  <FaYoutube size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
          : 'bg-gradient-to-b from-white via-white to-gray-50/30 shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative px-3 py-2">
                <Image 
                  src="/imagenlogocredito.png" 
                  alt="Logo Cooperativa" 
                  width={200} 
                  height={60} 
                  className={`transition-all duration-500 ${isScrolled ? 'h-11' : 'h-14'} w-auto group-hover:scale-110 group-hover:drop-shadow-2xl`}
                  priority 
                />
              </div>
            </Link>

            {/* Redes sociales - Solo móvil */}
            <div className="lg:hidden flex items-center gap-2">
              <a href="#" className="w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaFacebookF className="text-white text-xs" />
              </a>
              <a href="#" className="w-9 h-9 bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaInstagram className="text-white text-xs" />
              </a>
              <a href="#" className="w-9 h-9 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaYoutube className="text-white text-xs" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              <Link href="/" className="relative px-5 py-2.5 text-gray-700 hover:text-primary-600 font-bold transition-all duration-300 group rounded-lg">
                <span className="relative z-10">Inicio</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-100 to-blue-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-600 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
              
              {/* Productos Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setProductosOpen(true)}
                onMouseLeave={() => setProductosOpen(false)}
              >
                <button className="flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-primary-600 font-bold transition-all duration-300 rounded-lg relative">
                  <span className="relative z-10">Productos</span>
                  <FiChevronDown className={`transition-transform duration-300 relative z-10 ${productosOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-100 to-blue-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-600 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </button>
                
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 transition-all duration-300 ${productosOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-xl bg-opacity-98">
                    {/* Dropdown header */}
                    <div className="bg-gradient-to-r from-primary-600 to-blue-600 px-5 py-3 text-white">
                      <h3 className="font-bold text-sm tracking-wide">Nuestros Productos</h3>
                    </div>
                    <div className="py-2">
                      {productosSubmenu.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item relative block px-6 py-3.5 text-sm text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:via-blue-50 hover:to-indigo-50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 group-hover/item:bg-primary-600 group-hover/item:scale-150 transition-all duration-300"></div>
                            <span className="font-semibold group-hover/item:text-primary-700 group-hover/item:translate-x-1 transition-all duration-300">{item.name}</span>
                          </div>
                          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-600 to-blue-600 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-top"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/beneficios" className="relative px-5 py-2.5 text-gray-700 hover:text-primary-600 font-bold transition-all duration-300 group rounded-lg">
                <span className="relative z-10">Beneficios</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-100 to-blue-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-600 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
              
              {/* Nosotros Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setNosotrosOpen(true)}
                onMouseLeave={() => setNosotrosOpen(false)}
              >
                <button className="flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-primary-600 font-bold transition-all duration-300 rounded-lg relative">
                  <span className="relative z-10">Nosotros</span>
                  <FiChevronDown className={`transition-transform duration-300 relative z-10 ${nosotrosOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-100 to-blue-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-600 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </button>
                
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 transition-all duration-300 ${nosotrosOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-xl bg-opacity-98">
                    {/* Dropdown header */}
                    <div className="bg-gradient-to-r from-primary-600 to-blue-600 px-5 py-3 text-white">
                      <h3 className="font-bold text-sm tracking-wide">Conócenos</h3>
                    </div>
                    <div className="py-2">
                      {nosotrosSubmenu.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item relative block px-6 py-3.5 text-sm text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:via-blue-50 hover:to-indigo-50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 group-hover/item:bg-primary-600 group-hover/item:scale-150 transition-all duration-300"></div>
                            <span className="font-semibold group-hover/item:text-primary-700 group-hover/item:translate-x-1 transition-all duration-300">{item.name}</span>
                          </div>
                          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-600 to-blue-600 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-top"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="#contacto" className="relative px-5 py-2.5 text-gray-700 hover:text-primary-600 font-bold transition-all duration-300 group rounded-lg">
                <span className="relative z-10">Tipo De Cambio</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-100 to-blue-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-600 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a 
                href="https://wa.me/51905465005" 
                target="_blank" 
                rel="noreferrer"
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-700 hover:via-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 group overflow-hidden"
              >
                {/* Animated background effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500 animate-pulse"></div>
                
                <FaWhatsapp className="text-2xl relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                <span className="relative z-10 tracking-wide">Solicitar Crédito</span>
                
                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 hover:bg-gradient-to-r hover:from-primary-100 hover:to-blue-100 rounded-xl transition-all duration-300 group"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6 group-hover:scale-110 transition-transform" />
              ) : (
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[calc(100vh-5rem)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="px-4 pb-6 space-y-2 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 rounded-lg font-bold transition-all duration-300"
            >
              Inicio
            </Link>
            
            <div>
              <button 
                onClick={() => setProductosOpen(!productosOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 rounded-lg font-bold transition-all duration-300"
              >
                <span>Productos</span>
                <FiChevronDown className={`transition-transform duration-300 ${productosOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 ml-4 space-y-1 transition-all duration-300 ${productosOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {productosSubmenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/beneficios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 rounded-lg font-bold transition-all duration-300"
            >
              Beneficios
            </Link>
            <Link 
              href="#agencias" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 rounded-lg font-bold transition-all duration-300"
            >
              Agencias
            </Link>
            
            <div>
              <button 
                onClick={() => setNosotrosOpen(!nosotrosOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 rounded-lg font-bold transition-all duration-300"
              >
                <span>Nosotros</span>
                <FiChevronDown className={`transition-transform duration-300 ${nosotrosOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 ml-4 space-y-1 transition-all duration-300 ${nosotrosOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {nosotrosSubmenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              href="#contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 rounded-lg font-bold transition-all duration-300"
            >
              Tipo De Cambio
            </Link>

            <a 
              href="https://wa.me/51905465005" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg mt-4"
            >
              <FaWhatsapp className="text-xl" />
              <span>Solicitar Crédito</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
