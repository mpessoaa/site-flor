"use client"

export default function HeroContent() {
  return (
    <main
      className="relative z-10 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* A LINHA ABAIXO É A QUE ESTAVA FALTANDO E CAUSAVA O ERRO */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* 1. NOME E CRP - Ordem 1 no mobile */}
          <div className="flex flex-col items-center mb-6 md:mb-8 text-center order-first md:order-none">
            <div className="flex items-center">
              <div className="h-px w-4 sm:w-10" style={{ backgroundColor: "#84897c" }}></div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mx-3 whitespace-nowrap"
                style={{ 
                  color: "#704214", 
                  fontFamily: "var(--font-spectral)",
                  fontWeight: "500"
                }}
              >
                Psicóloga Flor de Lís
              </h1>
              <div className="h-px w-4 sm:w-10" style={{ backgroundColor: "#84897c" }}></div>
            </div>
            <p
              className="text-base sm:text-lg md:text-xl tracking-widest mt-2 px-1"
              style={{ color: "#46220f", fontFamily: "var(--font-spectral)" }}
            >
              CRP: 06/135391
            </p>
          </div>

          {/* 2. IMAGEM - Ordem 2 no mobile */}
          <div className="flex justify-center items-center mt-4 md:mt-0 order-2 md:order-none">
            <div className="relative w-full max-w-sm md:max-w-md">
              <img
                src="/images/logo.png"
                alt="Logo Flor de Lís"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* 3. RESTO DO TEXTO - Ordem 3 no mobile */}
          <div className="text-center order-last md:order-none">
            <h2
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-wide mb-4 md:mb-6 leading-tight text-center"
              style={{ color: "#704214", fontFamily: "var(--font-spectral)" }}
            >
              Seja bem-vinda (o)
            </h2>

            <p
              className="text-base sm:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto text-center px-4 md:px-0 font-Open_Sans font-light"
              style={{ color: "#46220f" }}
            >
              Aqui você pode conhecer um pouco do meu trabalho como psicóloga e arteterapeuta.
              Se fizer sentido para você, será um prazer caminharmos juntas(os) nessa travessia.
            </p>

            <a
              href="#sobre"
              className="inline-block mt-6 md:mt-8 px-8 py-3 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-normal text-base transition-all duration-200"
            >
              Saiba Mais
            </a>
          </div>

        </div> {/* FECHAMENTO DO GRID */}

        {/* Divisor decorativo inferior */}
        <div className="mt-16 md:mt-24 mb-6 md:mb-8">
          <div className="flex items-center justify-center mb-4 px-4">
            <div className="h-px flex-1 bg-border max-w-[80px] sm:max-w-[120px]"></div>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 mx-4" viewBox="0 0 100 100" fill="none" stroke="#84897c" strokeWidth="2">
              <path d="M50 20 L45 40 L25 35 L40 50 L25 60 L45 58 L50 75 L55 58 L75 60 L60 50 L75 35 L55 40 Z" />
            </svg>
            <div className="h-px flex-1 bg-border max-w-[80px] sm:max-w-[120px]"></div>
          </div>
          <p className="text-center text-xl sm:text-2xl md:text-3xl tracking-wide px-4" style={{ color: "#704214", fontFamily: "var(--font-spectral)" }}>
            Uma relação de escuta, cuidado e transformação
          </p>
        </div>
      </div>
    </main>
  )
}
