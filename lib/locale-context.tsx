"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, defaultLocale, isValidLocale } from './i18n'
import { getTranslations, Translations } from './translations'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [t, setT] = useState<Translations>(getTranslations(defaultLocale))

  useEffect(() => {
    // Check localStorage first
    const stored = localStorage.getItem('nido45-locale')
    if (stored && isValidLocale(stored)) {
      setLocaleState(stored)
      setT(getTranslations(stored))
      return
    }
    
    // Then check browser language
    const browserLang = navigator.language.split('-')[0]
    if (isValidLocale(browserLang)) {
      setLocaleState(browserLang)
      setT(getTranslations(browserLang))
      localStorage.setItem('nido45-locale', browserLang)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setT(getTranslations(newLocale))
    localStorage.setItem('nido45-locale', newLocale)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
