"use client"

import { LocaleProvider } from "@/lib/locale-context"
import { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  )
}
