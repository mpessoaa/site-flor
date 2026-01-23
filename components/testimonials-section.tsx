export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Quero agradecer de coração pelo cuidado, dedicação e pela sua forma tão humana com que exerce sua profissão. Seu trabalho faz toda diferença e traz mais leveza, compreensão e esperança para a vida de tantas pessoas, inclusive a minha. Gratidão por tudo o que você faz.",
      author: "Mauricio C. G.",
    },
    {
      text: "Agradeço pela nossa trajetória juntas. eu sou grata por ter a oportunidade de ser cuidada por essa grande profissional sensivel e tão dedicada, que é assim que eu vejo você. Obrigada por segurar na minha mão e fazer travessias que eu não conseguiria sozinha.",
      author: "Mariana V.",
    },
    {
      text: "Obrigada pela mudança linda que você orientou e trabalhou junto com minha mãe. Que você continue cuidando das pessoas que chegam até você e que necessitam tanto.",
      author: "Ana Clara S. N.",
    },
    {
      text: "Me sinto a vontade para falar e pensar sobre a minha vida, o atendimento é cuidadoso, respeitoso e acontece no meu tempo. Ao longo do processo fui entendendo melhor algumas questões e ampliando o meu olhar sobre mim mesma. Tem sido um espaço de muito autoconhecimento e crescimento. Feliz de ter uma profissional como você no meu cuidado, me traz confiança para falar o que penso e sinto e ser eu mesma.",
      author: "Juliana T.",
    },
  ]

  return (
    <section id="depoimentos" className="bg-background py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        <h2
  className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-wide mb-4 md:mb-6 leading-tight text-center"
  style={{
    color: "#704214",
    fontFamily: "var(--font-spectral)",
  }}
>
  O que dizem meus pacientes
</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-Open_Sans font-light">
          {testimonials.map((testimonial, index) => (
<div
  key={index}
  className="bg-muted/30 p-6 sm:p-8 rounded-lg border border-primary/10 flex flex-col justify-between text-center"
>
<p
  className="leading-relaxed mb-6 italic text-base sm:text-lg"
  style={{ color: "#203500" }}
>
                "{testimonial.text}"
              </p>
              
              {/* Nome do autor alterado para a cor #704214 */}
              <p 
                className="font-serif text-base sm:text-lg font-medium" 
                style={{ color: "#704214" }}
              >
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}