export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: "#8B7355" }}>
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Título com a fonte Serif e cor branca */}
        <h2
  className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 tracking-wide px-4"
  style={{ fontFamily: "var(--font-spectral)" }}
>
  Vamos conversar?
</h2>

        
        {/* Descrição: Aumentada para text-base no mobile e text-lg no desktop */}
        <p className="text-white/90 mb-8 sm:mb-10 text-base sm:text-lg px-4 max-w-2xl mx-auto leading-relaxed">
          Entre em contato pelo WhatsApp para tirar dúvidas ou agendar sua consulta.
          Estou à disposição para caminharmos juntas(os).
        </p>

        {/* Botão Branco: Fonte aumentada para facilitar o clique no celular */}
        <a
          href="https://wa.me/5519981301138"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-md bg-white text-[#8B7355] font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white/90 shadow-lg mb-10 sm:mb-16"
        >
          <span className="hidden sm:inline">Chamar no WhatsApp (19) 98130-1138</span>
          <span className="sm:hidden">WhatsApp (19) 98130-1138</span>
        </a>

        {/* Rodapé inferior: Pequeno aumento de text-xs para text-sm no mobile */}
        <div className="border-t border-white/20 pt-8 space-y-3 text-sm sm:text-base text-white/70 px-4">
          <p className="font-serif tracking-widest uppercase text-base sm:text-lg">Flor de Lís</p>
          <p>Psicóloga Clínica — CRP/SP: 06/135391</p>
          <p className="opacity-50 text-xs sm:text-sm">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}