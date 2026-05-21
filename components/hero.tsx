"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

const heroImages = [
  {
    src: "/images/hero-1.png",
    alt: "Nido45 - Futuristic modular homes on green hillside with solar panels and robotic installation",
    position: "center"
  },
  {
    src: "/images/hero-2.png",
    alt: "Nido45 - Two-story modular villa at sunset by the water with V-shaped pillars and rooftop terrace",
    position: "center"
  },
  {
    src: "/images/hero-3.png",
    alt: "Nido45 - Luxury capsule home at sunset by a serene lake surrounded by pine forest",
    position: "center"
  },
  {
    src: "/images/hero-4.png",
    alt: "Nido45 - Rustic glamping resort with stacked modular homes, string lights, and cozy village atmosphere",
    position: "top" // Square image - position top to show logo
  },
  {
    src: "/images/hero-5.png",
    alt: "Nido45 - Tropical beach house with wooden deck terrace and outdoor lounge on white sand",
    position: "center"
  }
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToModels = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('modelos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full bg-[#0a0a0a]">
      {/* Hero Images Slideshow - full width, consistent aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
        {heroImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            className={`object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectPosition: image.position }}
            quality={85}
            sizes="100vw"
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToModels}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-[#c9a55c] transition-colors cursor-pointer z-10"
        aria-label="Scroll to catalog"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
}
