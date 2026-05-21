"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, FileText, ExternalLink, CheckCircle, Sparkles, Zap, Wifi, ThermometerSun, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const spaceCapsuleImages = [
  { src: "/images/smart-home-ext-1.jpg", alt: "Space Capsule - Exterior futurista", type: "image" },
  { src: "/images/smart-home-ext-2.jpg", alt: "Space Capsule - Vista lateral", type: "image" },
  { src: "/images/smart-home-ext-3.jpg", alt: "Space Capsule - Diseño angular", type: "image" },
  { src: "/videos/space-capsule-interior.mp4", alt: "Space Capsule - Video Interior", type: "video" },
]

const appleCabinImages = [
  { src: "/images/apple-cabin-resort.jpg", alt: "Apple Cabin - Complejo modular resort de montana", type: "image" },
  { src: "/images/smart-home-ext-4.jpg", alt: "Apple Cabin - Exterior moderno", type: "image" },
  { src: "/images/apple-cabin-playa.jpg", alt: "Apple Cabin - Glamping playa tropical con cocoteros", type: "image" },
  { src: "/images/apple-cabin-bosque.jpg", alt: "Apple Cabin - Glamping bosque con lago y montanas", type: "image" },
  { src: "/images/smart-home-ext-5.jpg", alt: "Apple Cabin - Vista completa", type: "image" },
]

const spaceCapsuleModels = [
  { name: "Z5 Studio", size: "21 m2", bedrooms: "1", desc: "Estudio compacto ideal para glamping" },
  { name: "Z5 Suite", size: "30 m2", bedrooms: "1+", desc: "Suite premium con zona de estar", popular: true },
  { name: "Z5 Family", size: "40 m2", bedrooms: "2", desc: "Versión familiar con 2 dormitorios" },
]

const appleCabinModels = [
  { name: "Apple Cabin 20FT", size: "13 m2", floors: "1", desc: "Compacta de una planta" },
  { name: "Apple Cabin 40FT", size: "26 m2", floors: "1", desc: "Versión ampliada una planta" },
  { name: "Apple Cabin Duplex", size: "26 m2", floors: "2", desc: "Dos plantas con balcón", popular: true },
]

const features = [
  { icon: Sparkles, title: "Diseño Futurista", desc: "Estética sci-fi con líneas angulares y acabados metálicos" },
  { icon: Zap, title: "LED Integrado", desc: "Iluminación ambiental con tiras LED en todo el contorno" },
  { icon: Wifi, title: "Smart Ready", desc: "Preparado para domótica y sistemas inteligentes" },
  { icon: ThermometerSun, title: "Aislamiento Premium", desc: "Confort térmico en cualquier clima" },
]

export default function SmartHomesPage() {
  const [selectedCapsule, setSelectedCapsule] = useState(0)
  const [selectedCabin, setSelectedCabin] = useState(0)
  const [activeTab, setActiveTab] = useState<'capsule' | 'cabin'>('capsule')

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Volver al catálogo</span>
          </Link>
          <Link href="/presupuesto">
            <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Solicitar Presupuesto
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">
            Diseño Futurista
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Smart Homes High-Tech
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cápsulas Espaciales y Apple Cabins con diseño de vanguardia. Acabados premium, 
            iluminación LED integrada y estética inspirada en la ciencia ficción. Perfectas 
            para glamping de lujo, proyectos turísticos y espacios diferenciadores.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-secondary/50 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setActiveTab('capsule')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'capsule' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Space Capsule
            </button>
            <button
              onClick={() => setActiveTab('cabin')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'cabin' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Apple Cabin
            </button>
          </div>
        </div>

        {/* Space Capsule Section */}
        {activeTab === 'capsule' && (
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
                  {spaceCapsuleImages[selectedCapsule].type === 'video' ? (
                    <video
                      src={spaceCapsuleImages[selectedCapsule].src}
                      controls
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Image
                      src={spaceCapsuleImages[selectedCapsule].src}
                      alt={spaceCapsuleImages[selectedCapsule].alt}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {spaceCapsuleImages.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCapsule(idx)}
                      className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all ${
                        selectedCapsule === idx ? "border-accent" : "border-transparent hover:border-muted-foreground/30"
                      }`}
                    >
                      {item.type === 'video' ? (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                          <Play className="w-6 h-6 text-muted-foreground" />
                        </div>
                      ) : (
                        <Image src={item.src} alt={item.alt} fill className="object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Space Capsule Z5</h2>
                <p className="text-muted-foreground mb-6">
                  Diseño inspirado en naves espaciales con líneas angulares, paneles en blanco y gris con 
                  acentos LED dorados. Grandes ventanales panorámicos, interior premium con acabados en 
                  madera y tecnología integrada.
                </p>

                {/* Models */}
                <div className="space-y-3 mb-6">
                  {spaceCapsuleModels.map((model, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-lg border transition-all ${
                        model.popular ? 'border-accent bg-accent/5' : 'border-border bg-secondary/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-foreground">{model.name}</span>
                        {model.popular && (
                          <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                            Más vendido
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{model.size}</span>
                        <span>{model.bedrooms} dormitorio(s)</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{model.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/presupuesto" className="block">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12">
                      Solicitar Presupuesto
                    </Button>
                  </Link>
                  <a
                    href="/NIDO45_Catalogo.pdf"
                    download
                    className="block"
                  >
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 h-12">
                      <FileText className="w-5 h-5 mr-2" />
                      Descargar Catálogo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Apple Cabin Section */}
        {activeTab === 'cabin' && (
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
                  <Image
                    src={appleCabinImages[selectedCabin].src}
                    alt={appleCabinImages[selectedCabin].alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {appleCabinImages.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCabin(idx)}
                      className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all ${
                        selectedCabin === idx ? "border-accent" : "border-transparent hover:border-muted-foreground/30"
                      }`}
                    >
                      <Image src={item.src} alt={item.alt} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Apple Cabin</h2>
                <p className="text-muted-foreground mb-6">
                  Diseño compacto con techo inclinado distintivo que recuerda la silueta de una manzana. 
                  Líneas modernas, grandes ventanales y opción de balcón en versión de dos plantas. 
                  Perfecta para estudios, oficinas en el jardín o alojamiento turístico.
                </p>

                {/* Models */}
                <div className="space-y-3 mb-6">
                  {appleCabinModels.map((model, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-lg border transition-all ${
                        model.popular ? 'border-accent bg-accent/5' : 'border-border bg-secondary/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-foreground">{model.name}</span>
                        {model.popular && (
                          <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                            Más vendido
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{model.size}</span>
                        <span>{model.floors} planta(s)</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{model.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/presupuesto" className="block">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12">
                      Solicitar Presupuesto
                    </Button>
                  </Link>
                  <a
                    href="/NIDO45_Catalogo.pdf"
                    download
                    className="block"
                  >
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 h-12">
                      <FileText className="w-5 h-5 mr-2" />
                      Descargar Catálogo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">Características High-Tech</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-secondary/30 rounded-lg p-4 text-center">
                <feature.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ideal For */}
        <section className="bg-secondary/30 rounded-lg p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Ideal Para</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Glamping de Lujo", desc: "Alojamientos turísticos diferenciadores que sorprenden" },
              { title: "Oficinas Creativas", desc: "Espacios de trabajo inspiradores en tu jardín" },
              { title: "Airbnb Premium", desc: "Propiedades únicas con alta rentabilidad" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
