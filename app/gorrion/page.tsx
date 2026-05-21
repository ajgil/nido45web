"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, CheckCircle, Truck, Building2, Layers } from "lucide-react"

const images = [
  {
    src: "/images/gorrion-cover.png",
    alt: "El Gorrión - Módulo Básico 15m² - Sistema flat pack combinable",
    category: "cover"
  },
  {
    src: "/images/gorrion-exterior-mar.jpg",
    alt: "El Gorrión - Módulo 15m² con vistas al mar Mediterráneo",
    category: "hero"
  },
  {
    src: "/images/gorrion-bancales.png",
    alt: "El Gorrión - Múltiples módulos apilados en bancales con vistas al océano",
    category: "exterior"
  },
  {
    src: "/images/gorrion-interior-dormitorio.jpg",
    alt: "El Gorrión - Dormitorio de lujo con escritorio y vistas al bosque",
    category: "interior"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gorrion%20planta.png-rws8407d6qReMKnf3Q9ZoEAHu5aFwi.jpeg",
    alt: "El Gorrión - Plano distribución 15m² con baño y cocina",
    category: "floorplan"
  },
]

const features = [
  "Sistema de paneles planos (flat pack) para transporte económico",
  "Sin límite de superficie: combina tantos módulos como necesites",
  "Apilable verticalmente: 2 o más plantas",
  "Combinable horizontalmente sin restricciones",
  "Estructura de acero galvanizado de 2mm de espesor",
  "Paneles sandwich con aislamiento térmico y acústico",
  "Acabados exteriores: efecto madera, blanco o personalizable",
  "Interior diáfano listo para distribuir a tu gusto",
]

