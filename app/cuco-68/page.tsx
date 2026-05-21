"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, CheckCircle } from "lucide-react"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%206%20may%202026%2C%2020_12_00-RkzzeUCSX7dHTJNLnqkbXKCu7igWEC.png",
    alt: "El Cuco 68 - Casa Expandible 68m² en paisaje rural con terraza de madera"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cuco68-DBK6ubJ2pljs6FvsZNUuH2WspOKTRw.png",
    alt: "El Cuco 68 - Casa Expandible 68m² en playa con terraza de madera"
  },
  {
    src: "/images/expandable-madera.jpg",
    alt: "El Cuco 68 - Acabado paneles madera"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/this-expandable-container-home-flaunts-a-huge-bathroom-and-luxurious-style_10-iMftAkA2Ze7EQdRrQZiYMxIIPDBGd4.jpg",
    alt: "El Cuco 68m² - Dormitorio principal amplio y luminoso"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250218100536%20%281%29.png-bJ9tCnReAknMp3DMXmWFqsLuy9mZ1y.jpeg",
    alt: "El Cuco 68m² - Interior con cocina y acceso a dormitorios"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/40ft_Layout_5_%E5%89%AF%E6%9C%AC-lApyptviWD31tv1s7k6NxNCjjNdMcO.jpg",
    alt: "El Cuco 68m² - Plano distribución 3 dormitorios"
  },
]

const features = [
  "Sistema de expansión hidráulico patentado",
  "Triplica el espacio tras el despliegue",
  "Paredes laterales que se despliegan en minutos",
  "2-3 dormitorios + salón-cocina + baño completo",
  "68 m² de superficie útil",
  "Estructura autoportante sobre chasis propio",
  "Instalación posible sin cimentación fija",
  "Aislamiento térmico premium",
  "Certificación CE + ISO",
  "Garantía de 3 años en estructura",
]

export default function Cuco68Page() {
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
          <Link href="/cuco-36" className="text-[#c9a55c]/70 hover:text-[#c9a55c] transition-colors font-serif text-sm">
            ← Ver El Cuco 36
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Title */}
        <div className="text-center mb-12">
          <p className="text-[#c9a55c] text-sm tracking-[0.3em] uppercase mb-2 font-serif">Espacio familiar</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">El Cuco 68</h1>
          <p className="text-white/60 text-lg font-serif">Casa Expandible 68 m² - 2-3 dormitorios</p>
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
            <div className="grid grid-cols-6 gap-2">
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
              <h2 className="font-serif text-2xl text-white mb-2">El Cuco 68</h2>
              <p className="text-[#c9a55c] text-xl font-serif mb-1">68 m²</p>
              <p className="text-white/60 mb-2">2-3 dormitorios + salón-cocina + baño</p>
              <p className="text-white/50 text-sm mb-3">Modelo familiar con espacio amplio para toda la familia</p>
              <p className="text-[#c9a55c] text-2xl font-serif">Desde 25.000€</p>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed font-serif">
              El modelo familiar de la serie Cuco ofrece 68m² de espacio útil con hasta 3 dormitorios, 
              amplio salón-cocina integrado y baño completo. Ideal para familias que buscan una 
              vivienda principal o segunda residencia con todas las comodidades.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <a
                href="/presupuesto"
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
              <h3 className="font-serif text-lg text-white mb-2">Vivienda Principal</h3>
              <p className="text-white/50 font-serif text-sm leading-relaxed">
                Espacio suficiente para una familia con 2-3 dormitorios, salón amplio, 
                cocina equipada y baño completo.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg text-white mb-2">Segunda Residencia</h3>
              <p className="text-white/50 font-serif text-sm leading-relaxed">
                Perfecta para casa de vacaciones con toda la familia. 
                Posibilidad de instalación sin cimentación fija en algunos casos.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg text-white mb-2">Alojamiento Premium</h3>
              <p className="text-white/50 font-serif text-sm leading-relaxed">
                Ideal para proyectos de turismo rural de alta gama, glamping de lujo o 
                alojamientos diferenciados para familias.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
