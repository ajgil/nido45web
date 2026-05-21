import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Homes High-Tech | Space Capsule + Apple Cabin | NIDO45",
  description: "Cápsulas espaciales y Apple Cabins con diseño futurista. Acabados premium, LED integrado y estética sci-fi. Ideal para glamping y proyectos turísticos de lujo.",
}

export default function SmartHomesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
