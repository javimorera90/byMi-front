"use client"

import { useEffect, useRef } from "react"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Product } from "./product-card"

export interface CartItem extends Product {
  quantity: number
}

interface SideCartProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemoveItem: (productId: string) => void
}

export function SideCart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: SideCartProps) {
  const panelRef = useRef<HTMLElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  useEffect(() => {
    if (!isOpen) {
      if (previouslyFocusedRef.current) {
        previouslyFocusedRef.current.focus()
        previouslyFocusedRef.current = null
      }
      return
    }

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const panel = panelRef.current
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    const list = focusables ? Array.from(focusables) : []
    const first = list[0]
    const last = list[list.length - 1]
    first?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onCloseRef.current()
        return
      }
      if (e.key !== 'Tab' || list.length === 0) return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else if (document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
        onClick={onClose}
      />

      <aside
        ref={panelRef}
        role="dialog"
        {...(isOpen
          ? { 'aria-modal': true as const }
          : { 'aria-hidden': true as const })}
        aria-labelledby="cart-title"
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border p-6">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5" aria-hidden />
              <h2 id="cart-title" className="font-serif text-xl">
                Tu Carrito
              </h2>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Cerrar carrito"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag
                  className="mb-4 h-12 w-12 text-muted-foreground/50"
                  aria-hidden
                />
                <p className="mb-2 text-muted-foreground">Tu carrito está vacío</p>
                <p className="text-sm text-muted-foreground/70">
                  Explora nuestras colecciones y encuentra tu sticker perfecto.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-secondary/30">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 truncate font-serif text-sm">{item.name}</h3>
                      <p className="mb-2 text-xs text-muted-foreground">{item.dimensions}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            aria-label={`Reducir cantidad de ${item.name}`}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            aria-label={`Aumentar cantidad de ${item.name}`}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <p className="text-sm font-medium">
                          {(item.price * item.quantity).toFixed(2)} €
                        </p>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 flex-shrink-0 text-muted-foreground hover:text-destructive"
                      onClick={() => onRemoveItem(item.id)}
                      aria-label={`Quitar ${item.name} del carrito`}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="space-y-4 border-t border-border p-6">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-serif text-lg">{total.toFixed(2)} €</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Envío calculado en el checkout
              </p>
              <Button type="button" className="w-full rounded-sm" size="lg">
                Finalizar compra
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full text-sm text-muted-foreground"
                onClick={onClose}
              >
                Continuar comprando
              </Button>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
