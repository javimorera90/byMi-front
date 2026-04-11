"use client"

import { useState, useCallback, useEffect } from "react"
import { Header } from "@/components/store/header"
import { Hero } from "@/components/store/hero"
import { CollectionGrid } from "@/components/store/collection-grid"
import { CategoryFilter } from "@/components/store/category-filter"
import { ProductGrid } from "@/components/store/product-grid"
import { SideCart, type CartItem } from "@/components/store/side-cart"
import { Footer } from "@/components/store/footer"
import type { Product } from "@/components/store/product-card"
import { loadCartFromStorage, saveCartToStorage } from "@/lib/cart-storage"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartHydrated, setCartHydrated] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    queueMicrotask(() => {
      setCartItems(loadCartFromStorage())
      setCartHydrated(true)
    })
  }, [])

  useEffect(() => {
    if (!cartHydrated) return
    saveCartToStorage(cartItems)
  }, [cartItems, cartHydrated])

  const openCart = useCallback(() => setIsCartOpen(true), [])
  const closeCart = useCallback(() => setIsCartOpen(false), [])

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id)
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }, [])

  const handleUpdateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== productId))
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      )
    }
  }, [])

  const handleRemoveItem = useCallback((productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }, [])

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen">
      <Header cartItemCount={cartItemCount} onCartClick={openCart} />

      <main>
        <Hero />
        <CollectionGrid />
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ProductGrid 
          selectedCategory={selectedCategory}
          onAddToCart={handleAddToCart}
        />
      </main>

      <Footer />

      <SideCart
        isOpen={isCartOpen}
        onClose={closeCart}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  )
}
