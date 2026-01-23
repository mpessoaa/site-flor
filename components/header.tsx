"use client"

import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="relative z-50 flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="flex items-center">
        {/* Logo - Aumentado levemente para destaque */}

<h1
  className="text-2xl sm:text-2xl font-serif tracking-wide"
  style={{ color: "#46220f" }}
>
  Arte e Terapia
</h1>

      </div>

      <nav className="hidden md:flex items-center space-x-1">
  {[
    { label: "Sobre Mim", href: "#sobre" },
    { label: "Pra que terapia?", href: "#pra-que-terapia" },
    { label: "Como Trabalho", href: "#como-trabalho" },
    { label: "Arteterapia", href: "#arteterapia" },
    { label: "Depoimentos", href: "#depoimentos" },
  ].map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="text-sm lg:text-base font-normal px-3 lg:px-4 py-2 rounded-md hover:bg-muted/30 transition-all duration-200"
      style={{ color: "#704214" }}
    >
      {item.label}
    </a>
  ))}
</nav>


      {/* Botão de Agendamento Desktop - Fonte base para leitura clara */}
      <a
        href="https://wa.me/5519981301138"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center px-4 lg:px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm lg:text-base transition-all duration-300 hover:bg-primary/90 cursor-pointer"
      >
        Agendar Consulta
      </a>

      {/* Ícone do Menu Mobile */}
      <button
        type="button"
        onClick={handleToggle}
        className="md:hidden p-2 text-foreground hover:bg-muted/30 rounded-lg transition-colors touch-manipulation"
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu Mobile - Aumentado para 16px (text-base) */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md md:hidden p-5 sm:p-6 space-y-4 border-b border-border/40 shadow-lg z-50">
          {[
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Pra que terapia?", href: "#pra-que-terapia" },
  { label: "Como Trabalho", href: "#como-trabalho" },
  { label: "Arteterapia", href: "#arteterapia" },
  { label: "Depoimentos", href: "#depoimentos" },
].map((item) => (
  <a
    key={item.href}
    href={item.href}
    className="block text-base py-3 font-normal border-b border-border/10 last:border-0 hover:bg-muted/30"
    style={{ color: "#704214" }}
    onClick={() => setIsOpen(false)}
  >
    {item.label}
  </a>
))}


          <a
            href="https://wa.me/5519981301138"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-4 rounded-md bg-primary text-primary-foreground text-center font-medium text-base mt-6"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  )
}