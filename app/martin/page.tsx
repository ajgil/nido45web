"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, CheckCircle, Building2, Users, Monitor } from "lucide-react"

const images = [
  { src: "/images/martin-cover.png", alt: "El Martín - Oficinas Modulares - Edificios profesionales flat pack" },
  { src: "/images/oficinas-hero.jpg", alt: "Edificio de oficinas modular" },
  { src: "/images/sala-reuniones-1.jpg", alt: "Sala de reuniones ejecutiva" },
  { src: "/images/sala-reuniones-2.jpg", alt: "Sala de conferencias" },
  { src: "/images/sala-reuniones-3.jpg", alt: "Sala con proyector" },
  { src: "/images/sala-reuniones-4.jpg", alt: "Sala de reuniones equipada" },
]

const features = [
  "Edificios de 1 a 3 plantas",
  "Fachadas de cristal panorámico",
  "Salas de reuniones equipadas",
  "Espacios diáfanos configurables",
  "Escaleras y balcones exteriores",
  "Instalación eléctrica completa",
  "Aire acondicionado preparado",
  "Aislamiento térmico y acústico",
]

const configurations = [
  { name: "Oficina Individual", size: "30 m2", price: "12.000 EUR" },
  { name: "Oficina con Reuniones", size: "60 m2", price: "24.000 EUR" },
  { name: "Edificio 2 Plantas", size: "120 m2", price: "48.000 EUR" },
  { name: "Complejo Empresarial", size: "240+ m2", price: "A consultar" },
]

export default function OficinasModularesPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/#modelos" className="inline-flex items-center text-[#c9a55c] hover:text-[#c9a55c]/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al catálogo
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-[#c9a55c]/20 bg-[#1a1a1a]">
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
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? "border-[#c9a55c]" : "border-transparent hover:border-[#c9a55c]/30"
                    }`}
                  >
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-sm font-medium text-[#c9a55c] uppercase tracking-[0.3em] mb-3">
                Oficinas Flat Pack
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
                El Martín
              </h1>
              <p className="text-xl text-white/80 mb-6 font-serif italic">
                Profesional, eficaz y polivalente.
              </p>
              <p className="text-white/60 mb-6 leading-relaxed">
                Edificios de oficinas profesionales listos en semanas, no en años. 
                Desde pequeñas oficinas hasta complejos empresariales de varias plantas.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-[#1a1a1a] rounded-lg p-4 text-center border border-[#c9a55c]/10">
                  <Building2 className="w-6 h-6 text-[#c9a55c] mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Varias Plantas</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg p-4 text-center border border-[#c9a55c]/10">
                  <Users className="w-6 h-6 text-[#c9a55c] mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Salas Reuniones</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg p-4 text-center border border-[#c9a55c]/10">
                  <Monitor className="w-6 h-6 text-[#c9a55c] mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Fachada Cristal</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="text-3xl font-serif text-[#c9a55c]">Desde 12.000 EUR</span>
              </div>

              <div className="flex flex-col gap-3">
                <Link href="/presupuesto">
                  <Button size="lg" className="w-full bg-[#c9a55c] hover:bg-[#c9a55c]/90 text-black font-medium">
                    Solicitar Presupuesto
                  </Button>
                </Link>
                <a
                  href="/NIDO45_Catalogo.pdf"
                  download
                >
                  <Button size="lg" variant="outline" className="w-full border-[#c9a55c] text-[#c9a55c] hover:bg-[#c9a55c]/10 font-medium">
                    <FileText className="w-5 h-5 mr-2" />
                    Descargar Catálogo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-white text-center mb-12">Características Incluidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#1a1a1a] rounded-lg p-4 border border-[#c9a55c]/10">
                <CheckCircle className="w-5 h-5 text-[#c9a55c] shrink-0" />
                <span className="text-white/70 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-white text-center mb-12">Configuraciones Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {configurations.map((config, idx) => (
              <div key={idx} className="bg-[#1a1a1a] rounded-xl p-6 text-center border border-[#c9a55c]/10 hover:border-[#c9a55c]/30 transition-colors">
                <h3 className="font-serif text-white text-lg mb-2">{config.name}</h3>
                <p className="text-white/60 text-sm mb-4">{config.size}</p>
                <p className="text-xl font-serif text-[#c9a55c]">{config.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uses */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#c9a55c]/10">
            <h2 className="font-serif text-2xl text-white mb-6 text-center">Usos Ideales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-serif text-white text-lg mb-2">Oficinas de Obra</h3>
                <p className="text-white/60 text-sm">Instalación rápida, reubicables cuando termine la obra.</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-white text-lg mb-2">Sedes Corporativas</h3>
                <p className="text-white/60 text-sm">Edificios permanentes con aspecto profesional.</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-white text-lg mb-2">Centros de Formación</h3>
                <p className="text-white/60 text-sm">Aulas y salas equipadas para cualquier uso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
