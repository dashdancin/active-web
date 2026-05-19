# Active 24 Web — AGENTS.md

## Stack (verificado en config)
- Astro 5, Tailwind CSS 4 (`@tailwindcss/vite`), TypeScript strict (`astro/tsconfigs/strict`)
- Sin React, Vue, SPA — solo `.astro` components con `<script>` vanilla donde se necesita interactividad
- Sin framework de testing, sin linter/formatter, sin CI

## Comandos
```sh
npm run dev          # servidor local
npm run build        # compila a dist/
npm run preview      # vista previa del build
npm run astro -- check   # type-check (única validación disponible)
```
No hay lint, test, ni formateo. El type-check vía `@astrojs/check` es lo único que se ejecuta para validar.

## Convenciones del repo
- **Path alias**: `@/` mapea a `./src/*` — usar en imports de componentes (`import X from '@/components/...'`)
- **Idioma**: español (etiquetas, contenido, nombres de rutas, atributos `lang="es"`)
- **Tailwind 4**: la configuración via CSS (`@import "tailwindcss"` en `global.css`). `tailwind.config.js` es legacy de TW3 — no modificar/confiar; aplicar estilos con clases TW4 o CSS nativo
- **Fuentes corporativas**: BullText-Regular, BullText-Bold, BullText-Medium vía `@font-face` en `BaseLayout.astro`
- **Font Awesome**: CDN global en `BaseLayout.astro` — no instalar paquete npm
- **Formulario demo** (LeadFormSection): frontend-only, sin backend. No asumir persistencia
- **Slides hero**: datos en `Header.astro` — referencian `/media/badge-promo.png` que **no existe** (genera 404 constantes en dev)

## Arquitectura
- 4 rutas: `/` (landing), `/horarios`, `/codigo-de-conducta`, `/preguntas-frecuentes`
- Layout único: `BaseLayout.astro` (carga fuentes, FA, estilos base)
- `src/data/classes.ts` — datos tipados de clases (única fuente de datos estructurados)
- `public/media/` — assets estáticos (imágenes, video hero)

## Archivos heredados (no tocar a menos que se pida explícito)
- `Calendario.html`, `Formulario.liquid`, `Formulario1.liquid` — versiones previas de referencia
- `tailwind.config.js` — no tiene efecto (TW4 usa CSS nativo)
