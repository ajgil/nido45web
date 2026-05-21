"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, CheckCircle } from "lucide-react"

const images = [
  { src: "/images/colibri-cover.png", alt: "El Colibrí - Space Cabin Z5/Z7 - Cápsula futurista high-tech" },
  { src: "/images/space-cabin-z7-exterior.jpg", alt: "El Colibrí - Exterior con ventanales panorámicos" },
  { src: "/images/space-cabin-z7-forest.jpg", alt: "El Colibrí - Vista en entorno natural" },
  { src: "/images/space-cabin-z7-interior.jpg", alt: "El Colibrí - Interior de lujo" },
  { src: "/images/space-cabin-z7-showroom.webp", alt: "El Colibrí - Vista showroom" },
  { src: "/images/space-cabin-z7-resort.jpg", alt: "El Colibrí - Instalación en resort" },
]

const features = [
  "Diseño futurista con líneas angulares y acabados premium",
  "Iluminación LED ambiental integrada en el marco",
  "Calentador de última generación incluido",
  "Aire acondicionado oculto de alta eficiencia",
  "Smart Toilet con tecnología japonesa",
  "Ventanas panorámicas de gran formato",
  "Aislamiento térmico y acústico de alta eficiencia",
  "Interior con acabados de madera natural",
]

export default function CapsulaEspacialPage() {
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
                Space Cabin High-Tech
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
                El Colibrí
              </h1>
              <p className="text-xl text-white/80 mb-6 font-serif italic">
                Futurista, único y precioso.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Cápsula espacial con tecnología de última generación. Equipada con calentador, 
                aire acondicionado oculto y Smart Toilet de tecnología japonesa. Disponible en 
                configuraciones Z5 (27m²) y Z7 (38m²).
              </p>

              <div className="space-y-3 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-white/70">
                    <CheckCircle className="w-5 h-5 text-[#c9a55c] mt-0.5 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://nido45spain.github.io/nido45"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full bg-[#c9a55c] hover:bg-[#c9a55c]/90 text-black font-medium">
                    Solicitar Presupuesto
                  </Button>
                </a>
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

      {/* Models */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-white text-center mb-4">Configuraciones Disponibles</h2>
          <p className="text-white/60 text-center mb-12">Mismo diseño futurista, dos tamaños</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#c9a55c]/10 hover:border-[#c9a55c]/30 transition-colors">
              <h3 className="font-serif text-2xl text-white mb-2">El Colibrí Z5</h3>
              <p className="text-3xl font-serif text-[#c9a55c] mb-1">27 m²</p>
              <p className="text-lg text-white/60 mb-4">Desde 36.000 EUR</p>
              <p className="text-white/60 mb-6 leading-relaxed">
                Configuración compacta ideal para glamping de lujo, estudio premium o suite de hotel.
              </p>
              <ul className="text-sm text-white/60 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#c9a55c]" /> 1 dormitorio panorámico</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#c9a55c]" /> Smart Toilet incluido</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#c9a55c]" /> Aire acondicionado oculto</li>
              </ul>
            </div>
            <div className="bg-[#c9a55c]/5 rounded-xl p-8 border-2 border-[#c9a55c] relative">
              <div className="absolute -top-3 left-6 text-xs font-bold text-black bg-[#c9a55c] px-3 py-1 rounded-full uppercase tracking-wider">Más espacio</div>
              <h3 className="font-serif text-2xl text-white mb-2">El Colibrí Z7</h3>
              <p className="text-3xl font-serif text-[#c9a55c] mb-1">38 m²</p>
              <p className="text-lg text-white/60 mb-4">Desde 50.000 EUR</p>
              <p className="text-white/60 mb-6 leading-relaxed">
                Configuración ampliada con espacio para dos dormitorios. Perfecta para familias.
              </p>
              <ul className="text-sm text-white/60 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#c9a55c]" /> 1-2 dormitorios amplios</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#c9a55c]" /> Salón-cocina integrado</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#c9a55c]" /> Toda la tecnología incluida</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Uses */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#c9a55c]/10">
            <h2 className="font-serif text-2xl text-white mb-6 text-center">Usos Recomendados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-serif text-white text-lg mb-2">Glamping Premium</h3>
                <p className="text-white/60 text-sm">Experiencias únicas para huéspedes exigentes.</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-white text-lg mb-2">Resort Exclusivo</h3>
                <p className="text-white/60 text-sm">Diferencia tu resort con cápsulas que impactan.</p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-white text-lg mb-2">Espacio Corporativo</h3>
                <p className="text-white/60 text-sm">Oficina de diseño o showroom VIP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
