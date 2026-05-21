"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, CheckCircle } from "lucide-react"

const images = [
  {
    src: "/images/hero-5.png",
    alt: "El Cuco 36 - Casa Expandible 36m² - Sistema hidráulico que triplica el espacio"
  },
  {
    src: "/images/expandable-abierta.jpg",
    alt: "El Cuco 36 - Casa Expandible desplegada vista exterior"
  },
  {
    src: "/images/expandable-interior.jpg",
    alt: "El Cuco 36 - Interior salón-comedor-cocina"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cuco%2036%20planta.png-6niLh4AGOY7ZiiBL1ymls8acN9nSq0.jpeg",
    alt: "El Cuco 36m² - Plano distribución 2 dormitorios"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29.png-aIrvsilfPM6LUjXhLVP7zIsNEmgHIW.jpeg",
    alt: "El Cuco 36m² - Plano 3D distribución interior"
  },
]

const features = [
  "Sistema de expansión hidráulico patentado",
  "Triplica el espacio tras el despliegue",
  "Paredes laterales que se despliegan en minutos",
  "2 dormitorios + salón-cocina + baño completo",
  "36 m² de superficie útil",
  "Estructura autoportante sobre chasis propio",
  "Instalación posible sin cimentación fija",
  "Aislamiento térmico premium",
  "Certificación CE + ISO",
  "Garantía de 3 años en estructura",
]

export default function Cuco36Page() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      {/* Header */}
      <header className="border-b border-[#c9a55c]/20 bg-[#0f0f0f]/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/#modelos" className="flex items-center gap-2 text-[#c9a55c]/70 hover:text-[#c9a55c] transition-colors font-serif">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al catálogo</span>
          </Link>
          <Link href="/cuco-68" className="text-[#c9a55c]/70 hover:text-[#c9a55c] transition-colors font-serif text-sm">
            Ver El Cuco 68 →
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Title */}
        <div className="text-center mb-12">
          <p className="text-[#c9a55c] text-sm tracking-[0.3em] uppercase mb-2 font-serif">Compacto y funcional</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">El Cuco 36</h1>
          <p className="text-white/60 text-lg font-serif">Casa Expandible 36 m² - 2 dormitorios</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 border border-[#c9a55c]/20 bg-[#1a1a1a]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-video rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? "border-[#c9a55c]" : "border-transparent hover:border-[#c9a55c]/50"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6 p-4 bg-[#c9a55c]/10 rounded-lg border border-[#c9a55c]/20">
              <h2 className="font-serif text-2xl text-white mb-2">El Cuco 36</h2>
              <p className="text-[#c9a55c] text-xl font-serif mb-1">36 m²</p>
              <p className="text-white/60 mb-2">2 dormitorios + salón-cocina + baño</p>
              <p className="text-white/50 text-sm mb-3">Modelo compacto ideal para parejas o segunda residencia</p>
              <p className="text-[#c9a55c] text-2xl font-serif">Desde 17.500€</p>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed font-serif">
              El modelo compacto de la familia Cuco ofrece 36m² de espacio útil con 2 dormitorios, 
              salón-cocina integrado y baño completo. Ideal para parejas, segunda residencia o 
              alojamiento turístico diferenciado.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <a
                href="https://nido45spain.github.io/nido45"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full bg-[#c9a55c] hover:bg-[#b8944b] text-black font-serif tracking-wide">
                  Solicitar Presupuesto
                </Button>
              </a>
              <a
                href="/NIDO45_Catalogo.pdf"
                download
              >
                <Button size="lg" variant="outline" className="w-full border-[#c9a55c] text-[#c9a55c] hover:bg-[#c9a55c]/10 font-serif tracking-wide">
                  <FileText className="w-5 h-5 mr-2" />
                  Descargar Catálogo
                </Button>
              </a>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-lg text-white">Incluye:</h3>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/60">
                    <CheckCircle className="w-4 h-4 text-[#c9a55c] mt-0.5 shrink-0" />
                    <span className="font-serif">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How it works section */}
        <section className="bg-[#1a1a1a] rounded-lg p-8 mb-8 border border-[#c9a55c]/10">
          <h2 className="font-serif text-2xl text-white mb-6 text-center">Cómo Funciona el Sistema Expandible</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#c9a55c]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#c9a55c] font-serif text-xl">1</span>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Transporte Compacto</h3>
              <p className="text-white/50 font-serif text-sm leading-relaxed">
                El módulo se transporta plegado con las dimensiones de un contenedor estándar, 
                facilitando el transporte marítimo y terrestre.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#c9a55c]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#c9a55c] font-serif text-xl">2</span>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Despliegue Hidráulico</h3>
              <p className="text-white/50 font-serif text-sm leading-relaxed">
                Una vez en destino, las paredes laterales se despliegan mediante sistema hidráulico 
                en cuestión de minutos, triplicando el espacio interior.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#c9a55c]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#c9a55c] font-serif text-xl">3</span>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Listo para Habitar</h3>
              <p className="text-white/50 font-serif text-sm leading-relaxed">
                Tras el despliegue, solo quedan las conexiones a suministros. 
                Puede instalarse sobre su chasis o con cimentación ligera.
              </p>
            </div>
          </div>
        </section>

        {/* Ideal for section */}
        <section className="bg-[#1a1a1a] rounded-lg p-8 border border-[#c9a55c]/10">
          <h2 className="font-serif text-2xl text-white mb-6 text-center">Ideal Para</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-serif text-lg text-white mb-2">Parejas</h3>
              <p className="text-white/50 font-serif text-sm leading-relaxed">
                Espacio perfecto para dos personas con dormitorio principal, 
                habitación de invitados y zona de estar acogedora.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg text-white mb-2">Segunda Residencia</h3>
              <p className="text-white/50 font-serif text-sm leading-relaxed">
                Perfecta para casa de vacaciones o fines de semana. 
                Posibilidad de instalación sin cimentación fija en algunos casos.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg text-white mb-2">Alojamiento Turístico</h3>
              <p className="text-white/50 font-serif text-sm leading-relaxed">
                Ideal para proyectos de turismo rural, glamping de lujo o 
                alojamientos diferenciados con instalación rápida.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
