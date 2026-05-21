import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Models } from "@/components/models"
import { Advantages } from "@/components/advantages"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Models />
      <Advantages />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
