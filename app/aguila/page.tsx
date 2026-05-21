"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, CheckCircle } from "lucide-react"

const images = [
  { src: "/images/aguila-cover.png", alt: "El Águila - Mansión 150m² - Villa de lujo 2 plantas - 10 módulos" },
  { src: "/images/mansion-interior-bedroom.jpg", alt: "El Águila - Dormitorio" },
  { src: "/images/mansion-interior-kitchen.jpg", alt: "El Águila - Cocina" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aguila%20planta%20alta-K4a6iHuycJICk2zv4k3A7eGCjMMU4I.png", alt: "El Águila - Plano planta alta con master suite y walk-in closet" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aguila%20interior%20alta.png-4DhgGB5dyDgImAfqdaTqXsVXQtIQqr.jpeg", alt: "El Águila - Interior planta alta con dormitorio principal y vistas al mar" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aguila%20interior%20bajo.png-jsBHp7rg9mBHNzezjG5cZONeoK32BL.jpeg", alt: "El Águila - Interior planta baja con salón, piscina y vistas al atardecer" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aguila%20planta%20baja.png-YHjTyqnE6muOf0Q04Kp94Xi3Og8s0q.jpeg", alt: "El Águila - Plano planta baja con 4 dormitorios, salón-comedor y 2 baños" },
]

const features = [
  "150 m² de superficie habitable",
  "Planta en forma de C con patio interior",
  "2 plantas (5 módulos por planta)",
  "4-5 dormitorios con baño en suite",
  "Salón-comedor de doble altura",
  "Cocina abierta con isla central",
  "Piscina infinita opcional",
  "Terraza panorámica en planta alta",
  "Acabados de lujo personalizables",
  "Certificación CE + ISO + CTE",
]

export default function MansionModularPage() {
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
          <p className="text-[#c9a55c] text-sm tracking-[0.3em] uppercase mb-2 font-serif">La cima del catálogo</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">El Águila</h1>
          <p className="text-white/60 text-lg font-serif">Mansión 150 m² - Villa de Lujo - 10 Módulos</p>
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
            <div className="grid grid-cols-7 gap-2">
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
              <p className="text-[#c9a55c] text-2xl font-serif mb-1">Desde 60.000€</p>
              <p className="text-white/60 font-serif">10 módulos en 2 plantas - 150 m²</p>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed font-serif">
              La casa de tus sueños hecha realidad. Villa de lujo de 2 plantas en forma de C, 
              construida combinando 10 módulos básicos. Diseño personalizable con acabados premium, 
              perfecta para ubicaciones privilegiadas frente al mar.
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
              <h3 className="font-serif text-lg text-white">Características:</h3>
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
          <h2 className="font-serif text-2xl text-white mb-6 text-center">Construye la Casa de Tus Sueños</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-lg text-white mb-3">Sistema Modular Sin Límites</h3>
              <p className="text-white/50 font-serif text-sm leading-relaxed">
                La mansión de 150m² demuestra el potencial ilimitado del sistema modular básico. 
                Combinando 10 módulos de 15m² en una configuración de 2 plantas en forma de C, 
                creamos una villa de lujo con patio interior, vistas panorámicas y espacios 
                diáfanos de doble altura.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-white mb-3">Precio por Módulo</h3>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-[#0f0f0f] rounded border border-[#c9a55c]/20">
                  <span className="text-white/50 font-serif">1 módulo básico (15m²)</span>
                  <span className="text-white font-serif">6.000€</span>
                </div>
                <div className="flex justify-between p-3 bg-[#0f0f0f] rounded border border-[#c9a55c]/20">
                  <span className="text-white/50 font-serif">10 módulos (150m²)</span>
                  <span className="text-white font-serif">60.000€</span>
                </div>
                <div className="flex justify-between p-3 bg-[#c9a55c]/10 rounded border border-[#c9a55c]">
                  <span className="text-white font-serif">Total estimado</span>
                  <span className="text-[#c9a55c] font-serif font-bold">Desde 60.000€</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
