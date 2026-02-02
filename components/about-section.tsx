export default function AboutSection() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
  className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-wide mb-4 md:mb-6 leading-tight text-center"
  style={{
    color: "#704214",
    fontFamily: "var(--font-spectral)",
  }}
>
  Sobre Mim 
</h2>

          <div className="flex justify-center">
            <svg className="w-10 h-5 sm:w-12 sm:h-6 text-primary/30" viewBox="0 0 100 50" fill="currentColor">
              <path d="M10 25 Q30 10 50 25 Q70 40 90 25" stroke="currentColor" fill="none" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Imagem */}
          <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden bg-muted/30">
            <img
              src="/images/flor.jpeg"
              alt="Flor de Lís - Psicóloga"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Conteúdo com fontes aumentadas para mobile */}
          <div className="px-4 md:px-0">
  

            {/* Aumentado de text-sm para text-base no mobile e text-lg no desktop */}

          {/* Conteúdo textual */}
          <div
  className="space-y-4 sm:space-y-6 leading-relaxed text-base sm:text-lg text-left font-Open_Sans font-light"
  style={{ color: "#" }}
>
              {/* Introdução */}
              <p>
                Olá! Fico feliz e honrada que sua busca por transformar sua vida,
                ou de alguém querido, te trouxe até mim. Vou falar um pouquinho
                de mim e, em breve, espero que possamos nos conhecer melhor!
              </p>

              {/* Formação e atuação profissional */}
              <p>
                Sou Flor de Lís, psicóloga clínica formada pela PUC Campinas
                (CRP/SP: 06/135391), arteterapeuta e artista plástica. Atuo há
                mais de dez anos em contextos de acolhimento psicossocial, com
                sólida experiência na promoção de saúde mental, vínculos
                comunitários e autonomia emocional.
              </p>

              {/* Visão pessoal e ética profissional */}
              <p>
                Mas, além de diplomas e experiências, sou também esse desejo de
                uma sociedade mais humana e justa. E a relação terapêutica,
                construída com ética e cuidado, é, pra mim, parte importante da
                construção de um mundo melhor. Espero que possamos fazer essa
                jornada juntos!
              </p>
            </div>

            <div className="flex justify-center mt-6 md:mt-8">
  <a
  href="https://wa.me/5519981301138?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 md:mt-2 px-8 py-3 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-normal text-base transition-all duration-200"
>
  Conheça Mais
</a>

</div>

          </div>
        </div>
      </div>
    </section>
  )
}