"use client"

import { Phone, Mail, MapPin, Shield, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"

export function Contact() {
  const { t } = useLocale()

  return (
    <section id="contacto" className="py-24 bg-[#0f0f0f] border-t border-[#c9a55c]/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#c9a55c] uppercase tracking-[0.3em] mb-3">
            {t.contact.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {t.contact.title}
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c9a55c]/50 to-transparent mx-auto mb-6" />
          <p className="text-white/60 max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="space-y-6 mb-10">
              <a
                href="https://wa.me/34645476491"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-14 h-14 bg-[#1a1a1a] border border-[#c9a55c]/20 rounded-lg flex items-center justify-center group-hover:border-[#c9a55c]/50 transition-colors">
                  <Phone className="w-6 h-6 text-[#c9a55c]" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">{t.contact.whatsapp}</p>
                  <p className="font-serif text-lg text-white">+34 645 476 491</p>
                </div>
              </a>

              <a
                href="mailto:info@nido45.es"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-14 h-14 bg-[#1a1a1a] border border-[#c9a55c]/20 rounded-lg flex items-center justify-center group-hover:border-[#c9a55c]/50 transition-colors">
                  <Mail className="w-6 h-6 text-[#c9a55c]" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">{t.contact.email}</p>
                  <p className="font-serif text-lg text-white">info@nido45.es</p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/GocPiSW1YfqgxvrA7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-14 h-14 bg-[#1a1a1a] border border-[#c9a55c]/20 rounded-lg flex items-center justify-center group-hover:border-[#c9a55c]/50 transition-colors">
                  <MapPin className="w-6 h-6 text-[#c9a55c]" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">{t.contact.location}</p>
                  <p className="font-serif text-lg text-white">{t.contact.locationValue}</p>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://nido45spain.github.io/nido45"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-[#c9a55c] hover:bg-[#b8944b] text-black font-serif tracking-wide px-8"
                >
                  {t.contact.cta}
                </Button>
              </a>
              <a
                href="/NIDO45_Catalogo.pdf"
                download
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[#c9a55c] text-[#c9a55c] hover:bg-[#c9a55c]/10 font-serif tracking-wide px-8"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  {t.nav?.downloadCatalog || "Descargar Catálogo"}
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#c9a55c]/20">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-[#c9a55c]" />
              <h3 className="font-serif text-2xl text-white">{t.contact.company.title}</h3>
            </div>
            
            <div className="space-y-5 text-sm">
              <div>
                <p className="text-[#c9a55c]/70 text-xs uppercase tracking-wider mb-1">{t.contact.company.importer}</p>
                <p className="text-white">{t.contact.company.importerValue}</p>
              </div>
              <div>
                <p className="text-[#c9a55c]/70 text-xs uppercase tracking-wider mb-1">{t.contact.company.nif}</p>
                <p className="text-white">{t.contact.company.nifValue}</p>
              </div>
              <div>
                <p className="text-[#c9a55c]/70 text-xs uppercase tracking-wider mb-1">{t.contact.company.headquarters}</p>
                <p className="text-white/80">{t.contact.company.headquartersValue}</p>
              </div>
              <div>
                <p className="text-[#c9a55c]/70 text-xs uppercase tracking-wider mb-1">{t.contact.company.showroom}</p>
                <a 
                  href="https://maps.app.goo.gl/GocPiSW1YfqgxvrA7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#c9a55c] hover:underline"
                >
                  {t.contact.company.showroomValue}
                </a>
              </div>
              <div>
                <p className="text-[#c9a55c]/70 text-xs uppercase tracking-wider mb-1">{t.contact.company.manufacturer}</p>
                <p className="text-white/80">{t.contact.company.manufacturerValue}</p>
              </div>
              <div>
                <p className="text-[#c9a55c]/70 text-xs uppercase tracking-wider mb-1">{t.contact.company.certifications}</p>
                <p className="text-white/80">{t.contact.company.certificationsValue}</p>
              </div>
              <div>
                <p className="text-[#c9a55c]/70 text-xs uppercase tracking-wider mb-1">{t.contact.company.warranty}</p>
                <p className="text-white/80">{t.contact.company.warrantyValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
