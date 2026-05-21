"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, CheckCircle } from "lucide-react"

const images = [
  { src: "/images/flamenco-cover.png", alt: "El Flamenco - Apple Cabin - Vivienda de lujo llave en mano" },
  { src: "/images/apple-cabin-20-exterior.jpg", alt: "El Flamenco - Apple Cabin exterior" },
  { src: "/images/apple-cabin-20-blanca.jpg", alt: "El Flamenco - Modelo blanco con deck" },
  { src: "/images/apple-cabin-20-piscina.jpg", alt: "El Flamenco - Junto a piscina" },
  { src: "/images/apple-cabin-20-interior.jpg", alt: "El Flamenco - Interior salón y cocina" },
  { src: "/images/apple-cabin-20-bano.jpg", alt: "El Flamenco - Baño completo" },
  { src: "/images/apple-cabin-40-duplex-lago.jpg", alt: "El Flamenco - Dúplex junto al lago" },
  { src: "/images/apple-cabin-40-duplex-jardin.webp", alt: "El Flamenco - Dúplex con balcón" },
]

const features = [
  "Vivienda lista para vivir - llave en mano",
  "Transporte e instalación incluidos",
  "Calidades de lujo y acabados premium",
  "Estructura de acero galvanizado",
  "Aislamiento térmico y acústico premium",
  "Ventanas panorámicas de doble cristal",
  "Instalación eléctrica y fontanería completas",
  "Baño completo con ducha de cristal",
  "Cocina equipada con electrodomésticos",
  "Certificación CE + ISO + CTE",
]

const variants = [
  { name: "20 Pies", size: "12.6 m²", price: "Desde 15.000€" },
  { name: "40 Pies", size: "25.2 m²", price: "Desde 30.000€" },
  { name: "Dúplex 2 plantas", size: "37.8 m²", price: "Consultar" },
  { name: "Combinación personalizada", size: "Sin límite", price: "Consultar" },
]

export default function AppleCabinPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      {/* Header */}
      <header className="border-b border-[#c9a55c]/20 bg-[#0f0f0f]/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
          <Link href="/#modelos" className="flex items-center gap-2 text-[#c9a55c]/70 hover:text-[#c9a55c] transition-colors font-serif">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al catálogo</span>
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Title */}
        <div className="text-center mb-12">
          <p className="text-[#c9a55c] text-sm tracking-[0.3em] uppercase mb-2 font-serif">Elegancia que se posa donde tú quieras</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">El Flamenco</h1>
          <p className="text-white/60 text-lg font-serif">Apple Cabin - Viviendas de Lujo Llave en Mano</p>
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
            <div className="grid grid-cols-4 gap-2">
              {images.slice(0, 8).map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-video rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? "border-[#c9a55c]" : "border-transparent hover:border-[#c9a55c]/50"
                  }`}
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <p className="text-white/70 mb-6 leading-relaxed font-serif">
              Viviendas modulares de nueva generación con calidades de lujo y acabados premium. 
              Módulos de 20, 30 y 40 pies combinables sin límite: una planta, dos plantas, tres plantas... 
              las posibilidades son infinitas. Precio incluye transporte e instalación.
            </p>

            {/* Variants */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {variants.map((variant, idx) => (
                <div key={idx} className="p-4 bg-[#1a1a1a] rounded-lg border border-[#c9a55c]/20">
                  <h3 className="font-serif text-white mb-1">{variant.name}</h3>
                  <p className="text-white/50 text-sm mb-2">{variant.size}</p>
                  <p className="text-[#c9a55c] font-serif">{variant.price}</p>
                </div>
              ))}
            </div>

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

        {/* Info Section */}
        <section className="bg-[#1a1a1a] rounded-lg p-8 border border-[#c9a55c]/10">
          <h2 className="font-serif text-2xl text-white mb-6 text-center">Combinaciones Infinitas</h2>
          <p className="text-white/60 font-serif text-center max-w-3xl mx-auto leading-relaxed">
            Módulos de 20, 30 y 40 pies que puedes combinar sin límite. Una planta, dos plantas, tres plantas... 
            diseña tu vivienda ideal con la superficie que necesites. Todas las configuraciones pueden incluir 
            cenador, balcón y escalera exterior. Como el flamenco - inconfundible allá donde se instala.
          </p>
        </section>
      </div>
    </main>
  )
}
