export function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base tracking-wide text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Stickers para tu vida
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 text-balance">
          Decora tu mundo
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-pretty">
          Tu laptop, tu termo, tu cuaderno... todo queda mejor con stickers. 
          Encuentra el tuyo y dale vida a tus cosas.
        </p>
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <a 
            href="#colecciones" 
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform"
          >
            Ver stickers
          </a>
          <a 
            href="#categorias" 
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm hover:bg-secondary transition-colors"
          >
            Explorar categorias
          </a>
        </div>

        {/* Fun decorative elements */}
        <div className="mt-16 flex items-center justify-center gap-3 animate-in fade-in duration-1000 delay-500">
          <span className="w-2 h-2 rounded-full bg-foreground/20" />
          <span className="w-2 h-2 rounded-full bg-foreground/40" />
          <span className="w-2 h-2 rounded-full bg-foreground/60" />
        </div>
      </div>
    </section>
  )
}
