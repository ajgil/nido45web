"use client"

import { useLocale } from "@/lib/locale-context"

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20', 'q21', 'q22', 'q23', 'q24', 'q25', 'q26', 'q27', 'q28', 'q29', 'q30', 'q31', 'q32', 'q33', 'q34', 'q35', 'q36', 'q37', 'q38', 'q39', 'q40', 'q41', 'q42', 'q43', 'q44', 'q45', 'q46', 'q47', 'q48'] as const

export function FAQ() {
  const { t } = useLocale()

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqKeys.map(key => ({
      "@type": "Question",
      "name": t.faq.items[key]?.question || "",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t.faq.items[key]?.answer || ""
      }
    })).filter(item => item.name)
  }

  return (
    <section id="faq" className="py-24 bg-[#141414]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#c9a55c] uppercase tracking-[0.3em] mb-3">
            {t.faq.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {t.faq.title}
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c9a55c]/50 to-transparent mx-auto mb-6" />
          <p className="text-white/60 max-w-xl mx-auto">
            {t.faq.description}
          </p>
        </div>

        <div className="w-full space-y-4">
          {faqKeys.map((key) => {
            const faq = t.faq.items[key]
            if (!faq) return null
            return (
              <article 
                key={key} 
                className="border border-[#c9a55c]/20 rounded-lg px-6 py-5 bg-[#1a1a1a]"
              >
                <h3 className="text-left text-white font-serif text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
