export default function ComoTrabalho() {
  return (
    <section id="como-trabalho" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Título padronizado com Serif e Foreground */}
        <h2
  className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-wide mb-4 md:mb-6 leading-tight text-center"
  style={{
    color: "#704214",
    fontFamily: "var(--font-spectral)",
  }}
>
  Como Trabalho
</h2>

        
        {/* Conteúdo: Aumentado de text-sm para text-base no mobile e text-lg no desktop */}
<div
  className="space-y-4 sm:space-y-6 leading-relaxed text-base sm:text-lg text-left font-Open_Sans font-light"
  style={{ color: "#46220f" }}
>

          <p>
            Meus atendimentos são exclusivamente online, para maiores de 18 anos, através de videoconferência, com duração de 50 minutos e frequência semanal. As sessões devem ser um espaço seguro e acolhedor, por isso é importante que o paciente esteja em um ambiente isolado, permitindo que fale e sinta sem constrangimentos externos.
          </p>
          <p>
            A terapia não oferece fórmulas prontas nem respostas universais. Trata-se de um percurso pensado a partir da sua história, do seu ritmo e da forma única como você se relaciona consigo e com o mundo. Não tenha medo de julgamentos, esse não é meu papel nem o foco do trabalho, estou dedicada a te auxiliar no processo de autoconhecimento, garantido seu direito ao sigilo absoluto.
          </p>
          <p>
            Partindo da psicologia e da psicanálise, meu trabalho consiste em acompanhar você na construção de recursos internos para atravessar os desafios do momento presente e se aproximar, com mais clareza e consistência, do que deseja para a sua vida. Caso haja interesse, podemos desenvolver também atividades complementares de arteterapia, com sessões maiores (1h30).
          </p>
<p className="font-Open_Sans" style={{ color: "#704214" }}>
            Fique à vontade para agendar uma consulta de experiência ou me escrever para tirar dúvidas. Pacotes maiores, mensais ou trimestrais, recebem descontos! Aguardo seu contato para iniciarmos seu percurso.
          </p>
        </div>

        {/* Botão padronizado com fonte base */}
        <div className="text-center px-4">
          <a
            href="https://wa.me/5519981301138?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20como%20funciona%20o%20seu%20trabalho."
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