import Hero from '@/components/Hero'
import Productos from '@/components/Productos'
import Beneficios from '@/components/Beneficios'
import CalculadoraCredito from '@/components/Blog'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Productos />
      <Beneficios />
      <CalculadoraCredito />
      <Contacto />
      <Footer />
    </main>
  )
}
