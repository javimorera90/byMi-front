"use client"

import Image from "next/image"

interface Collection {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

const collections: Collection[] = [
  {
    id: "nacionalidades",
    name: "Nacionalidades",
    description: "Banderas, iconos y cultura de todo el mundo",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
    productCount: 42
  },
  {
    id: "series-tv",
    name: "Series y TV",
    description: "Tus personajes y shows favoritos",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
    productCount: 56
  },
  {
    id: "arte",
    name: "Arte",
    description: "Ilustraciones, pinturas y creatividad",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    productCount: 38
  },
  {
    id: "deportes",
    name: "Deportes",
    description: "Futbol, basket, tenis y mas",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    productCount: 31
  },
  {
    id: "comida",
    name: "Comida",
    description: "Snacks, frutas y delicias para tu coleccion",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    productCount: 28
  }
]

interface CollectionGridProps {
  onCollectionClick?: (collectionId: string) => void
}

export function CollectionGrid({ onCollectionClick }: CollectionGridProps) {
  return (
    <section id="colecciones" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl mb-3">
            Colecciones
          </h2>
          <p className="text-muted-foreground">
            Encuentra tu estilo favorito
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {collections.map((collection) => (
            <article 
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300 aspect-square"
              onClick={() => onCollectionClick?.(collection.id)}
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-end text-white">
                <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full w-fit mb-2">
                  {collection.productCount} stickers
                </span>
                <h3 className="font-serif text-xl lg:text-2xl">
                  {collection.name}
                </h3>
                <p className="text-sm opacity-80 mt-1 hidden sm:block">
                  {collection.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
