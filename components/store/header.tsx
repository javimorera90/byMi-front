"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/store/theme-toggle"

const MOBILE_MENU_BUTTON_ID = "mobile-menu-button"

interface HeaderProps {
  cartItemCount: number
  onCartClick: () => void
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement>(null)

  const closeSearch = useCallback(() => setIsSearchOpen(false), [])

  useEffect(() => {
    if (!isSearchOpen) return

    const onPointerDown = (e: PointerEvent) => {
      const el = searchContainerRef.current
      if (el && !el.contains(e.target as Node)) {
        closeSearch()
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closeSearch()
      }
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [isSearchOpen, closeSearch])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    document.getElementById(MOBILE_MENU_BUTTON_ID)?.focus()
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const nav = document.getElementById("mobile-store-nav")
    const firstLink = nav?.querySelector<HTMLElement>("a")
    firstLink?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closeMobileMenu()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isMobileMenuOpen, closeMobileMenu])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="hover:scale-105 transition-transform">
            <Image 
              src="/images/bymi-logo.svg" 
              alt="byMi" 
              width={200} 
              height={80}
              className="h-16 lg:h-20 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            <a href="#colecciones" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Colecciones
            </a>
            <a href="#categorias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Categorías
            </a>
            <a href="#sobre-nosotros" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre Nosotros
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div ref={searchContainerRef} className="relative">
              {isSearchOpen ? (
                <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-200">
                  <Input
                    type="search"
                    placeholder="Buscar stickers..."
                    className="w-40 lg:w-64 h-9 text-sm"
                    autoFocus
                    aria-label="Buscar stickers"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    onClick={closeSearch}
                    aria-label="Cerrar búsqueda"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Abrir búsqueda"
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            <ThemeToggle />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              id="open-cart-button"
              className="h-9 w-9 relative"
              onClick={onCartClick}
              aria-label={
                cartItemCount > 0
                  ? `Abrir carrito, ${cartItemCount} artículos`
                  : "Abrir carrito"
              }
            >
              <ShoppingBag className="h-4 w-4" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-foreground text-background text-xs flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              id={MOBILE_MENU_BUTTON_ID}
              className="h-9 w-9 md:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-store-nav"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav
            id="mobile-store-nav"
            className="md:hidden py-4 border-t border-border/40 animate-in fade-in slide-in-from-top-2 duration-200"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col gap-4">
              <a 
                href="#colecciones" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={closeMobileMenu}
              >
                Colecciones
              </a>
              <a 
                href="#categorias" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={closeMobileMenu}
              >
                Categorías
              </a>
              <a 
                href="#sobre-nosotros" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={closeMobileMenu}
              >
                Sobre Nosotros
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
