"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface Product {
  id: string
  name: string
  price: number
  image: string
  dimensions: string
  material: string
  collection: string
  category: string
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="aspect-square relative overflow-hidden bg-secondary/30 rounded-sm mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Add Button */}
        <div className={`absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            size="sm"
            className="rounded-full gap-2 bg-background text-foreground hover:bg-background/90"
            onClick={() => onAddToCart(product)}
          >
            <Plus className="h-4 w-4" />
            Añadir
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-serif text-base">{product.name}</h3>
        
        {/* Details on hover */}
        <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-xs text-muted-foreground">
            {product.dimensions} · {product.material}
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground">{product.price.toFixed(2)} €</p>
      </div>
    </article>
  )
}
