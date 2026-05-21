export const locales = ['es', 'en', 'nl', 'fr', 'de', 'no'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  nl: 'Nederlands',
  fr: 'Français',
  de: 'Deutsch',
  no: 'Norsk'
}

export const defaultLocale: Locale = 'es'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
