"use client"

export default function HeroContent() {
  return (
<main
  className="relative z-10 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
  style={{ backgroundColor: "#ffffff" }}
>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Conteúdo Esquerda */}
          <div className="text-center">

            {/* Nome grande e CRP pequeno embaixo */}
            <div className="flex flex-col items-center mb-6 md:mb-8 text-center">

              <div className="flex items-center">
                <div className="h-px w-8 sm:w-10" style={{ backgroundColor: "#84897c" }}></div>
                <h1
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide mx-3 whitespace-nowrap"
  style={{
    color: "#704214",
    fontFamily: "var(--font-spectral)",
  }}
>
  Psicóloga Flor de Lís
</h1>



                <div className="h-px w-6 sm:w-10" style={{ backgroundColor: "#84897c" }}></div>
              </div>
              {/* CRP pequeno e alinhado */}
              <p
  className="text-sm sm:text-base md:text-lg tracking-wide px-1"
  style={{
    color: "#46220f",
    fontFamily: "var(--font-spectral)",
  }}
>
  CRP: 06/135391
</p>

            </div>

            {/* Título Principal */}
            <h2
  className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-wide mb-4 md:mb-6 leading-tight text-center"
  style={{
    color: "#704214",
    fontFamily: "var(--font-spectral)",
  }}
>
  Seja bem-vinda (o)
</h2>





            {/* Descrição - Fonte aumentada para 16px (base) no mobile */}
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


          {/* Imagem Direita / Logo */}
          <div className="flex justify-center items-center order-first md:order-last mt-4 md:mt-0">
            <div className="relative w-full max-w-sm md:max-w-md">
              <img
                src="/images/logo.png"
                alt="Logo Flor de Lís"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Divisor decorativo inferior */}
        <div className="mt-16 md:mt-24 mb-6 md:mb-8">
          <div className="flex items-center justify-center mb-4 px-4">
            <div className="h-px flex-1 bg-border max-w-[80px] sm:max-w-[120px]"></div>
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 mx-4"
              viewBox="0 0 100 100"
              fill="none"
              stroke="#84897c"
              strokeWidth="2"
            >
              <path d="M50 20 L45 40 L25 35 L40 50 L25 60 L45 58 L50 75 L55 58 L75 60 L60 50 L75 35 L55 40 Z" />
            </svg>
            <div className="h-px flex-1 bg-border max-w-[80px] sm:max-w-[120px]"></div>
          </div>
          
          <p
  className="text-center text-xl sm:text-2xl md:text-3xl tracking-wide px-4"
  style={{
    color: "#704214",
    fontFamily: "var(--font-spectral)",
  }}
>
  Uma relação de escuta, cuidado e transformação
</p>

          
          <div className="flex justify-center mt-4">
             <div className="w-16 h-1 rounded-full" style={{ backgroundColor: "#84897c", opacity: 0.3 }}></div>
          </div>
        </div>
      </div>
    </main>
  )
}