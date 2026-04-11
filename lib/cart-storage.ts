import type { CartItem } from '@/components/store/side-cart'

const STORAGE_KEY = 'bymi-cart-v1'

function isCartItem(x: unknown): x is CartItem {
  if (!x || typeof x !== 'object') return false
  const o = x as Record<string, unknown>
  return (
    typeof o.id === 'string' &&
    typeof o.name === 'string' &&
    typeof o.price === 'number' &&
    Number.isFinite(o.price) &&
    typeof o.image === 'string' &&
    typeof o.dimensions === 'string' &&
    typeof o.material === 'string' &&
    typeof o.collection === 'string' &&
    typeof o.category === 'string' &&
    typeof o.quantity === 'number' &&
    Number.isFinite(o.quantity) &&
    o.quantity >= 1
  )
}

export function loadCartFromStorage(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(isCartItem)
  } catch {
    return []
  }
}

export function saveCartToStorage(items: CartItem[]): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Quota or private mode — ignore
  }
}
