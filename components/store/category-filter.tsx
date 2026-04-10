"use client"

import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "Todos" },
  { id: "nacionalidades", name: "Nacionalidades" },
  { id: "series-tv", name: "Series y TV" },
  { id: "arte", name: "Arte" },
  { id: "deportes", name: "Deportes" },
  { id: "comida", name: "Comida" },
  { id: "animales", name: "Animales" },
  { id: "memes", name: "Memes" },
]

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <section id="categorias" className="py-8 px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              size="sm"
              className={`rounded-full px-6 py-2.5 text-sm transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-foreground text-background hover:bg-foreground hover:text-background shadow-md"
                  : "bg-background hover:bg-background/80 border border-border"
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
