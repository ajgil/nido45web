"use client"

import { BadgeCheck, Clock, Truck, Gem, Expand, HeadphonesIcon } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

const advantageIcons = {
  certified: BadgeCheck,
  fast: Clock,
  installation: Truck,
  quality: Gem,
  flexible: Expand,
  support: HeadphonesIcon
}

const advantageKeys = ['certified', 'fast', 'installation', 'quality', 'flexible', 'support'] as const

export function Advantages() {
  const { t } = useLocale()

  return (
    <section id="ventajas" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#c9a55c] uppercase tracking-[0.3em] mb-3">
            {t.advantages.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {t.advantages.title}
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c9a55c]/50 to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantageKeys.map((key) => {
            const Icon = advantageIcons[key]
            const advantage = t.advantages.items[key]
            return (
              <div
                key={key}
                className="bg-[#1a1a1a] p-8 rounded-lg border border-[#c9a55c]/10 hover:border-[#c9a55c]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#c9a55c]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c9a55c]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#c9a55c]" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
