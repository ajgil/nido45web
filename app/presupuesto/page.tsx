"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz51KZGizoOxCrKadkd47t_zsuCwTwFTu_s_o08R37BtnL7klKXn3-pwO2eH2txRFs/exec"

export default function PresupuestoPage() {
  const [success, setSuccess] = useState(false)
  const [sending, setSending] = useState(false)
  const [suelo, setSuelo] = useState("PVC 1,6 mm (Incluido)")
  const [paredes, setParedes] = useState("Panel blanco de serie (Incluido)")
  const [fachadaColor, setFachadaColor] = useState("Blanco (Incluido)")
  const [necesitaTerreno, setNecesitaTerreno] = useState("no")

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    const fd = new FormData(e.currentTarget)
    try {
      await fetch(SCRIPT_URL, { method: "POST", body: fd, mode: "no-cors" })
      setSuccess(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch {
      setSending(false)
      alert("Error al enviar. Por favor inténtalo de nuevo o escríbenos a nido45spain@gmail.com")
    }
  }

  if (success) {
    return (
      <main className="min-h-screen bg-[#F8F4EE] flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1C1A] mb-4">
            ¡Solicitud enviada! <em className="italic text-[#B8943C]">Gracias.</em>
          </h2>
          <p className="text-[#7A7568] leading-relaxed">
            El equipo NIDO45 ha recibido tu solicitud y te contactará en menos de{" "}
            <strong className="text-[#B8943C]">48 horas</strong>.
          </p>
          <p className="text-[#7A7568] mt-4">
            nido45spain@gmail.com · +34 645 476 491
          </p>
          <p className="text-[#7A7568] mt-2 text-sm">Sin compromiso · Válido 30 días</p>
          <Link
            href="/"
            className="inline-block mt-8 text-[#B8943C] hover:text-[#D4A853] transition-colors font-serif"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      <header className="bg-[#1C1C1A] sticky top-0 z-50 border-b border-[#B8943C]/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#B8943C]/70 hover:text-[#B8943C] transition-colors font-serif">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver</span>
          </Link>
          <div className="text-right">
            <div className="font-serif text-lg text-white">
              Nido<em className="italic text-[#D4A853]">45</em>
            </div>
            <div className="text-[7pt] tracking-[0.35em] uppercase text-white/38">New Generation Homes</div>
          </div>
        </div>
      </header>

      <section className="bg-[#1C1C1A] px-4 py-12 md:py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B8943C]/[0.07] to-transparent" />
        <h1 className="relative font-serif text-3xl md:text-4xl text-white font-light leading-tight">
          Tu casa ya tiene forma.<em className="italic text-[#D4A853] block">Ponle precio.</em>
        </h1>
        <p className="relative text-[10pt] text-white/50 mt-3 tracking-[0.08em]">
          Rellena el formulario · En 48 horas recibes tu presupuesto llave en mano
        </p>
        <div className="relative flex justify-center gap-4 md:gap-6 mt-5">
          <span className="text-[7.5pt] text-white/38 tracking-[0.1em] before:content-['·'] before:mr-1 before:text-[#B8943C]">
            Sin compromiso
          </span>
          <span className="text-[7.5pt] text-white/38 tracking-[0.1em] before:content-['·'] before:mr-1 before:text-[#B8943C]">
            Válido 30 días
          </span>
          <span className="text-[7.5pt] text-white/38 tracking-[0.1em] before:content-['·'] before:mr-1 before:text-[#B8943C]">
            Respuesta en 48 h
          </span>
        </div>
      </section>

      <section className="bg-[#1C1C1A] border-t border-[#B8943C]/25 px-4 py-3">
        <div className="max-w-[640px] mx-auto flex flex-wrap justify-center gap-x-6 gap-y-1">
          {["Transporte al puerto más cercano", "Despacho de aduanas", "Descarga en parcela", "Montadores", "Instaladores", "Arquitecto + Perito"].map((item) => (
            <span key={item} className="text-[7.5pt] text-white/45 tracking-[0.06em] flex items-center gap-1">
              <span className="text-[#B8943C] text-[8pt]">✓</span>
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className="max-w-[640px] mx-auto px-3 md:px-4 py-6 md:py-8">
        <form onSubmit={submitForm}>
          <Section num="01" title="Tu modelo" sub="Selecciona el que más te interesa">
            <div className="grid grid-cols-2 gap-1.5 md:gap-2">
              {[
                { value: "Gorrión · 6.000 €", label: "El Gorrión", price: "Desde 6.000 € · Flat Pack · 15 m²" },
                { value: "Flamenco · 15.000 €/módulo", label: "El Flamenco", price: "Desde 15.000 €/módulo · Modular · desde 20 m²" },
                { value: "Halcón · 36.000 €", label: "El Halcón", price: "Desde 36.000 € · 90 m² · 3 dorm." },
                { value: "Águila · 60.000 €", label: "El Águila", price: "Desde 60.000 € · 150 m² · Villa lujo" },
                { value: "Colibrí · 36.000 €", label: "El Colibrí", price: "Desde 36.000 € · High-Tech · 27–38 m²" },
                { value: "Cuco 36 · 17.500 €", label: "El Cuco 36", price: "Desde 17.500 € · Móvil · 36 m² · 2 dorm." },
              ].map((m) => (
                <RadioCard key={m.value} name="modelo" value={m.value} required>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">{m.label}</div>
                  <div className="text-[7.5pt] text-[#7A7568] tracking-[0.03em]">{m.price}</div>
                </RadioCard>
              ))}
              <div className="col-span-2">
                <RadioCard name="modelo" value="Cuco 68 · 25.000 €" required row>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">El Cuco 68</div>
                  <div className="text-[7.5pt] text-[#7A7568] tracking-[0.03em]">Desde 25.000 € · Móvil · 68 m² · 3 dorm.</div>
                </RadioCard>
              </div>
            </div>
            <div className="mt-3">
              <FieldLabel>Nº módulos o m² que buscas (opcional)</FieldLabel>
              <input type="text" name="modulos" className="field-input" placeholder="Ej: 3 módulos · 60 m²" />
            </div>
          </Section>

          <Section num="02" title="Tu suelo" sub="Lo pisas cada día. Merece que lo elijas tú.">
            <OptionGroup label="Tarima">
              <div className="grid grid-cols-2 gap-2">
                <RadioCard name="suelo" value="PVC 1,6 mm (Incluido)" defaultChecked onChange={(e) => setSuelo(e.target.value)}>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">PVC 1,6 mm</div>
                  <div className="text-[7.5pt]"><span className="badge-incl">INCLUIDO</span></div>
                </RadioCard>
                <RadioCard name="suelo" value="SPC 4 mm (9 €/m²)" onChange={(e) => setSuelo(e.target.value)}>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">SPC 4 mm</div>
                  <div className="text-[7.5pt] text-[#B8943C] font-medium">MEJORA · 9 €/m²</div>
                </RadioCard>
              </div>
            </OptionGroup>
            {suelo.includes("SPC") && (
              <div className="mt-3">
                <FieldLabel>Color SPC</FieldLabel>
                <select name="color_spc" className="field-select">
                  <option value="">— Elige color —</option>
                  {["D1001 · Gris Roble", "D1002 · Caoba", "D1003 · Roble Natural", "D1004 · Madera Miel", "D1005 · Gris Ceniza", "D1006 · Blanco Nórdico", "D1007 · Nogal Oscuro", "D1008 · Gris Piedra"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            )}
            <hr className="border-t border-[#E0D8CC] my-3" />
            <OptionGroup label="Suelo radiante">
              <div className="grid grid-cols-2 gap-2">
                <RadioCard name="radiante" value="Sin suelo radiante" defaultChecked>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">Sin suelo radiante</div>
                  <div className="text-[7.5pt] text-[#7A7568]">Solo tarima</div>
                </RadioCard>
                <RadioCard name="radiante" value="Suelo radiante de agua (40 €/m²)">
                  <div className="text-[9pt] font-normal text-[#2C2C28]">Suelo radiante de agua</div>
                  <div className="text-[7.5pt] text-[#B8943C] font-medium">MEJORA · 40 €/m²</div>
                </RadioCard>
              </div>
              <div className="bg-[#F8F4EE] border-l-2 border-[#B8943C] p-2 mt-2 text-[7.5pt] text-[#7A7568] leading-relaxed">
                <strong className="text-[#2C2C28] font-medium">Tuberías de agua instaladas en fábrica</strong> sobre base aislante · Termostato incluido · Compatible con PVC y SPC
              </div>
            </OptionGroup>
          </Section>

          <Section num="03" title="Aislamiento térmico de paredes" sub="El panel estructural incorpora aislamiento integrado">
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "50 mm (Incluido)", mm: "50 mm", desc: "Estándar · EPS integrado\nClima mediterráneo", price: "Incluido", gold: false },
                { value: "75 mm (A consultar)", mm: "75 mm", desc: "Upgrade · Interior\nMontaña media", price: "A consultar", gold: false },
                { value: "100 mm (A consultar)", mm: "100 mm", desc: "Premium · Zonas frías\nClase A máxima", price: "A consultar", gold: false },
              ].map((i) => (
                <label key={i.value} className="cursor-pointer">
                  <input type="radio" name="aislamiento" value={i.value} defaultChecked={i.value === "50 mm (Incluido)"} className="sr-only" />
                  <div className="border border-[#E0D8CC] p-2 text-center transition-colors has-[:checked]:border-[#B8943C]">
                    <div className="font-serif text-[16pt] text-[#2C2C28] leading-tight">{i.mm}</div>
                    <div className="text-[6pt] text-[#7A7568] mt-1 leading-relaxed whitespace-pre-line">{i.desc}</div>
                    <div className={`text-[7pt] mt-1 font-medium ${i.gold ? "text-[#B8943C]" : "text-[#B8943C]"}`}>{i.price}</div>
                  </div>
                </label>
              ))}
            </div>
          </Section>

          <Section num="04" title="Acabado de paredes interiores" sub="Lo que te rodea define cómo te sientes en casa">
            <div className="flex flex-col gap-2">
              <RadioCard name="paredes" value="Panel blanco de serie (Incluido)" defaultChecked onChange={(e) => setParedes(e.target.value)}>
                <div className="text-[9pt] font-normal text-[#2C2C28]">Panel blanco de serie</div>
                <div className="text-[7.5pt]"><span className="badge-incl">INCLUIDO</span> · Acabado blanco liso · base estándar de fábrica</div>
              </RadioCard>
              <RadioCard name="paredes" value="Mejora A — Bamboo Fiber Board (9 €/m²)" onChange={(e) => setParedes(e.target.value)}>
                <div className="text-[9pt] font-normal text-[#2C2C28]">Mejora A — Bamboo Fiber Board</div>
                <div className="text-[7.5pt] text-[#B8943C] font-medium">MEJORA · 9 €/m² · Panel 8 mm · Antihumedad · 4 colores</div>
              </RadioCard>
              <RadioCard name="paredes" value="Mejora B — Carbon Crystal Board (9 €/m²)" onChange={(e) => setParedes(e.target.value)}>
                <div className="text-[9pt] font-normal text-[#2C2C28]">Mejora B — Carbon Crystal Board</div>
                <div className="text-[7.5pt] text-[#B8943C] font-medium">MEJORA · 9 €/m² · Aspecto piedra o madera premium · 9 colores</div>
              </RadioCard>
            </div>
            {paredes.includes("Bamboo") && (
              <div className="mt-3">
                <FieldLabel>Color Bamboo Fiber Board</FieldLabel>
                <select name="color_bamboo" className="field-select">
                  <option value="">— Elige color —</option>
                  {["Blanco lino", "Gris piedra", "Roble claro", "Gris arena"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            )}
            {paredes.includes("Carbon") && (
              <div className="mt-3">
                <FieldLabel>Color Carbon Crystal Board</FieldLabel>
                <select name="color_carbon" className="field-select">
                  <option value="">— Elige color —</option>
                  {["Naranja", "Mármol blanco", "Travertino", "Wengué", "Roble natural", "Madera clara", "Beige miel", "Blanco neutro", "Gris perla"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            )}
          </Section>

          <Section num="05" title="Fachada exterior" sub="Panel Metal Carved 16 mm · Lo primero que ven. Lo último que olvidan.">
            <OptionGroup label="Color de fachada">
              <div className="grid grid-cols-2 gap-2">
                <RadioCard name="fachada_color" value="Blanco (Incluido)" defaultChecked onChange={(e) => setFachadaColor(e.target.value)}>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">Blanco</div>
                  <div className="text-[7.5pt]"><span className="badge-incl">INCLUIDO</span> · Todos los modelos</div>
                </RadioCard>
                <RadioCard name="fachada_color" value="Otro color (9 €/m²)" onChange={(e) => setFachadaColor(e.target.value)}>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">Otro color o textura</div>
                  <div className="text-[7.5pt] text-[#B8943C] font-medium">MEJORA · 9 €/m² · ver carta</div>
                </RadioCard>
              </div>
              <div className="bg-[#F8F4EE] border-l-2 border-[#B8943C] p-2 mt-2 text-[7.5pt] text-[#7A7568] leading-relaxed">
                <strong className="text-[#2C2C28] font-medium">Gorrión · Halcón · Águila · Cuco 36 · Cuco 68</strong> — Acceso a toda la carta de colores<br />
                <strong className="text-[#2C2C28] font-medium">Flamenco · Colibrí</strong> — Siempre en blanco (sin opción de color)
              </div>
            </OptionGroup>
            {fachadaColor.includes("Otro") && (
              <div className="mt-3">
                <FieldLabel>Referencia de color</FieldLabel>
                <select name="fachada_ref" className="field-select">
                  <option value="">— Elige referencia —</option>
                  <optgroup label="Serie ladrillo">
                    {["BZ-202 · Ladrillo gris claro", "BZ-101 · Ladrillo blanco ángel", "BZ-102 · Ladrillo blanco marfil", "BZ-104 · Ladrillo gris plata", "BZ-302 · Ladrillo arena marrón", "BZ-201 · Ladrillo gris oscuro", "BZ-504 · Ladrillo crema", "BZ-203 · Ladrillo negro mate", "BZ-507 · Ladrillo naranja"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Serie madera">
                    {["MZ-0301 · Madera panga-panga", "PZ-0302 · Madera nogal oscuro"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </optgroup>
                  <option value="otro">Otro — lo indico en notas</option>
                </select>
              </div>
            )}
            <hr className="border-t border-[#E0D8CC] my-3" />
            <OptionGroup label="Ventanas">
              <div className="flex flex-col gap-2">
                <RadioCard name="ventanas" value="PVC corredera doble cristal (Incluida)" defaultChecked row>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">PVC corredera · doble cristal 930×1.200 mm</div>
                  <div className="text-[7.5pt]"><span className="badge-incl">INCLUIDA</span></div>
                </RadioCard>
                <RadioCard name="ventanas" value="Aluminio (Upgrade)" row>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">Aluminio · Mayor durabilidad y estética</div>
                  <div className="text-[7.5pt] text-[#B8943C] font-medium">UPGRADE</div>
                </RadioCard>
                <RadioCard name="ventanas" value="Rotura puente térmico Low-E + persiana (Premium)" row>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">RPT Low-E · persiana + mosquitera</div>
                  <div className="text-[7.5pt] text-[#B8943C] font-medium">PREMIUM</div>
                </RadioCard>
              </div>
            </OptionGroup>
            <hr className="border-t border-[#E0D8CC] my-3" />
            <OptionGroup label="Puerta de acceso">
              <div className="flex flex-col gap-2">
                <RadioCard name="puerta" value="Acero 50 mm (Incluida)" defaultChecked row>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">Acero 50 mm · 970×1.970 mm · doble cara</div>
                  <div className="text-[7.5pt]"><span className="badge-incl">INCLUIDA</span></div>
                </RadioCard>
                <RadioCard name="puerta" value="Doble vidrio templado + aluminio (Upgrade)" row>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">Doble vidrio templado + aluminio</div>
                  <div className="text-[7.5pt] text-[#B8943C] font-medium">UPGRADE</div>
                </RadioCard>
                <RadioCard name="puerta" value="Corredera aluminio panorámica (Upgrade)" row>
                  <div className="text-[9pt] font-normal text-[#2C2C28]">Corredera aluminio panorámica</div>
                  <div className="text-[7.5pt] text-[#B8943C] font-medium">UPGRADE</div>
                </RadioCard>
              </div>
            </OptionGroup>
          </Section>

          <Section num="06" title="¿Tienes terreno?" sub="Si no tienes parcela, la buscamos para ti">
            <div className="grid grid-cols-2 gap-2">
              <RadioCard name="necesita_terreno" value="no" defaultChecked onChange={(e) => setNecesitaTerreno(e.target.value)}>
                <div className="text-[9pt] font-normal text-[#2C2C28]">Ya tengo terreno</div>
                <div className="text-[7.5pt] text-[#7A7568]">Presupuesto llave en mano completo</div>
              </RadioCard>
              <RadioCard name="necesita_terreno" value="si" onChange={(e) => setNecesitaTerreno(e.target.value)}>
                <div className="text-[9pt] font-normal text-[#2C2C28]">Necesito que busquéis terreno</div>
                <div className="text-[7.5pt] text-[#B8943C] font-medium">Servicio con partner inmobiliario</div>
              </RadioCard>
            </div>
            {necesitaTerreno === "si" && (
              <div className="mt-3">
                <FieldLabel>Presupuesto máximo para el terreno (€)</FieldLabel>
                <input type="number" name="presupuesto_terreno" className="field-input" placeholder="Ej: 50000" min="0" step="1000" />
                <div className="bg-[#F8F4EE] border-l-2 border-[#B8943C] p-2 mt-2 text-[7.5pt] text-[#7A7568] leading-relaxed">
                  <strong className="text-[#2C2C28] font-medium">¿Cómo funciona?</strong> Nido45 y su red de partners inmobiliarios localizan parcelas urbanas en la zona que indiques. El precio del terreno se entrega en documento aparte. El presupuesto incluye las comisiones de gestión (2,5% partner + 2,5% Nido45 sobre el precio del terreno).
                </div>
              </div>
            )}
            <input type="hidden" name="flujo" value={necesitaTerreno === "si" ? "A" : "B"} />
          </Section>

          <Section num="07" title="Tu parcela" sub="Municipio o dirección donde se instalará la casa">
            <div className="mb-3">
              <FieldLabel>Municipio o dirección *</FieldLabel>
              <input type="text" name="parcela" className="field-input" required placeholder="Ej: Vélez-Málaga, Málaga" />
            </div>
            <div>
              <FieldLabel>Referencia catastral (opcional)</FieldLabel>
              <input type="text" name="catastral" className="field-input" placeholder="Ej: 29XXX0001XXXXXXXX" />
            </div>
          </Section>

          <Section num="08" title="Tus datos" sub="Solo para enviarte el presupuesto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <FieldLabel>Nombre completo *</FieldLabel>
                <input type="text" name="nombre" className="field-input" required placeholder="Tu nombre" />
              </div>
              <div>
                <FieldLabel>Teléfono *</FieldLabel>
                <input type="tel" name="telefono" className="field-input" required placeholder="+34 6XX XXX XXX" />
              </div>
            </div>
            <div className="mb-3">
              <FieldLabel>Email *</FieldLabel>
              <input type="email" name="email" className="field-input" required placeholder="tu@email.com" />
            </div>
            <div className="mb-3">
              <FieldLabel>Horario para llamar</FieldLabel>
              <select name="horario" className="field-select">
                <option value="">— Sin preferencia —</option>
                {["Mañanas (9–13 h)", "Tardes (15–19 h)", "Cualquier hora", "Solo WhatsApp"].map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>
            </div>
            <div>
              <FieldLabel>Notas adicionales</FieldLabel>
              <textarea name="notas" className="field-textarea" placeholder="Cuéntanos algo más sobre tu proyecto..." />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#1C1C1A] text-white border-none py-4 px-6 font-sans text-[9.5pt] font-normal tracking-[0.25em] uppercase cursor-pointer transition-colors hover:bg-[#2a2a28] relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2pt] after:bg-[#B8943C] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "ENVIANDO…" : "QUIERO MI PRESUPUESTO LLAVE EN MANO"}
              </button>
              <p className="text-[7pt] text-[#7A7568] text-center mt-2 leading-relaxed tracking-[0.05em]">
                En 48 horas recibes respuesta · Sin compromiso · Válido 30 días<br />
                Datos protegidos RGPD · Isla Sofía SLU · NIF B26607044
              </p>
            </div>
          </Section>
        </form>
      </div>

      <footer className="bg-[#1C1C1A] px-4 py-4 text-center text-[7.5pt] text-white/30 tracking-[0.07em] leading-relaxed">
        <a href="https://nido45.com" className="text-white/45 no-underline">nido45.com</a> · nido45spain@gmail.com · +34 645 476 491<br />
        Isla Sofía SLU · NIF B26607044 · El Capitán, Almayate (Málaga) · © 2026 NIDO45
      </footer>

      <style>{`
        .field-input, .field-textarea, .field-select {
          width: 100%;
          border: 0.5pt solid #E0D8CC;
          background: #FFFFFF;
          padding: 3mm 4mm;
          font-family: 'Jost', sans-serif;
          font-size: 9pt;
          font-weight: 300;
          color: #2C2C28;
        }
        .field-input:focus, .field-textarea:focus, .field-select:focus {
          outline: none;
          border-color: #B8943C;
        }
        .field-textarea {
          resize: vertical;
          min-height: 20mm;
        }
        .field-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237A7568' stroke-width='1.2' fill='none'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 3.5mm center;
          padding-right: 9mm;
          cursor: pointer;
        }
        .badge-incl {
          font-size: 6.5pt;
          letter-spacing: 0.15em;
          padding: 1mm 2.5mm;
          font-weight: 400;
          text-transform: uppercase;
          background: #1C1C1A;
          color: white;
        }
        .badge-up {
          font-size: 6.5pt;
          letter-spacing: 0.15em;
          padding: 1mm 2.5mm;
          font-weight: 400;
          text-transform: uppercase;
          background: #B8943C;
          color: white;
        }
        @media (max-width: 500px) {
          .field-input, .field-textarea, .field-select {
            font-size: 11pt;
          }
        }
      `}</style>
    </main>
  )
}

function Section({ num, title, sub, children }: { num: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#E0D8CC] mb-3 md:mb-4 overflow-hidden">
      <div className="flex items-center gap-3 px-4 md:px-5 py-3 md:py-4 border-b border-[#E0D8CC] bg-[#F8F4EE]">
        <span className="font-serif text-[13pt] font-normal text-[#B8943C] min-w-[7mm] leading-none">{num}</span>
        <div>
          <div className="font-serif text-[15pt] font-normal text-[#1C1C1A] leading-none">{title}</div>
          <div className="text-[7.5pt] text-[#7A7568] mt-1 tracking-[0.04em]">{sub}</div>
        </div>
      </div>
      <div className="px-4 md:px-5 py-3 md:py-4">{children}</div>
    </div>
  )
}

function RadioCard({
  name, value, defaultChecked, required, row, children, onChange,
}: {
  name: string; value: string; defaultChecked?: boolean; required?: boolean; row?: boolean; children: React.ReactNode; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <label className="cursor-pointer">
      <input type="radio" name={name} value={value} defaultChecked={defaultChecked} required={required} onChange={onChange} className="sr-only peer" />
      <div className={`border border-[#E0D8CC] p-2.5 md:p-3 bg-white transition-all duration-150 peer-checked:border-[#B8943C] peer-checked:bg-[#fefaf3] flex ${row ? "flex-row items-center justify-between gap-2" : "flex-col gap-[0.8mm]"}`}>
        {children}
      </div>
    </label>
  )
}

function OptionGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="text-[8pt] font-medium text-[#2C2C28] tracking-[0.06em] uppercase mb-1.5 md:mb-2 flex items-center gap-1">
        {label}
      </div>
      {children}
    </div>
  )
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[7.5pt] font-medium text-[#7A7568] tracking-[0.06em] uppercase mb-1 block">
      {children}
    </label>
  )
}
