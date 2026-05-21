"use client"

import { useLocale } from "@/lib/locale-context"
import { LanguageSelector } from "@/components/language-selector"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="bg-[#0f0f0f] text-white py-12 border-t border-[#c9a55c]/20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="#modelos" className="font-serif text-sm tracking-wide text-white/60 hover:text-[#c9a55c] transition-colors">
            {t.nav.models}
          </a>
          <a href="#ventajas" className="font-serif text-sm tracking-wide text-white/60 hover:text-[#c9a55c] transition-colors">
            {t.nav.advantages}
          </a>
          <a href="#faq" className="font-serif text-sm tracking-wide text-white/60 hover:text-[#c9a55c] transition-colors">
            {t.nav.faq}
          </a>
          <a href="#contacto" className="font-serif text-sm tracking-wide text-white/60 hover:text-[#c9a55c] transition-colors">
            {t.nav.contact}
          </a>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://wa.me/34645476491" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-white/60 hover:text-[#c9a55c] transition-colors"
          >
            WhatsApp
          </a>
          <span className="text-white/30">|</span>
          <a 
            href="mailto:info@nido45.es" 
            className="text-sm text-white/60 hover:text-[#c9a55c] transition-colors"
          >
            info@nido45.es
          </a>
        </div>

        {/* Language Selector and CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <LanguageSelector />
          <a
            href="https://nido45spain.github.io/nido45"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-[#c9a55c] hover:bg-[#b8944b] text-black font-serif tracking-wide text-sm"
            >
              {t.nav?.requestQuote || "Solicitar Presupuesto"}
            </Button>
          </a>
          <a
            href="/NIDO45_Catalogo.pdf"
            download
          >
            <Button 
              className="bg-transparent border border-[#c9a55c]/50 text-white hover:bg-[#c9a55c]/20 hover:border-[#c9a55c] transition-all duration-300 font-serif tracking-wide text-sm"
            >
              <FileText className="w-4 h-4 mr-2" />
              {t.nav?.downloadCatalog || "Descargar Catálogo"}
            </Button>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a55c]/30 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex items-center justify-center">
          <p className="text-sm text-white/50 font-serif tracking-wide">
            © {new Date().getFullYear()} Nido45.com · {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
