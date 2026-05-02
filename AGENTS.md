# manicuristaKey

Astro 5.x static site for a nails/beauty salon portfolio.

## Commands

| Command | Action |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Type-check with Astro |

## Tech Stack

- **Astro 5.x** with static site generation
- **TailwindCSS 4.x** (via `@tailwindcss/vite`, not a Tailwind config file)
- **TypeScript** (strict mode via `astro/tsconfigs/strict`)

## Architecture

- Data-driven pages: `src/pages/[ruta].astro` generates static paths from `src/lib/Data/Categorias.json`
- Components in `src/components/`
- Layouts in `src/layouts/`
- No tests configured; no lint/format scripts in `package.json`

## Gotchas

- TailwindCSS 4.x uses Vite plugin (`@tailwindcss/vite`), not a `tailwind.config.js` file
- Dynamic routes use `getStaticPaths()` for SSG - adding new categories requires updating `Categorias.json`, not the route file
- Images in `public/Imagenes/Nails/` are referenced by name in JSON; ensure matching filenames

## SEO (Search Engine Optimization)

**Implemented for Honduras market (Atlantida, Tela, Santa Rosa del Norte, Mezapa):**

- **Meta tags**: Optimized title, description, keywords with location-specific terms
- **Open Graph**: Social media preview cards for Facebook, Twitter
- **Schema.org**: LocalBusiness structured data with geo-coordinates for local search
- **Sitemap**: `public/sitemap.xml` - submit to Google Search Console
- **Robots.txt**: `public/robots.txt` for crawler access

**Key SEO files:**
- `src/layouts/Layout.astro` - Main SEO meta tags, structured data, Open Graph
- `src/pages/[ruta].astro` - Dynamic meta descriptions per category
- `public/sitemap.xml` - XML sitemap with all pages
- `public/robots.txt` - Crawler instructions

**To improve local SEO:**
1. Register in Google Business Profile (Google My Business)
2. Submit sitemap to Google Search Console
3. Get reviews from clients in Honduras
4. Add more location-specific content (blog posts about Tela, Mezapa, etc.)