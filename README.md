# byMi (front)

Tienda estática de stickers construida con [Next.js](https://nextjs.org/) (App Router), React 19 y Tailwind CSS v4. El sitio se exporta como HTML estático (`output: 'export'`).

## Requisitos

- Node.js 22+ (recomendado; alineado con CI)
- npm

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando        | Descripción                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Servidor de desarrollo                           |
| `npm run build` | Genera la exportación estática en la carpeta `out/` |
| `npm run start` | Sirve un build de Next no estático (si aplica)   |
| `npm run lint` | ESLint (config `eslint-config-next`)             |
| `npm run typecheck` | `tsc --noEmit`                              |

## Variables de entorno

- **`NEXT_PUBLIC_SITE_URL`** — URL canónica del sitio (origen, sin barra final). Se usa para `metadataBase` y Open Graph. En local puedes omitirla (por defecto `http://localhost:3000`). En producción, define algo como `https://tudominio.com` **antes** de `npm run build` para que los metadatos absolutos sean correctos.

## Despliegue (export estático)

Tras `npm run build`, sube el contenido de la carpeta **`out/`** a tu hosting estático (GitHub Pages, S3, etc.). Las imágenes remotas de producto usan `images.unsplash.com` (declarado en `next.config.mjs` por si activas optimización de imágenes más adelante).

## Carrito

El carrito se guarda en `localStorage` (clave `bymi-cart-v1`) y se revalida al cargar para evitar datos corruptos.
