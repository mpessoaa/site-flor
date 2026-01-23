export default function ArtTherapySection() {
  return (
    <section id="arteterapia" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Título padronizado com Serif e Foreground */}
       <h2
  className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-wide mb-4 md:mb-6 leading-tight text-center"
  style={{
    color: "#704214",
    fontFamily: "var(--font-spectral)",
  }}
>
  Arteterapia
</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Content - Texto aumentado para base (mobile) e lg (desktop) */}
{/* Conteúdo textual */}
          <div
            className="space-y-4 sm:space-y-6 leading-relaxed text-base sm:text-lg text-left font-Open_Sans font-light"
            style={{ color: "#46220f" }}
          >
            {/* Parágrafo 1 */}
            <p>
              A arteterapia é um recurso terapêutico que utiliza diferentes
              formas de expressão artística como caminho para acessar emoções,
              sentimentos e experiências que nem sempre encontram espaço na
              linguagem verbal. Por meio do desenho, da pintura, da colagem, da
              escrita, da modelagem de massa ou de outras linguagens simbólicas,
              o paciente pode expressar conteúdos internos de maneira sensível e
              singular.
            </p>

            {/* Parágrafo 2 */}
            <p>
              Integrada à psicoterapia, a arteterapia não foca na produção de
              obras artísticas, ainda que isso possa ocorrer, mas favorece
              processos de elaboração, autoconhecimento e cuidado, respeitando o
              ritmo e a história de cada pessoa.
            </p>

            {/* Parágrafo 3 */}
            <p>
              Desenvolvo a arteterapia como atividade complementar à
              psicoterapia para o paciente que assim desejar, com sessões de
              duração estendida (1h30). Também tenho projetos de arteterapia em
              grupo, como o <em>"Tecendo Mandalas"</em>, em que busco fortalecer
              as redes de afeto e autonomia entre mulheres.
            </p>
          </div>

         {/* Images - todas quadradas e preenchidas */}
<div className="grid grid-cols-2 gap-3 sm:gap-4 px-4 md:px-0">

  {/* Imagem 1 */}
  <div className="aspect-square rounded-lg overflow-hidden bg-muted/30">
    <img
      src="/images/galeria1.jpg"
      alt="Mandalas"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Imagem 2 - zoom out controlado */}
<div className="aspect-square rounded-lg overflow-hidden bg-muted/30">
  <img
    src="/images/galeria2.jpg"
    alt="Grupo de arteterapia"
    className="w-full h-full object-cover scale-90 origin-center"
  />
</div>



  <div className="aspect-square rounded-lg overflow-hidden bg-muted/30 col-span-2"> <img src="/images/galeria3.jpg" alt="Arteterapia" className="w-full h-full object-cover" /> </div>

          </div>
        </div>
      </div>
    </section>
  )
}