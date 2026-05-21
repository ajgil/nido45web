"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLocale } from "@/lib/locale-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLocale()
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-end gap-4">
        {/* Language Selector */}
        <LanguageSelector />
        
        {/* Catalog Button */}
        <a
          href="/NIDO45_Catalogo.pdf"
          download
        >
          <Button 
            className="bg-transparent border border-[#c9a55c]/50 text-white hover:bg-[#c9a55c]/20 hover:border-[#c9a55c] transition-all duration-300 font-serif tracking-wide"
          >
            <FileText className="w-4 h-4 mr-2" />
            {t.nav.catalog || "Catálogo"}
          </Button>
        </a>

        {/* Burger Menu Button */}
        <button
          className="p-2 text-white hover:text-[#c9a55c] transition-colors z-50"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 40 }}
      />

      {/* Side Drawer Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-72 bg-[#0f0f0f]/98 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 45 }}
      >
        {/* Close button inside drawer */}
        <div className="flex justify-end p-4">
          <button
            className="p-2 text-white/60 hover:text-[#c9a55c] transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col px-8 gap-6 mt-8">
          <a 
            href="#modelos" 
            className="font-serif text-xl tracking-wide text-white/80 hover:text-[#c9a55c] transition-colors duration-300 border-b border-[#c9a55c]/10 pb-4" 
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.models}
          </a>
          <a 
            href="#ventajas" 
            className="font-serif text-xl tracking-wide text-white/80 hover:text-[#c9a55c] transition-colors duration-300 border-b border-[#c9a55c]/10 pb-4" 
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.advantages}
          </a>
          <a 
            href="#faq" 
            className="font-serif text-xl tracking-wide text-white/80 hover:text-[#c9a55c] transition-colors duration-300 border-b border-[#c9a55c]/10 pb-4" 
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.faq}
          </a>
          <a 
            href="#contacto" 
            className="font-serif text-xl tracking-wide text-white/80 hover:text-[#c9a55c] transition-colors duration-300 border-b border-[#c9a55c]/10 pb-4" 
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.contact}
          </a>
          
          <div className="mt-8 flex flex-col gap-4">
            <LanguageSelector />
            <a
              href="https://nido45spain.github.io/nido45"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-[#c9a55c] hover:bg-[#b8944b] text-black font-serif tracking-wide py-3">
                {t.nav.requestQuote || "Solicitar Presupuesto"}
              </Button>
            </a>
            <a
              href="/NIDO45_Catalogo.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-transparent border border-[#c9a55c] text-[#c9a55c] hover:bg-[#c9a55c]/10 font-serif tracking-wide py-3">
                <FileText className="w-4 h-4 mr-2" />
                {t.nav.downloadCatalog || "Descargar Catálogo"}
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
