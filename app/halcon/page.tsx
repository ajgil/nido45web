"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  { src: "/images/halcon-cover.png", alt: "El Halcón - Casa 90m² - 3 dormitorios - 6 módulos flat pack" },
  { src: "/images/casa-90m-dormitorio.jpg", alt: "El Halcón - Dormitorio principal" },
  { src: "/images/casa-90m-cocina.jpg", alt: "El Halcón - Cocina" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/halcon%20planta.png-fvzA3MmaWKMwBuhZIxro4vMlPSY4RD.jpeg", alt: "El Halcón - Plano distribución 90m² con 3 dormitorios" },
]

const features = [
  "Salón-cocina diáfano de 40.7 m² con muro cortina de cristal",
  "Dormitorio principal de 12.9 m²",
  "Dormitorio 2 de 8.2 m²",
  "Dormitorio 3 de 8.2 m²",
  "Puerta corredera de acceso",
  "Ventanas en todas las habitaciones",
  "Dimensiones totales: 11.7m x 5.95m",
  "Altura interior: 2.9m",
  "Certificación CE + ISO + CTE",
]

export default function Casa90mPage() {
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
          <p className="text-[#c9a55c] text-sm tracking-[0.3em] uppercase mb-2 font-serif">Potente y equilibrado</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">El Halcón</h1>
          <p className="text-white/60 text-lg font-serif">Casa 90 m² - 3 Dormitorios - 6 Módulos</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Gallery */}
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
              {images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? "border-[#c9a55c]" : "border-transparent hover:border-[#c9a55c]/50"
                  }`}
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="mb-6 p-4 bg-[#c9a55c]/10 rounded-lg border border-[#c9a55c]/20">
              <p className="text-[#c9a55c] text-2xl font-serif mb-1">Desde 36.000€</p>
              <p className="text-white/60 font-serif">6 módulos combinados - 90 m²</p>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed font-serif">
              Casa completa de una planta construida con 6 módulos básicos. Distribución óptima con 3 dormitorios, 
              salón-comedor luminoso y cocina abierta. Perfecta para familias que buscan una vivienda asequible, 
              rápida de instalar y con acabados de calidad.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <Link href="/presupuesto">
                <Button size="lg" className="w-full bg-[#c9a55c] hover:bg-[#b8944b] text-black font-serif tracking-wide">
                  Solicitar Presupuesto
                </Button>
              </Link>
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
              <h3 className="font-serif text-lg text-white">Distribución y Características:</h3>
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

        {/* Pricing Section */}
        <section className="bg-[#1a1a1a] rounded-lg p-8 border border-[#c9a55c]/10">
          <h2 className="font-serif text-2xl text-white mb-6 text-center">Precio Estimado</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-[#0f0f0f] rounded-lg border border-[#c9a55c]/20">
              <p className="text-white/50 font-serif text-sm mb-1">Módulos (6 uds)</p>
              <p className="text-2xl font-serif text-white">36.000€</p>
              <p className="text-white/40 text-xs">6.000€/módulo</p>
            </div>
            <div className="text-center p-4 bg-[#0f0f0f] rounded-lg border border-[#c9a55c]/20">
              <p className="text-white/50 font-serif text-sm mb-1">Transporte + Instalación</p>
              <p className="text-2xl font-serif text-white">A consultar</p>
              <p className="text-white/40 text-xs">Según ubicación</p>
            </div>
            <div className="text-center p-4 bg-[#c9a55c]/10 rounded-lg border border-[#c9a55c]">
              <p className="text-[#c9a55c] font-serif text-sm mb-1">Total Estimado</p>
              <p className="text-2xl font-serif text-[#c9a55c]">Desde 45.000€</p>
              <p className="text-white/40 text-xs">500€/m² aprox.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
