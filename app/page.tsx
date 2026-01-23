"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import AboutSection from "@/components/about-section"
// Importe o WorkSection que está dentro do arquivo praque-terapia
import PraQueTerapia from "@/components/praque-terapia" 
import ComoTrabalho from "@/components/como-trabalho"
import ArtTherapySection from "@/components/art-therapy-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <HeroContent />
      <AboutSection />
      {/* Use o nome que você importou acima */}
      <PraQueTerapia />
      <ComoTrabalho /> 
      <ArtTherapySection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}