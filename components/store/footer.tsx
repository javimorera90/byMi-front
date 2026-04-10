import Image from "next/image"
import { Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="sobre-nosotros" className="border-t border-border/40 py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image 
              src="/images/bymi-logo.svg" 
              alt="byMi" 
              width={200} 
              height={80}
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Stickers divertidos para darle vida a tu termo, laptop, cuaderno... 
              o donde tu quieras. Tu estilo, tu mundo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Explorar
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#colecciones" className="text-sm hover:text-muted-foreground transition-colors">
                  Colecciones
                </a>
              </li>
              <li>
                <a href="#categorias" className="text-sm hover:text-muted-foreground transition-colors">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
                  Novedades
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
                  Más vendidos
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Información
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 byMi. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
