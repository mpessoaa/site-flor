export default function PraQueTerapia() {
  return (
    <section id="pra-que-terapia" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Título com a fonte Serif e cor Foreground */}
        <h2
  className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-wide mb-4 md:mb-6 leading-tight text-center"
  style={{
    color: "#704214",
    fontFamily: "var(--font-spectral)",
  }}
>
  Pra que Terapia? 
</h2>

        
        {/* Corpo do texto: Aumentado de text-sm para text-base no mobile e text-lg no desktop */}
{/* Conteúdo textual */}
        <div
          className="space-y-4 sm:space-y-6 leading-relaxed text-base sm:text-lg text-left font-Open_Sans font-light"
          style={{ color: "#46220f" }}
        >
          {/* Parágrafo 1 */}
          <p>
            Vivemos em um mundo marcado por exigências constantes e relações cada
            vez mais tensas e complexas. Nesse contexto, é comum que surjam
            sofrimentos psíquicos como crises de ansiedade, tristeza persistente,
            medos paralisantes, pânico, compulsões, obsessões ou o vazio da falta
            de sentido. O apoio de amigos e familiares, ainda que importante, é
            insuficiente para lidar com questões tão difíceis. É necessária uma
            ajuda profissional a partir de um olhar sensível e científico.
          </p>

          {/* Parágrafo 2 */}
          <p>
            Fazer terapia não significa que algo esteja “errado”, mas que algo,
            aí dentro, pede escuta. A psicoterapia é um espaço de acolhimento e
            investigação da própria experiência, onde aquilo que se repete e
            causa sofrimento pode, aos poucos, ser entendido e indicar caminhos
            de ação.
          </p>

          {/* Parágrafo 3 */}
          <p>
            Por meio da fala, da escuta e do questionamento, constrói-se um
            percurso único, no qual o paciente pode entender seus conflitos,
            reconhecer seus desejos e transformar sua maneira de se relacionar
            consigo e com o mundo.
          </p>
        </div>

        {/* Botão seguindo o padrão da seção About com fonte base */}
        <div className="text-center px-4">
          <a
            href="https://wa.me/5519981301138?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa%20para%20falar%20sobre%20terapia."
            target="_blank"
            rel="noopener noreferrer"
  className="inline-block mt-10 md:mt-8 px-8 py-4 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-normal text-base transition-all duration-200"
          >
            Agendar atendimento Online
          </a>
        </div>
      </div>
    </section>
  );
}