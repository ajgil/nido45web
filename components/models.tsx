"use client"

import Image from "next/image"
import { Ruler, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"

const modelKeys = ['appleCabin', 'spaceCapsule', 'cuco36', 'cuco68', 'basicModule', 'casa90', 'mansion', 'offices'] as const

const modelData = [
  // Smart Homes (Flamenco, Colibri, Cuco 36, Cuco 68)
  {
    id: "flamenco",
    key: "appleCabin" as const,
    image: "/images/flamenco-cover.png",
    size: "Sin limite",
    price: "Desde 15.000",
    link: "/flamenco",
    cte: true
  },
  {
    id: "colibri",
    key: "spaceCapsule" as const,
    image: "/images/colibri-cover.png",
    size: "27-38 m2",
    price: "Desde 36.000",
    link: "/colibri",
    cte: true
  },
  {
    id: "cuco-36",
    key: "cuco36" as const,
    image: "/images/hero-5.png",
    size: "36 m2",
    price: "Desde 17.500",
    link: "/cuco-36",
    cte: true
  },
  {
    id: "cuco-68",
    key: "cuco68" as const,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%206%20may%202026%2C%2020_12_00-RkzzeUCSX7dHTJNLnqkbXKCu7igWEC.png",
    size: "68 m2",
    price: "Desde 25.000",
    link: "/cuco-68",
    cte: true
  },
  // Flat Pack (Gorrion, Halcon, Aguila)
  {
    id: "gorrion",
    key: "basicModule" as const,
    image: "/images/gorrion-cover.png",
    imagePosition: "top",
    size: "15 m2",
    price: "Desde 6.000",
    link: "/gorrion",
    cte: true
  },
  {
    id: "halcon",
    key: "casa90" as const,
    image: "/images/halcon-cover.png",
    size: "90 m2",
    price: "Desde 36.000",
    link: "/halcon",
    cte: true
  },
  {
    id: "aguila",
    key: "mansion" as const,
    image: "/images/aguila-cover.png",
    size: "150 m2",
    price: "Desde 60.000",
    link: "/aguila",
    cte: true
  },
  // Oficinas (Martin)
  {
    id: "martin",
    key: "offices" as const,
    image: "/images/martin-cover.png",
    size: "Desde 30 m2",
    price: "Desde 12.000",
    link: "/martin",
    cte: true
  }
]

export function Models() {
  const { t } = useLocale()

  return (
    <section id="modelos" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a55c] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            {t.models.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            {t.models.title}
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a55c] to-transparent mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            {t.models.description}
          </p>
          
          {/* Manufacturing Speed Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-[#1a1a1a] border border-[#333] p-6">
              <p className="text-[#c9a55c] font-serif text-3xl mb-2">10x</p>
              <p className="text-white/60 text-sm">{t.models.speedTitle}</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] p-6">
              <p className="text-[#c9a55c] font-serif text-3xl mb-2">3x</p>
              <p className="text-white/60 text-sm">{t.models.profitTitle}</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] p-6">
              <p className="text-[#c9a55c] font-serif text-3xl mb-2">45</p>
              <p className="text-white/60 text-sm">{t.models.daysTitle}</p>
            </div>
          </div>
          <p className="text-white/40 text-sm max-w-3xl mx-auto">
            {t.models.manufacturingNote}
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modelData.map((model) => {
            const modelTranslations = t.models[model.key]
            return (
              <Link 
                href={model.link} 
                key={model.id} 
                className="group relative overflow-hidden bg-[#1a1a1a] border border-[#333] hover:border-[#c9a55c]/50 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={model.image}
                    alt={modelTranslations.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: model.imagePosition || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/20 to-transparent" />
                  
                  {/* CTE Badge */}
                  {model.cte && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold bg-[#c9a55c] text-black px-2 py-1 tracking-wider">
                      CTE
                    </span>
                  )}

                  {/* Price overlay */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[#c9a55c] font-serif text-2xl">
                      {model.price}
                    </span>
                    <span className="text-white/60 text-lg ml-1">EUR</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl text-white group-hover:text-[#c9a55c] transition-colors">
                      {modelTranslations.name}
                    </h3>
                    <span className="flex items-center gap-1.5 text-white/50 text-sm">
                      <Ruler className="w-4 h-4" />
                      {model.size}
                    </span>
                  </div>
                  
                  <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                    {modelTranslations.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {modelTranslations.features.slice(0, 3).map((feature: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-xs text-white/40 border border-white/20 px-2.5 py-1 tracking-wide"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[#c9a55c] text-sm font-medium tracking-wide group-hover:gap-3 transition-all">
                      {t.models.viewMore}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <a
                      href="/NIDO45_Catalogo.pdf"
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 border border-white/20 text-white/50 hover:border-[#c9a55c] hover:text-[#c9a55c] transition-colors"
                      title={t.nav?.downloadCatalog || "Descargar Catálogo"}
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