export default function ModuloBasicoPage() {
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-[#c9a55c] uppercase tracking-[0.3em] mb-3">
                Módulo Básico 15 m²
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                El Gorrión
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed font-serif italic">
                Pequeño, ágil, va a donde tú vayas.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed text-lg">
                15 m² completos con baño integrado. Habitación, zona de trabajo, ducha, WC y lavabo. 
                Estructura de acero galvanizado. Paneles sandwich aislantes. Montaje en 4-6 horas. 
                Sin maquinaria pesada. Sin cimentación especial.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="text-3xl md:text-4xl font-serif text-[#c9a55c]">
                  Desde 6.000 EUR
                </span>
                <span className="text-white/50 text-lg">
                  por módulo
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://nido45spain.github.io/nido45"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-[#c9a55c] hover:bg-[#c9a55c]/90 text-black font-medium text-lg px-8 py-6">
                    Solicitar Presupuesto
                  </Button>
                </a>
                <a
                  href="/NIDO45_Catalogo.pdf"
                  download
                >
                  <Button size="lg" variant="outline" className="border-[#c9a55c] text-[#c9a55c] hover:bg-[#c9a55c]/10 font-medium text-lg px-8 py-6">
                    <FileText className="w-5 h-5 mr-2" />
                    Descargar Catálogo
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#c9a55c]/20">
                <Image
                  src="/images/gorrion-exterior-mar.jpg"
                  alt="El Gorrión - Módulo 15m² con vistas al mar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Versatility Section */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Úsalo solo o combínalos sin límite
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              El gorrión no necesita mucho espacio para vivir bien. Tú tampoco.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#c9a55c]/10 hover:border-[#c9a55c]/30 transition-colors">
              <div className="text-4xl font-serif text-[#c9a55c] mb-4">1</div>
              <h3 className="font-serif text-white text-lg mb-2">Solo</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Alojamiento turístico, oficina de jardín, estudio creativo, caseta de invitados.
              </p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#c9a55c]/10 hover:border-[#c9a55c]/30 transition-colors">
              <div className="text-4xl font-serif text-[#c9a55c] mb-4">x4</div>
              <h3 className="font-serif text-white text-lg mb-2">Módulos</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Vivienda completa desde 12.000 EUR. Salón, cocina, dormitorios y baños a tu medida.
              </p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#c9a55c]/10 hover:border-[#c9a55c]/30 transition-colors">
              <div className="text-4xl font-serif text-[#c9a55c] mb-4">2+</div>
              <h3 className="font-serif text-white text-lg mb-2">Plantas</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Hotel, glamping de lujo, residencia de trabajadores. Apilable sin límite.
              </p>
            </div>
          </div>

          {/* Bancales Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-[#c9a55c]/20">
            <Image
              src="/images/gorrion-bancales.png"
              alt="El Gorrión - Módulos apilados en bancales con vistas al océano"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg md:text-xl font-serif">
                Se envía desmontado en paquete plano. Hasta un 60% menos en costes de transporte. 
                Llega donde otros no pueden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery and Features */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-[#c9a55c]/20 bg-[#1a1a1a]">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? "border-[#c9a55c]" : "border-transparent hover:border-[#c9a55c]/30"
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

            <div>
              <h2 className="font-serif text-2xl text-white mb-6">Características Incluidas</h2>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/70">
                    <CheckCircle className="w-5 h-5 text-[#c9a55c] mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center border border-[#c9a55c]/10">
              <div className="w-14 h-14 bg-[#c9a55c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-7 h-7 text-[#c9a55c]" />
              </div>
              <h3 className="font-serif text-white text-lg mb-2">Transporte Económico</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Al enviarse desmontado en paquete plano, caben varios módulos en un solo contenedor.
              </p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center border border-[#c9a55c]/10">
              <div className="w-14 h-14 bg-[#c9a55c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-[#c9a55c]" />
              </div>
              <h3 className="font-serif text-white text-lg mb-2">Superficie Ilimitada</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Combina módulos horizontalmente sin restricciones y apila hasta 2+ plantas.
              </p>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-center border border-[#c9a55c]/10">
              <div className="w-14 h-14 bg-[#c9a55c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-[#c9a55c]" />
              </div>
              <h3 className="font-serif text-white text-lg mb-2">Montaje Rápido</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Cada módulo se monta en 4-6 horas con herramientas básicas.
              </p>
            </div>
          </div>

          {/* Configurations */}
          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#c9a55c]/10">
            <h2 className="font-serif text-2xl text-white mb-6 text-center">Configuraciones Posibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0f0f0f] rounded-xl p-6 border border-[#c9a55c]/10">
                <h3 className="font-serif text-white text-lg mb-2">1 Módulo (~15 m²)</h3>
                <p className="text-2xl font-serif text-[#c9a55c] mb-2">Desde 6.000 EUR</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Estudio, oficina de jardín, caseta de invitados, trastero o punto de venta.
                </p>
              </div>
              <div className="bg-[#0f0f0f] rounded-xl p-6 border border-[#c9a55c]/10">
                <h3 className="font-serif text-white text-lg mb-2">2-4 Módulos (30-60 m²)</h3>
                <p className="text-2xl font-serif text-[#c9a55c] mb-2">Desde 12.000 EUR</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Vivienda completa con 1-2 dormitorios, salón-cocina y baño.
                </p>
              </div>
              <div className="bg-[#0f0f0f] rounded-xl p-6 border border-[#c9a55c]/10">
                <h3 className="font-serif text-white text-lg mb-2">2 Plantas (72+ m²)</h3>
                <p className="text-2xl font-serif text-[#c9a55c] mb-2">A consultar</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Vivienda familiar, hotel modular o cualquier proyecto vertical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Empieza tu proyecto hoy
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Contáctanos para recibir un presupuesto personalizado sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://nido45spain.github.io/nido45"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#c9a55c] hover:bg-[#c9a55c]/90 text-black font-medium text-lg px-8 py-6">
                Solicitar Presupuesto
              </Button>
            </a>
            <a
              href="/NIDO45_Catalogo.pdf"
              download
            >
              <Button size="lg" variant="outline" className="border-[#c9a55c] text-[#c9a55c] hover:bg-[#c9a55c]/10 font-medium text-lg px-8 py-6">
                <FileText className="w-5 h-5 mr-2" />
                Descargar Catálogo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
