# Active 24 Web
Sitio web promocional de Active 24 construido con Astro + Tailwind CSS.

## Stack técnico
- Astro 5
- Tailwind CSS 4 (`@tailwindcss/vite`)
- TypeScript (configuración strict de Astro)

## Estructura principal
```text
src/
  components/   # Bloques reutilizables de UI (hero, footer, formulario, horarios, etc.)
  data/         # Datos tipados para vistas (ej. clases)
  layouts/      # Layout base global
  pages/        # Rutas públicas (/, /horarios)
  styles/       # Estilos globales
public/
  media/        # Imágenes y video estáticos
  fonts/        # Tipografías de marca
```

## Comandos
- `npm install`: instala dependencias
- `npm run dev`: levanta entorno local
- `npm run build`: compila a `dist/`
- `npm run preview`: vista previa del build
- `npm run astro -- check`: validación de tipos y diagnósticos Astro

## Notas de implementación
- El formulario de registro/pase gratuito funciona actualmente en modo demo (frontend), sin persistencia en backend.
- El ícono set de Font Awesome se carga de forma global desde `src/layouts/BaseLayout.astro`.

## Recomendaciones pendientes
- Conectar formulario a un endpoint real (CRM/API) con validación de servidor.
- Añadir pruebas automáticas (componentes o e2e) para flujos críticos.
