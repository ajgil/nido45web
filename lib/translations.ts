import { Locale } from './i18n'

import es from '@/locales/es.json'
import en from '@/locales/en.json'
import nl from '@/locales/nl.json'
import fr from '@/locales/fr.json'
import de from '@/locales/de.json'
import no from '@/locales/no.json'

const translations: Record<Locale, typeof es> = {
  es,
  en,
  nl,
  fr,
  de,
  no
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.es
}

export type Translations = typeof es
