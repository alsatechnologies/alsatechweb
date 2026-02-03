# Alsatech Web

Sitio web oficial de Alsatechologies - Software that shapes the future

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
alsatechweb/
├── app/                    # Páginas y rutas (Next.js App Router)
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Estilos globales
│   ├── servicios/         # Páginas de servicios
│   ├── nosotros/          # Página Nosotros
│   ├── industrias/        # Página Industrias
│   ├── proceso/           # Página Proceso
│   ├── casos/             # Página Casos de Éxito
│   └── contacto/          # Página Contacto
├── components/            # Componentes React
│   ├── Header.tsx        # Navegación principal
│   ├── Footer.tsx        # Footer
│   ├── CTAButton.tsx     # Botón CTA reutilizable
│   └── sections/         # Secciones de la home
└── imagenes/             # Assets de imágenes
```

## 🎨 Diseño

- **Estilo:** Brutalist-tech
- **Colores:** Fondo oscuro (#141414) con acentos naranja (#ff4606)
- **Tipografía:** Space Grotesk (headings), Inter (body)
- **Framework:** Next.js 14 + React + TypeScript
- **Estilos:** Tailwind CSS

## 📱 Responsive

- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px

## 🔧 Tecnologías

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animaciones)

## 📝 Notas

- El formulario de contacto actualmente muestra una alerta. Conecta con tu backend/API para procesar los datos.
- Las imágenes del logo están en `/imagenes/`. Asegúrate de optimizarlas antes de producción.
- Configura variables de entorno si necesitas APIs externas.

## 🚀 Deploy

Listo para deploy en:
- Vercel (recomendado para Next.js)
- Netlify
- AWS Amplify
- Cualquier plataforma que soporte Next.js
