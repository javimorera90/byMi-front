"use client"

import { ProductCard, type Product } from "./product-card"

const products: Product[] = [
  {
    id: "1",
    name: "Mariposa Monarca",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=400&q=80",
    dimensions: "5 × 5 cm",
    material: "Vinilo mate",
    collection: "naturaleza-ilustrada",
    category: "animales"
  },
  {
    id: "2",
    name: "Helecho Tropical",
    price: 2.90,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80",
    dimensions: "4 × 6 cm",
    material: "Vinilo brillante",
    collection: "botanica",
    category: "botanica"
  },
  {
    id: "3",
    name: "Circuito Neón",
    price: 4.20,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
    dimensions: "6 × 6 cm",
    material: "Holográfico",
    collection: "cyberpunk",
    category: "abstracto"
  },
  {
    id: "4",
    name: "Luna Geométrica",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=400&q=80",
    dimensions: "5 × 5 cm",
    material: "Vinilo mate",
    collection: "minimal",
    category: "abstracto"
  },
  {
    id: "5",
    name: "Colibrí Acuarela",
    price: 3.80,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&q=80",
    dimensions: "4 × 5 cm",
    material: "Vinilo mate",
    collection: "naturaleza-ilustrada",
    category: "animales"
  },
  {
    id: "6",
    name: "Monstera Deliciosa",
    price: 3.20,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80",
    dimensions: "5 × 7 cm",
    material: "Vinilo brillante",
    collection: "botanica",
    category: "botanica"
  },
  {
    id: "7",
    name: "Gato Espacial",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80",
    dimensions: "6 × 6 cm",
    material: "Holográfico",
    collection: "cyberpunk",
    category: "animales"
  },
  {
    id: "8",
    name: "Onda Minimalista",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    dimensions: "3 × 6 cm",
    material: "Vinilo mate",
    collection: "minimal",
    category: "abstracto"
  }
]

interface ProductGridProps {
  selectedCategory: string
  onAddToCart: (product: Product) => void
}

export function ProductGrid({ selectedCategory, onAddToCart }: ProductGridProps) {
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Nuestros diseños
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight">
            Stickers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No hay stickers en esta categoría todavía.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
